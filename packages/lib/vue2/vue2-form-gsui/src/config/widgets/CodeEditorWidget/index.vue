<template>
    <div ref="codeEditor" class="code_editor"></div>
</template>

<script>
// import * as monaco from 'monaco-editor';
import loader from '@monaco-editor/loader';
// loader.config({ monaco: window.monaco });

export default {
    name: 'CodeEditorWidget',
    components: {
    },
    data() {
        return {
            test: null,
            editor: null
        };
    },
    mounted() {
        const editorEl = this.$refs.codeEditor;
        loader.init().then((_monaco) => {
            _monaco.editor.create(editorEl, {
                value: '// some comment',
                language: 'javascript',
            });
        });
    },
};
</script>

<style>
.code_editor {
    min-height: 150px;
}
</style>
