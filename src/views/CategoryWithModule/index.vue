<template>
    <div>
        <nav-bar2 search-bar-place-holder="搜索相关信息"/>
        <section class="content">
            <my-breadcrumb/>
            <page-title>{{title}}</page-title>
            <div>
                <h1>Module:{{currentModule.name}}</h1>
                <router-link
                        v-for="subModule in subModules" :key="subModules.path"
                        :to="path.join('/',currentModule.path,subModule.path)">
                    <el-button>{{subModule.name}}</el-button>
                </router-link>
                <div>
                    <div v-if="currentModule.subModules">
                        <router-view/>
                    </div>
                    <self-adaption-article-list v-else :type="type" :sub-type="0"/>
                </div>
            </div>
        </section>
        <the-footer/>
    </div>
</template>

<script>
    import NavBar2 from "../../components/detail/NavBar2";
    import MyBreadcrumb from "../../components/detail/MyBreadcrumb";
    import PageTitle from "../../components/detail/PageTitle";
    import TheFooter from "../../components/TheFooter";
    import SelfAdaptionArticleList from "../../components/detail/SelfAdaptionArticleList";

    export default {
        name: "index",
        components: {SelfAdaptionArticleList, TheFooter, PageTitle, MyBreadcrumb, NavBar2},
        computed: {

            meta() {
                return Object.assign({}, ...this.$route.matched.map(route => route.meta))
            },
            subModules() {
                return this.meta.subModules
            },
            currentModule() {
                return this.meta.currentModule
            },
            type() {
                return this.meta.type
            },
            title() {
                return this.meta.title
            },

        }
    }
</script>

<style scoped lang="scss">
    @import "../../style/variables";

    section.content {
        padding: $index-section-paddding;
    }
</style>