<template>
    <el-container>
        <el-header>
            <the-header/>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <the-nav-bar/>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import TheHeader from "./components/TheHeader";
    import TheNavBar from "./components/TheNavBar";

    export default {
        name: "index",
        components: {TheNavBar, TheHeader}
    }
</script>

<style scoped>

</style>