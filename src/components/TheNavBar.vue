<template>
    <div class="nav-bar">
        <div class="left">
            <router-link to="/"><img src="../assets/logo.png" class="logo" style="width: 300px"></router-link>
        </div>
        <div class="right">
            <div class="row row-1" style="margin: 2em 0 0 0;">
                <el-button circle style="margin:0 1em;padding: 8px">
                    <img src="../assets/contact.png" style="width: 1em;height: 1em">
                </el-button>
                <search-bar/>
            </div>
            <el-menu
                    text-color="#b1bac6"
                    active-text-color="#ccc"
                    style="background-color: rgba(50,50,50,0)"
                    :default-active="'1'"
                    class="nav-menu"
                    mode="horizontal"
                    :popper-append-to-body="false"
                    router>
                <el-menu-item index="/home">首页</el-menu-item>
                <template v-for="category in moduleInfos">
                    <el-submenu
                            v-if="category.modules.length>=2"
                            :key="category.path"
                            popper-class="nav-bar__submenu"
                            :index="path.join('/',category.path)"
                            :popper-append-to-body="false">
                        <template slot="title">{{category.name}}</template>
                        <el-menu-item
                                v-for="module in category.modules"
                                :key="module.path"
                                :index="path.join('/',category.path,module.path)">{{module.name}}
                        </el-menu-item>
                    </el-submenu>
                    <el-menu-item
                            v-else
                            :key="category.path"
                            :index="path.join('/',category.path)">{{category.name}}
                    </el-menu-item>

                </template>
            </el-menu>
        </div>
    </div>
</template>

<script>
    import SearchBar from "./SearchBar";
    import MyHr from "./MyHr";
    import moduleInfos from '../moduleInfos'
    import path from 'path'

    export default {
        name: "TheNavBar",
        components: {MyHr, SearchBar},
        comments: {
            SearchBar
        },
        data() {
            return {
                moduleInfos,
                path
            }
        }
    }
</script>

<style scoped>
    .nav-bar {
        box-sizing: border-box;
        width: 100%;
        padding: 0 2em;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        justify-content: space-between;
        background-color: rgba(44, 66, 99, .9);
        position: relative;
    }

    .nav-bar > .right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
</style>
<style>
    .nav-bar .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
        background-color: transparent;
    }

    .nav-bar__submenu .el-menu--popup {
        background-color: rgba(255, 255, 255, .7) !important;
    }

    .nav-bar__submenu .el-menu-item {
        background-color: transparent !important;
    }

    .nav-bar__submenu .el-menu-item {
        color: #08264d !important;
    }
</style>