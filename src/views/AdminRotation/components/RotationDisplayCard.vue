<template>
    <el-card :body-style="{ padding: '0px' }" class="card">
        <img :src="imageUrl" class="image">
        <div style="padding: 14px;">
            <h1>标题：{{title}}</h1>
            <h2>子标题：{{ subTitle }}</h2>
            <span>链接：</span><a :href="link" target="_blank">{{link}}</a>
        </div>
        <div style="text-align: right">
            <el-button size="small" type="danger" @click="confirmDelete">删除</el-button>
        </div>
    </el-card>
</template>

<script>
    /***
     * events:
     * @needUpdate
     */
    import {getResourceUrl, deleteRotation} from "../../../API";

    export default {
        name: "RotationDisplayCard",
        props: {
            id: String,
            title: String,
            subTitle: String,
            link: String
        },
        computed: {
            imageUrl() {
                return getResourceUrl(this.id)
            }
        },
        methods: {
            confirmDelete() {
                this.$confirm('即将删除, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    deleteRotation(this.id).then(() => {
                        this.$emit('needUpdate')
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    }, e => {
                        console.log(e)
                        this.$message({
                            type: 'info',
                            message: '删除失败!'
                        });
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        }
    }
</script>

<style scoped>
    .image {
        width: 300px;
        height: 300px;
        object-fit: contain;
    }

    .card {
        width: 300px;
    }
</style>