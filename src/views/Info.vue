<template>
    <div>
        <nav-bar2 search-bar-place-holder="搜索相关信息"/>
        <section class="content">
            <my-breadcrumb/>
            <page-title>NEWS</page-title>
            <el-menu mode="horizontal">
                <el-menu-item index="1">最新动态</el-menu-item>
                <el-menu-item index="2">通知公告</el-menu-item>
            </el-menu>
            <router-view/>
        </section>
        <the-footer/>
    </div>
</template>

<script>
    import NavBar2 from "../components/detail/NavBar2";
    import TheFooter from "../components/TheFooter";
    import PageTitle from "../components/detail/PageTitle";
    import ArticleList from "../components/detail/ArticleList";
    import MyArticle from "../components/detail/MyArticle";
    import MyBreadcrumb from "../components/detail/MyBreadcrumb";


    export default {
        name: "Info",
        components: {MyBreadcrumb, MyArticle, ArticleList, PageTitle, TheFooter, NavBar2},
        data() {
            return {}
        },

        methods: {},
    }
</script>

<style scoped lang="scss">
    @import "../style/variables";
    section.content{
        padding: $index-section-paddding;
    }
</style>