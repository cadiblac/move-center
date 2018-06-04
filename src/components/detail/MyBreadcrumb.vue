<template>
    <div>
        <router-link :to="{ name:'home' }" class="link">首页</router-link>
        <template v-for="(route,index) in routesNavgatableExceptLast">
            <i class="el-icon-arrow-right"/>
            <router-link :key="route.name" :to="route" class="link">
                {{route.meta.routeNavName}}
            </router-link>
        </template>
        <i class="el-icon-arrow-right"/>
        <span class="last-link">
            {{routesNavgatable[routesNavgatable.length-1].meta.routeNavName}}
        </span>

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
            },
            routesNavgatableExceptLast() {
                return this.routesNavgatable.slice(0, this.routesNavgatable.length - 1)
            }
        },
        methods: {
            updateMatchedRoutes() {
                this.matchedRoutes = this.$route.matched
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

    .last-link:hover {
        cursor: default;
    }

</style>