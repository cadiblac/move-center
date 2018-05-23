<template>
    <div class="section-content">
        <slot></slot>
        <div class="more">
            <slot name="more"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SectionContent"
    }
</script>

<style scoped lang="scss">
    .section-content {
        padding: 4em 0;

        .more {
            padding-bottom: 1em;
            font-size: .9em;
            text-align: center;
        }
    }
</style>