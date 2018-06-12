<template>
    <div>
        <nav-bar2/>
        <section class="content">
            <my-breadcrumb/>
            <page-title>{{title}}</page-title>
            <el-menu mode="horizontal">
                <el-menu-item :index="module.path" v-for="module in modules" :key="module.path">
                    <router-link :to="path.join(urlBasePath,module.path)">{{module.name}}</router-link>
                </el-menu-item>
            </el-menu>
            <router-view/>
        </section>
        <the-footer/>
    </div>
</template>

<script>
    import NavBar2 from "../../components/detail/NavBar2";
    import MyBreadcrumb from "../../components/detail/MyBreadcrumb";
    import PageTitle from "../../components/detail/PageTitle";
    import TheFooter from "../../components/TheFooter";
    import path from 'path'

    export default {
        name: "index",
        components: {TheFooter, PageTitle, MyBreadcrumb, NavBar2},
        data() {
            return {
                path
            }
        },
        computed: {
            meta() {
                return Object.assign({}, ...this.$route.matched.map(route =>route.meta))
            },
            title() {
                return this.meta.title
            },
            modules() {
                return this.meta.modules
            },
            urlBasePath() {
                return this.meta.urlBasePath
            }

        },
    }
</script>


<style scoped lang="scss">
    @import "../../style/variables";

    section.content {
        padding: $index-section-paddding;
    }
</style>