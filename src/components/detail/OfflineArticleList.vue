<template>
    <div>
        <div v-if="!isShowingArticle">
            <article-sketch v-for="article in articleList" :key="article.id" v-bind="article"/>
            <pagination
                    :total-page="6"
                    :current-page="currentPage"
                    @navigate="navigate"
            />
        </div>
        <div v-else>
            <router-view/>
        </div>
    </div>
</template>

<script>
    import Pagination from "./Pagination";
    import ArticleSketch from "./ArticleSketch";

    /***
     * 不带网络请求的普通articleList
     * events:@navigate调到第几页
     */

    export default {
        name: "OfflineArticleList",
        components: {ArticleSketch, Pagination},
        props: {
            // 当前页
            currentPage: {
                type: Number,
                default: 1
            },
            articleList: Array,
            totalPage: {
                type: Number,
                default: 10
            },
            pageSize: {
                type: Number,
                default: 10
            }
        },
        data() {
            return {
                test: 3,
                isShowingArticle: false
            }
        },
        methods:{
            navigate(page){
                this.$emit('navigate',page)
            }
        },
        watch: {
            $route(val) {
                this.isShowingArticle = val.matched.some(route => route.meta && route.meta.isArticle)
            }
        }
    }
</script>

<style scoped>

</style>