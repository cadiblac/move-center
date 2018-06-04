<template>
    <el-menu>
        <el-submenu index="1">
            <template slot="title">
                <span>模块文章管理</span>
            </template>
            <el-menu-item-group title="中心概况">
                <el-menu-item index="1-1">中心简介</el-menu-item>
                <el-menu-item index="1-2">中心人员</el-menu-item>
                <el-menu-item index="1-3">分支机构</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="咨询中心">
                <el-menu-item index="1-3">最新动态</el-menu-item>
                <el-menu-item index="1-3">通知公告</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="成果专利库">
                <el-menu-item index="1-3">科技成果</el-menu-item>
                <el-menu-item index="1-3">专利库</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="科技管家">
                <el-menu-item index="1-3">专家库</el-menu-item>
                <el-menu-item index="1-3">合作案例</el-menu-item>
                <el-menu-item index="1-3">企业需求</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="专利管理">
                <el-menu-item index="1-3">专利申请流程</el-menu-item>
                <el-menu-item index="1-3">专利申请指南</el-menu-item>
                <el-menu-item index="1-3">专利转化</el-menu-item>
                <el-menu-item index="1-3">专利政策法规</el-menu-item>
                <el-menu-item index="1-3">专利表格下载</el-menu-item>
                <el-menu-item index="1-3">专利相关链接</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="政策法规">
                <el-menu-item index="1-3">国家法规条例</el-menu-item>
                <el-menu-item index="1-3">山东省政策</el-menu-item>
                <el-menu-item index="1-3">济南市政策</el-menu-item>
                <el-menu-item index="1-3">校内规定细则</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="办事指南">
                <el-menu-item index="1-3">工作流程</el-menu-item>
                <el-menu-item index="1-3">常用下载</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="联系我们">
                <el-menu-item index="1-3">联系我们</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
            <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
            <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
            <span slot="title">导航四</span>
        </el-menu-item>
        <template v-for="moduleInfo in moduleInfos">

        </template>
    </el-menu>
</template>

<script>
    import path from 'path'
    import moduleInfos from '../../../moduleInfos'

    export default {
        name: "TheNavBar",
        data(){
            return {
                path,
                navRootUrl:'/admin/',
                moduleInfos
            }
        }
    }
</script>

<style scoped>

</style>