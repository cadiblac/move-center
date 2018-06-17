<template>
    <div>
        <div style="display: flex;flex-wrap: wrap">
            <rotation-display-card @needUpdate="updateList" v-for="rotation in rotationList" :key="rotation.id" v-bind="rotation"/>
        </div>
        <div>
            <el-button
                    type="primary"
                    icon="el-icon-circle-plus"
                    @click="$router.push('/admin/rotation/add')">添加
            </el-button>
        </div>
        <router-view @needUpdate="updateList"/>
    </div>
</template>

<script>
    import {getRotationList} from "../../API";
    import RotationDisplayCard from './components/RotationDisplayCard'

    export default {
        name: "index",
        components: {RotationDisplayCard},
        created() {
            this.updateList()
        },
        data() {
            return {
                rotationList: []
            }
        },
        methods: {
            updateList(){
                getRotationList().then(rotationList => {
                    this.rotationList = rotationList
                })
            },
        },
    }
</script>

<style scoped>

</style>