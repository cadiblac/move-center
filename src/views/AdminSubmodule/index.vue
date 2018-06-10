<template>
    <no-self-adaption-article-list v-else :type="type" :sub-type="0"/>
</template>

<script>
    import NoSelfAdaptionArticleList from "../../components/detail/NoSelfAdaptionArticleList";
    import path from 'path'

    export default {
        name: "index",
        components: {NoSelfAdaptionArticleList},
        data() {
            return {
                path
            }
        },
        computed: {

            meta() {
                return Object.assign({}, ...this.$route.matched.map(route => route.meta))
            },
            subType() {
                return this.meta.subType
            },
            type() {
                return this.meta.type
            }

        }
    }
</script>

<style scoped>

</style>