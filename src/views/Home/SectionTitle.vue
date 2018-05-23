<template>
    <div class="section-title">
        <h1 class="title__eng"><slot name="eng"></slot></h1>
        <h1 class="title__chs"><slot name="chs"></slot></h1>
    </div>
</template>

<script>
    export default {
        name: "SectionTitle"
    }
</script>

<style scoped lang="scss">
    .section-title{
        text-align: center;
        margin-bottom: 2em;

        .title__chs{
            font-weight: normal;
            margin: 0;
            font-size: 1.3em;
            color: rgb(20, 68, 131);
        }
        .title__eng{
            margin: 0;
            font-size: 2.5em;
            color: rgb(202, 202, 202);
        }
    }
</style>