<template>
    <div>
        <article-sketch v-for="article in articleList" :key="article.id" v-bind="article"/>
    </div>
</template>

<script>
    import {generateArticleList} from "../../mockServer";
    import ArticleSketch from "./ArticleSketch";

    export default {
        name: "ArticleList",
        components: {ArticleSketch},
        props: {
            type: {
                type: Number
            },
            subType: {
                type: Number,
                default: 0
            }

        },
        data() {
            return {
                articleList: generateArticleList(4)
            }
        },
        methods: {
            handleVisit(id) {
                this.$emit('visit', id)
            }
        }
    }
</script>

<style scoped>

</style>