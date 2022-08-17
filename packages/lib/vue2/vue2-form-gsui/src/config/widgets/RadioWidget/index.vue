<template>
    <gs-radio-group
        v-bind="$attrs"
        v-on="$listeners"
    >
        <gs-radio
            v-for="(item, index) in enumOptions"
            :key="index"
            :label="item.value"
        >
            {{ item.label }}
        </gs-radio>
    </gs-radio-group>
</template>

<script>
export default {
    name: 'RadioWidget',
    props: {
        enumOptions: {
            default: () => [],
            type: [Array]
        }
    }
};
</script>
