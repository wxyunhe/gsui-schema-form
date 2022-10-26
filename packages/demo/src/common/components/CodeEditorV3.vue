<template>
  <el-card shadow="hover" body-style="padding: 0;">
    <template #header>
      <div class="clearfix">
        <span>{{ title }}</span>
      </div>
    </template>

    <div class="monaco-editor-vue3" ref="editorRef" :style="style">
    </div>
  </el-card>
</template>

<script>
import { defineComponent } from "vue";
import loader from "@monaco-editor/loader";

let monaco;

loader.config({
  paths: { vs: "public/libs/monaco-editor/vs" },
});
loader.config({ "vs/nls": { availableLanguages: { "*": "zh-cn" } } });

export default defineComponent({
  name: "MonacoEditor",
  props: {
    title: {
      type: String,
      default: ''
    },
    diffEditor: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [String, Number],
      default: "100%",
    },
    height: {
      type: [String, Number],
      default: "400",
    },
    original: {
      type: String,
    },
    value: {
      type: String,
    },
    language: {
      type: String,
      default: "json",
    },
    theme: {
      type: String,
      default: "vs",
    },
    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      loading: true,
    };
  },
  emits: ["editorWillMount", "editorDidMount", "change", "update:value"],
  computed: {
    style() {
      const width = this.width;
      const height = this.height;

      const fixedWidth = width.toString().includes("%") ? width : `${width}px`;
      const fixedHeight = height.toString().includes("%")
        ? height
        : `${height}px`;

      return {
        width: fixedWidth,
        height: fixedHeight,
        "text-align": "left",
      };
    },
  },
  mounted() {
    loader.init().then((_monaco) => {
      monaco = _monaco;
      this._setLoading(false);
      this.initMonaco();
    });
  },
  beforeDestroy() {
    this.editor && this.editor.dispose();
  },
  methods: {
    initMonaco() {
      this.$emit("editorWillMount", monaco);
      const { value, language, theme, options } = this;
      this.editor = monaco.editor[
        this.diffEditor ? "createDiffEditor" : "create"
      ](this.$refs.editorRef, {
        value: value,
        language: language,
        theme: theme,
        ...options,
      });
      this.diffEditor && this._setModel(this.value, this.original);

      // @event `change`
      const editor = this._getEditor();
      editor &&
        editor.onDidChangeModelContent((event) => {
          const value = editor.getValue();
          if (this.value !== value) {
            this.$emit("change", value, event);
            this.$emit("update:value", value);
          }
        });

      this.$emit("editorDidMount", this.editor);
    },
    _setModel(value, original) {
      const { language } = this;
      const originalModel = monaco.editor.createModel(original, language);
      const modifiedModel = monaco.editor.createModel(value, language);
      this.editor.setModel({
        original: originalModel,
        modified: modifiedModel,
      });
    },
    _setValue(value) {
      let editor = this._getEditor();
      if (editor) return editor.setValue(value);
    },
    _getValue() {
      let editor = this._getEditor();
      if (!editor) return "";
      return editor.getValue();
    },
    _getEditor() {
      if (!this.editor) return null;
      return this.diffEditor ? this.editor.modifiedEditor : this.editor;
    },
    _setOriginal() {
      const { original } = this.editor.getModel();
      original.setValue(this.original);
    },
    _setLoading(loading) {
      this.loading = loading || false;
    },
  },
  watch: {
    options: {
      deep: true,
      handler(options) {
        this.editor.updateOptions(options);
      },
    },
    value() {
      this.value !== this._getValue() && this._setValue(this.value);
    },
    original() {
      this._setOriginal();
    },
    language() {
      if (!this.editor) return;
      if (this.diffEditor) {
        const { original, modified } = this.editor.getModel();
        monaco.editor.setModelLanguage(original, this.language);
        monaco.editor.setModelLanguage(modified, this.language);
      } else
        monaco.editor.setModelLanguage(this.editor.getModel(), this.language);
    },
    theme() {
      monaco.editor.setTheme(this.theme);
    },
  },
});
</script>
