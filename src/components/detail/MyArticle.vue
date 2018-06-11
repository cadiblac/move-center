<template>
    <offline-article :id="id" v-bind="article"/>
</template>

<script>
    import {getArticleById} from "../../API";
    import OfflineArticle from "./OfflineArticle";

    export default {
        name: "my-article",
        components: {OfflineArticle},
        created() {
            getArticleById(this.id).then(article => {
                this.article = article
            })
        },
        props: {
            id: {
                type: Number,
                required: true
            },
        },
        data() {
            return {
                article: {}
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