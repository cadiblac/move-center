<template>
    <div>
        <nav-bar2 search-bar-place-holder="搜索相关信息"/>
        <section class="content">
            <my-breadcrumb/>
            <page-title>PANTENT CENTER</page-title>
            <el-menu mode="horizontal">
                <el-menu-item index="1">
                    <router-link :to="path.join(routePrefix,'process')">专利申请流程</router-link>
                </el-menu-item>
                <el-menu-item index="2">
                    <router-link :to="path.join(routePrefix,'guidence')">专利申请指南</router-link>
                </el-menu-item>
                <el-menu-item index="3">
                    <router-link :to="{name:'patent'}">专利成果</router-link>
                </el-menu-item>
                <el-menu-item index="4">
                    <router-link :to="path.join(routePrefix,'transition')">专利转化</router-link>
                </el-menu-item>
                <el-menu-item index="5">
                    <router-link :to="path.join(routePrefix,'policy')">专利政策法规</router-link>
                </el-menu-item>
                <el-menu-item index="6">
                    <router-link :to="path.join(routePrefix,'tableDownload')">专利表格下载</router-link>
                </el-menu-item>
                <el-menu-item index="7">
                    <router-link :to="path.join(routePrefix,'links')">专利相关链接</router-link>
                </el-menu-item>
            </el-menu>
            <router-view/>
        </section>
        <the-footer/>
    </div>
</template>

<script>
    import path from 'path'
    import NavBar2 from "../components/detail/NavBar2";
    import MyBreadcrumb from "../components/detail/MyBreadcrumb";
    import PageTitle from "../components/detail/PageTitle";
    import TheFooter from "../components/TheFooter";



    export default {
        name: "PatentCenter",
        components: {TheFooter, PageTitle, MyBreadcrumb, NavBar2},
        data() {
            return {
                routePrefix: '/patentCenter',
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