<template>
    <div>
        <nav-bar2 search-bar-place-holder="搜索相关信息"/>
        <section class="content">
            <my-breadcrumb/>
            <page-title>OVERVIEW</page-title>
            <el-menu mode="horizontal">
                <el-menu-item index="1">
                    <router-link :to="{name:'introduction'}">中心简介</router-link>
                </el-menu-item>
                <el-menu-item index="2">
                    <router-link :to="{name:'staff'}">中心人员</router-link>
                </el-menu-item>
                <el-menu-item index="3">
                    <router-link :to="{name:'institution'}">分支机构</router-link>
                </el-menu-item>
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
    import MyBreadcrumb from "../components/detail/MyBreadcrumb";

    export default {
        name: "Overview",
        components: {MyBreadcrumb, PageTitle, TheFooter, NavBar2}
    }
</script>

<style scoped lang="scss">

    @import "../style/variables";

    section.content {
        padding: $index-section-paddding;
    }

</style>