<template>
    <article>
        <h1>{{title}}</h1>
        <p class="info">作者：{{author}}</p>
        <p class="info2">发布时间：{{date}}|查看次数：{{visit}}</p>
        <div v-html="content"></div>
        <div>
            <p>附件信息：</p>
            <p v-for=""></p>
        </div>
    </article>
</template>

<script>
    export default {
        name: "offline-article",
        props: {
            id: {
                type: Number,
                required: true
            },
            title: String,
            author: String,
            face: String,
            summary: String,
            date: String,
            visit: Number,
            content: String,
            from: String,
            annex: String
        },
        data() {
            return {
            }
        }
    }
</script>

<style scoped lang="scss">
    article {
        h1 {
            text-align: center;
        }
        p.info, p.info2 {
            text-align: center;
            font-size: .9em;
        }
    }
</style>