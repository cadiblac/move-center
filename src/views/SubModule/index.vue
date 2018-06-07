<template>
    <div>
        <self-adaption-article-list :type="type" :sub-type="subType"/>
    </div>
</template>

<script>
    import SelfAdaptionArticleList from "../../components/detail/SelfAdaptionArticleList";
    export default {
        name: "index",
        components: {SelfAdaptionArticleList},
        computed: {
            meta() {
                return Object.assign({}, ...this.$route.matched.map(route => route.meta))
            },
            currentSubModule() {
                return this.meta.currentSubModule
            },
            type(){
                return this.meta.type
            },
            subType(){
                return this.meta.subType
            },
        }
    }
</script>

<style scoped>

</style>