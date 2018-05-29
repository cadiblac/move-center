<template>
    <div>
        <nav-bar2 search-bar-place-holder="搜索相关信息"/>
        <section class="content">
            <my-breadcrumb/>
            <page-title>ACHIEVEMENT</page-title>
            <el-menu mode="horizontal">
                <el-menu-item index="1">
                    <router-link :to="{name:'technology'}">科技成果</router-link>
                </el-menu-item>
                <el-menu-item index="2">
                    <router-link :to="{name:'patent'}">专利库</router-link>
                </el-menu-item>
            </el-menu>
            <router-view/>
        </section>
        <the-footer/>
    </div>
</template>

<script>
    import NavBar2 from "../components/detail/NavBar2";
    import MyBreadcrumb from "../components/detail/MyBreadcrumb";
    import PageTitle from "../components/detail/PageTitle";
    import TheFooter from "../components/TheFooter";
    export default {
        name: "Achievement",
        components: {TheFooter, PageTitle, MyBreadcrumb, NavBar2}
    }
</script>

<style scoped lang="scss">
    @import "../style/variables";

    section.content {
        padding: $index-section-paddding;
    }
</style>