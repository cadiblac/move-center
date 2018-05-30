<template>
    <div>
        <nav-bar2 search-bar-place-holder="搜索相关信息"/>
        <section class="content">
            <my-breadcrumb/>
            <page-title>POLICY</page-title>
            <el-menu mode="horizontal">
                <el-menu-item v-for="route in routeInfo" :key="route.path" :index="route.path">
                    <router-link :to="path.join(routePrefix,route.path)">{{route.routeNavName}}</router-link>
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
    import routeInfo from './Policy/routeInfo'

    export default {
        name: "Policy",
        components: {PageTitle, MyBreadcrumb, NavBar2},
        data() {
            return {
                routePrefix: '/policy',
                path,
                routeInfo
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