<template>
    <gs-select
        v-bind="$attrs"
        v-on="$listeners"
    >
        <gs-option
            v-for="(item, index) in enumOptions"
            :key="index"
            :label="item.label"
            :value="item.value"
        ></gs-option>
    </gs-select>
</template>

<script>
export default {
    name: 'SelectWidget',
    props: {
        enumOptions: {
            default: () => [],
            type: [Array]
        }
    }
};
</script>
