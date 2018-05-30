<template>
    <div>
        <nav-bar2 search-bar-place-holder="搜索相关信息"/>
        <section class="content">
            <my-breadcrumb/>
            <page-title>CONTACT US</page-title>
            <el-menu mode="horizontal">
                <el-menu-item  :index="1">
                    <router-link :to="{name:'contact'}">联系我们</router-link>
                </el-menu-item>
            </el-menu>
            <router-view/>
        </section>
        <the-footer/>
    </div>
</template>

<script>
    import TheFooter from "../components/TheFooter";
    import NavBar2 from "../components/detail/NavBar2";
    import MyBreadcrumb from "../components/detail/MyBreadcrumb";
    import PageTitle from "../components/detail/PageTitle";
    export default {
        name: "Contact",
        components: {PageTitle, MyBreadcrumb, NavBar2, TheFooter}
    }
</script>

<style scoped lang="scss">
    @import "../style/variables";

    section.content {
        padding: $index-section-paddding;
    }
</style>