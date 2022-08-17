<template>
    <gs-checkbox-group
        v-bind="$attrs"
        v-on="$listeners"
    >
        <gs-checkbox
            v-for="(item, index) in enumOptions"
            :key="index"
            :label="item.value"
        >
            {{ item.label }}
        </gs-checkbox>
    </gs-checkbox-group>
</template>

<script>
export default {
    name: 'CheckboxesWidget',
    props: {
        enumOptions: {
            default: () => [],
            type: [Array]
        }
    }
};
</script>
