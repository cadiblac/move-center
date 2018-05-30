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
                <el-submenu
                        popper-class="nav-bar__submenu"
                        index="/overview"
                        :popper-append-to-body="false"
                >
                    <template slot="title">中心概况</template>
                    <el-menu-item index="/overview/introduction">中心简介</el-menu-item>
                    <el-menu-item index="/overview/staff">中心人员</el-menu-item>
                    <el-menu-item index="/overview/institution">分支结构</el-menu-item>
                </el-submenu>
                <el-submenu index="/achievement" :popper-append-to-body="false"
                            popper-class="nav-bar__submenu">
                    <template slot="title">成果专利</template>
                    <el-menu-item index="/achievement/technology">科技成果</el-menu-item>
                    <el-menu-item index="/achievement/patent">专利库</el-menu-item>
                </el-submenu>
                <el-submenu index="/technologyManager" :popper-append-to-body="true"
                            popper-class="nav-bar__submenu">
                    <template slot="title">科技管家</template>
                    <el-menu-item index="/technologyManager/experts">专家库</el-menu-item>
                    <el-menu-item index="/technologyManager/cooperation">合作案例</el-menu-item>
                    <br>
                    <el-menu-item index="/technologyManager/enterpriseRequirement">企业需求</el-menu-item>
                </el-submenu>
                <el-submenu index="/patentCenter"
                            popper-class="nav-bar__submenu">
                    <template slot="title">专利管理</template>
                    <el-menu-item index="/patentCenter/process">专利申请流程</el-menu-item>
                    <el-menu-item index="/patentCenter/guidence">专利申请指南</el-menu-item>
                    <el-menu-item index="/achievement/patent">专利成果</el-menu-item>
                    <el-menu-item index="/patentCenter/transition">专利转化</el-menu-item>
                    <el-menu-item index="/patentCenter/policy">专利政策法规</el-menu-item>
                    <el-menu-item index="/patentCenter/tableDownload">专利表格下载</el-menu-item>
                    <el-menu-item index="/patentCenter/links">专利相关链接</el-menu-item>
                </el-submenu>
                <el-submenu index="/policy"
                            popper-class="nav-bar__submenu">
                    <template slot="title">政策法规</template>
                    <el-menu-item index="/policy/nation">国家法律条例</el-menu-item>
                    <el-menu-item index="/policy/province">山东省政策</el-menu-item>
                    <el-menu-item index="/policy/city">济南市政策</el-menu-item>
                    <el-menu-item index="/policy/school">校内规定细则</el-menu-item>
                </el-submenu>
                <el-submenu index="/guidence"
                            popper-class="nav-bar__submenu">
                    <template slot="title">办事指南</template>
                    <el-menu-item index="/guidence/process">工作流程</el-menu-item>
                    <el-menu-item index="/guidence/download">常用下载</el-menu-item>
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

    .nav-bar__submenu .el-menu-item {
        color: #08264d !important;
    }
</style>