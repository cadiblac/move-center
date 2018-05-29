<template>
    <div>
        <nav-bar2 search-bar-place-holder="搜索相关信息"/>
        <section class="content">
            <my-breadcrumb/>
            <page-title>TECHNOLOGY MANAGER</page-title>
            <el-menu mode="horizontal">
                <el-menu-item index="1">
                    <router-link :to="{name:'experts'}">专家库</router-link>
                </el-menu-item>
                <el-menu-item index="2">
                    <router-link :to="{name:'cooperation'}">合作案例</router-link>
                </el-menu-item>
                <el-menu-item index="3">
                    <router-link :to="{name:'enterpriseRequirement'}">企业需求</router-link>
                </el-menu-item>
            </el-menu>
            <router-view/>
        </section>
        <the-footer/>
    </div>
</template>

<script>
    import NavBar2 from "../components/detail/NavBar2";
    import PageTitle from "../components/detail/PageTitle";
    import MyBreadcrumb from "../components/detail/MyBreadcrumb";
    import TheFooter from "../components/TheFooter";
    export default {
        name: "technology-manager",
        components: {TheFooter, MyBreadcrumb, PageTitle, NavBar2}
    }
</script>

<style scoped lang="scss">
    @import "../style/variables";

    section.content {
        padding: $index-section-paddding;
    }
</style>