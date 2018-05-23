<template>
    <div>
        <article-sketch v-bind="articleList[0]" />
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
            subType:{
                type:Number,
                default:0
            }

        },
        data(){
            return{
                articleList:generateArticleList(4)
            }
        }
    }
</script>

<style scoped>

</style>