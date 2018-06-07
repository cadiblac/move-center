<template>
    <el-menu router>
        <el-submenu :index="path.join('/admin','module')">
            <template slot="title">
                <span>模块文章管理</span>
            </template>
            <el-menu-item :index="path.join('/admin','module','add')">
                <i class="el-icon-circle-plus-outline"></i>
                <span slot="title">添加文章</span>
            </el-menu-item>
            <el-menu-item-group :title="category.name" v-for="category in moduleInfos" :key="category.name">
                <el-menu-item
                        :index="path.join('/admin','module',category.path,module.path)"
                        v-for="module in category.modules"
                        :key="module.name">{{module.name}}
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-menu-item :index="path.join('/admin','rotation')">
            <span slot="title">首页轮播图管理</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
            <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
            <span slot="title">导航四</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
    import path from 'path'
    import moduleInfos from '../../../moduleInfos'

    export default {
        name: "TheNavBar",
        data() {
            return {
                path,
                navRootUrl: '/admin/',
                moduleInfos
            }
        }
    }
</script>

<style scoped>

</style>