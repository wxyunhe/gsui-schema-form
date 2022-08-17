<template>
    <div class="gs-color">
        <gs-popover
            popper-class="gs-color-picker-popper"
            :arrow="false"
            placement="bottom-start"
        >
            <a
                slot="reference"
                class="picker-btn"
                @click="toggle"
            >
                <span
                    class="picker-btn-bg"
                    :style="{
                        backgroundColor: model
                    }"
                ></span>
            </a>
            <chrome-color-picker v-model="model" />
        </gs-popover>
    </div>
</template>

<script>
import VueColor from 'vue-color';

export default {
    name: 'ColorPickerWidget',
    components: {
        'chrome-color-picker': VueColor.Chrome
    },
    props: {
        value: {
            type: String,
            default: ''
        },
    },
    emits: ['input'],

    data() {
        return {
            visible: false
        };
    },
    computed: {
        model: {
            get() {
                return this.value;
            },
            set(val) {
                if (val.a < 1) {
                    const {
                        r, g, b, a
                    } = val.rgba;
                    this.$emit('input', `rgba(${r}, ${g}, ${b}, ${a})`);
                } else {
                    this.$emit('input', val.hex);
                }
            }
        }
    },
    methods: {
        toggle() {
            this.visible = !this.visible;
        },
    },
};
</script>


<style>
.gs-popover.gs-color-picker-popper {
    padding: 0;
    border: 0;
}

.gs-color .picker-btn {
    display: inline-block;
    padding: 4px;
    border: 1px solid #ddd;
    border-radius: 3px;
}

.gs-color .picker-btn-bg {
    display: block;
    width: 100px;
    height: 20px;
}
</style>
