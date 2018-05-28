<template>
    <nav class="nav-bar">
        <router-link to="/"><img src="../../assets/logo.png" class="logo"/></router-link>
        <el-input
                style="width: 200px;"
                :placeholder="searchBarPlaceHolder"
                suffix-icon="el-icon-search"/>
    </nav>
</template>

<script>
    export default {
        name: "NavBar2",
        props: {
            searchBarPlaceHolder: {
                type: String,
                default: ""
            }
        }
    }
</script>

<style scoped lang="scss">
    .nav-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;

        background-color: #193455;

        padding: 1em 3em;

        .logo {
            width: 300px;
        }
    }
</style>