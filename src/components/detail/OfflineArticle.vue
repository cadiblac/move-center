<template>
    <article>
        <h1>{{title}}</h1>
        <p class="info">作者：{{author}}</p>
        <p class="info2">发布时间：{{date}}|查看次数：{{visit}}</p>
        <div v-html="content"></div>
        <div>
            <p>附件信息：</p>
            <p v-if="annex&&annex.length===0">无附件</p>

            <a v-for="annexItem in annex" :key="annexItem.id" :href="getAnnexDownloadUrl(annexItem.id)">
                <el-tag>{{annexItem.name}}</el-tag>
            </a>
        </div>
    </article>
</template>

<script>
    import {getAnnexDownloadUrl} from "../../API";

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
            annex: Array
        },
        data() {
            return {
                getAnnexDownloadUrl
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