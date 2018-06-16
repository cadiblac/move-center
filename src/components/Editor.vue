<template>
    <div>
        <div class="editor" ref="editor"></div>
    </div>
</template>

<script>
    import E from 'wangeditor'
    import {getResourceUrl, uploadImage} from "../API";

    export default {
        name: "Editor",
        mounted(){
            this.editor = new E(this.$refs.editor)

            this.editor.customConfig.uploadImgServer = this.imageUploadServer
            this.editor.customConfig.zIndex = 1000
            this.editor.customConfig.onchange = html=> {
                // 监控变化，同步更新到 textarea
                this.$emit('input',html)
            }
            this.editor.customConfig.customUploadImg = function (files, insert) {
                files.forEach(img=>{
                    uploadImage(img).then(id=> getResourceUrl(id))
                        .then(url=>{
                        console.log(url)
                        insert(url)
                    })
                })
            }
            this.editor.create()

        },
        props:{
            value:String
        },
        data(){
            return{
                editor:null,
            }
        },
        methods:{
        },
        watch:{
            value(val){
                this.editor.txt.html(val)
            }
        }
    }
</script>

<style scoped>

</style>