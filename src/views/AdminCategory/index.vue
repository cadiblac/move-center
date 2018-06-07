<template>
    <div>
        <my-breadcrumb/>
        <router-view/>
    </div>
</template>

<script>
    import path from 'path'
    import MyBreadcrumb from "../../components/detail/MyBreadcrumb";

    export default {
        name: "index",
        components: {MyBreadcrumb},
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

<style scoped>

</style>