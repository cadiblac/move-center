<template>
    <div>
        <div>
            <router-link
                    v-for="config in info" :key="config.routeNavName" :to="join(routePrefix,config.path)">
                <el-button>{{config.routeNavName}}</el-button>
            </router-link>
        </div>
        <div>
            <router-view/>
        </div>
    </div>
</template>

<script>
    import path from 'path'
    import info from './expertsSecondNavInfo'

    export default {
        name: "experts",
        data() {
            return {
                routePrefix: '/technologyManager/experts',

                info
            }
        },
        methods: {
            join: path.join
        }
    }
</script>

<style scoped>

</style>