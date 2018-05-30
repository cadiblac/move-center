<template>
    <div>
        <nav-bar2 search-bar-place-holder="搜索相关信息"/>
        <section class="content">
            <my-breadcrumb/>
            <page-title>GUIDENCE</page-title>
            <el-menu mode="horizontal">
                <el-menu-item index="1">
                    <router-link :to="path.join(routePrefix,'process')">办事流程</router-link>
                </el-menu-item>
                <el-menu-item index="2">
                    <router-link :to="path.join(routePrefix,'download')">常用下载</router-link>
                </el-menu-item>
            </el-menu>
            <router-view/>
        </section>
        <the-footer/>
    </div>
</template>

<script>
    import path from 'path'
    import TheFooter from "../components/TheFooter";
    import NavBar2 from "../components/detail/NavBar2";
    import PageTitle from "../components/detail/PageTitle";
    import MyBreadcrumb from "../components/detail/MyBreadcrumb";

    export default {
        name: "Guidence",
        components: {MyBreadcrumb, PageTitle, NavBar2, TheFooter},
        data() {
            return {
                routePrefix: '/guidence',
                path
            }
        },
    }
</script>


<style scoped lang="scss">
    @import "../style/variables";

    section.content {
        padding: $index-section-paddding;
    }
</style>