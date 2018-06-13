<template>
    <div>
        <el-button size="small" type="primary" @click="$refs.fileInput.click()">选取文件</el-button>
        <input type="file" hidden ref="fileInput" @change="handleFileChange"/>
        <div>
            <el-tag
                    v-for="annex in annexExisted"
                    :key="annex.id"
                    @close="$emit('delete',annex.id)"
                    type="success"
                    closable>
                {{annex.name}}
            </el-tag>
        </div>
        <div>
            <el-tag
                    v-for="annex in annexList"
                    :key="annex.name"
                    @close="remove(annex)"
                    closable>
                {{annex.name}}
            </el-tag>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AnnexManager",
        props: {
            annexExisted: Array,
        },
        data(){
            return{
                annexList:[]
            }
        },
        methods:{
            handleFileChange(e){
                if (!e.target.files) return
                this.annexList.push(e.target.files[0])
            },
            remove(annex){
                this.annexList.splice(this.annexList.indexOf(annex), 1);
            }
        }
    }
</script>

<style scoped>

</style>