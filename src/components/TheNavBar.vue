<template>
    <div class="nav-bar">
        <div class="left">
            <img src="../assets/logo.png" class="logo" style="width: 300px">
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
                    :popper-append-to-body="false">
                <el-menu-item index="1">首页</el-menu-item>
                <el-submenu
                        popper-class="nav-bar__submenu"
                        index="2"
                        :popper-append-to-body="false"
                >
                    <template slot="title">中心概况</template>
                    <el-menu-item index="2-1">中心简介</el-menu-item>
                    <el-menu-item index="2-2">中心人员</el-menu-item>
                    <el-menu-item index="2-3">分支结构</el-menu-item>
                </el-submenu>
                <el-submenu index="3" :popper-append-to-body="false"
                            popper-class="nav-bar__submenu">
                    <template slot="title">成果专利</template>
                    <el-menu-item index="3-1">科技成果</el-menu-item>
                    <el-menu-item index="3-2">专利库</el-menu-item>
                </el-submenu>
                <el-submenu index="4" :popper-append-to-body="true"
                            popper-class="nav-bar__submenu">
                    <template slot="title">科技管家</template>
                    <el-menu-item index="4-1">专家库</el-menu-item>
                    <el-menu-item index="4-2">合作案例</el-menu-item>
                    <br>
                    <el-menu-item index="4-3">企业需求</el-menu-item>
                </el-submenu>
                <el-submenu index="5"
                            popper-class="nav-bar__submenu">
                    <template slot="title">专利管理</template>
                    <el-menu-item index="5-1">专利申请流程</el-menu-item>
                    <el-menu-item index="5-2">专利申请指南</el-menu-item>
                    <el-menu-item index="5-3">专利成果</el-menu-item>
                    <el-menu-item index="5-3">专利转化</el-menu-item>
                    <el-menu-item index="5-3">专利成果</el-menu-item>
                    <el-menu-item index="5-3">专利政策法规</el-menu-item>
                    <el-menu-item index="5-3">专利表格下载</el-menu-item>
                    <el-menu-item index="5-3">专利相关链接</el-menu-item>
                </el-submenu>
                <el-submenu index="6"
                            popper-class="nav-bar__submenu">
                    <template slot="title">政策法规</template>
                    <el-menu-item index="6-1">国家法律条例</el-menu-item>
                    <el-menu-item index="6-2">山东省政策</el-menu-item>
                    <el-menu-item index="6-3">济南市政策</el-menu-item>
                    <el-menu-item index="6-3">校内规定细则</el-menu-item>
                </el-submenu>
                <el-submenu index="7"
                            popper-class="nav-bar__submenu">
                    <template slot="title">办事指南</template>
                    <el-menu-item index="7-1">工作流程</el-menu-item>
                    <el-menu-item index="7-2">常用下载</el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
    </div>
</template>

<script>
    import SearchBar from "./SearchBar";
    import MyHr from "./MyHr";

    export default {
        name: "TheNavBar",
        components: {MyHr, SearchBar},
        comments: {
            SearchBar
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
    .nav-bar__submenu .el-menu-item{
        color: #08264d !important;
    }
</style>