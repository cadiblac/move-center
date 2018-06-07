<template>
    <div>
        <div style="display: flex">
            <rotation-display-card @needUpdate="updateList" v-for="rotation in rotationList" :key="rotation.id" v-bind="rotation"/>
        </div>
        <div>
            <el-button
                    type="primary"
                    icon="el-icon-circle-plus"
                    @click="$router.push('/admin/rotation/add')">添加
            </el-button>
        </div>
        <router-view/>
    </div>
</template>

<script>
    import {getRotationList} from "../../API";
    import testImg from '../../assets/experts_1.jpg'
    import RotationDisplayCard from './components/RotationDisplayCard'

    export default {
        name: "index",
        components: {RotationDisplayCard},
        created() {
            this.updateList()
        },
        data() {
            return {
                rotationList: [{
                    id: testImg,
                    title: 'title',
                    subTitle: 'subtitle',
                    link: 'http://baidu.com',
                }]
            }
        },
        methods: {
            updateList(){
                getRotationList().then(rotationList => {
                    this.rotationList = rotationList
                })
            }
        },
    }
</script>

<style scoped>

</style>