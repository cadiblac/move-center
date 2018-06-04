<template>
    <el-container>
        <el-header>
            <the-header/>
        </el-header>
        <el-aside><the-nav-bar/></el-aside>
        <el-main></el-main>
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