<template>
    <nav class="nav-bar">
        <router-link to="/"><img src="../../assets/logo.png" class="logo"/></router-link>
        <search-bar/>
    </nav>
</template>

<script>
    import SearchBar from "../SearchBar";
    export default {
        name: "NavBar2",
        components: {SearchBar},
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