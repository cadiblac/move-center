<template>
    <div>
        <router-link :to="{ name:'home' }" class="link">首页</router-link>
        <template v-for="(route,index) in routesNavgatable">
            <i class="el-icon-arrow-right"/>
            <router-link :key="route.name" :to="route"
                         :class="[index===routesNavgatable.length-1?'last-link':'','link']">
                {{route.meta.routeNavName}}
            </router-link>
        </template>
    </div>
</template>

<script>
    export default {
        name: "MyBreadcrumb",
        created() {
            this.updateMatchedRoutes()
            this.$router.afterEach((to, from) => {
                this.updateMatchedRoutes()
            })
        },
        data() {
            return {
                matchedRoutes: []
            }
        },
        computed: {
            routesNavgatable() {
                return this.matchedRoutes.filter(route => route.meta && route.meta.routeNavName)
            }
        },
        methods: {
            updateMatchedRoutes() {
                this.matchedRoutes = this.$router.currentRoute.matched
            }
        }
    }
</script>

<style scoped lang="scss">
    .link {
        color: #144483;
        font-weight: bold;
    }
    .last-link {
        color: #585858;
        font-weight: bold;
    }
    .last-link:hover{
        cursor: default;
    }

</style>