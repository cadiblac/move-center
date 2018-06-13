<template>
    <div>
        <el-form ref="form" label-width="80px">
            <el-form-item label="所属模块">
                <el-cascader
                        expand-trigger="hover"
                        :options="moduleOptions"
                        v-model="selectedOptions"
                        @change="">
                </el-cascader>
            </el-form-item>
            <el-form-item label="标题">
                <el-input v-model="title"></el-input>
            </el-form-item>
            <el-form-item label="作者">
                <el-input v-model="author"></el-input>
            </el-form-item>
            <el-form-item label="来源">
                <el-input v-model="from"></el-input>
            </el-form-item>
            <el-form-item label="封皮图片">
                <div class="face-uploader" @click="$refs.faceUploaderInput.click()">
                    <input type="file" accept="image/*" hidden ref="faceUploaderInput"
                           @change="handleFaceUploaderChange"/>
                    <img v-if="faceUrl" :src="faceUrl" class="face">
                    <i v-else class="el-icon-plus face-uploader-icon"></i>
                </div>
            </el-form-item>
            <el-form-item label="发布时间">
                <el-date-picker
                        v-model="date"
                        type="date"
                        format="yyyy 年 MM 月 dd 日"
                        value-format="yyyy-MM-dd"
                        placeholder="选择日期时间">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="内容">
                <quill-editor v-model="content"
                              :options="editorOption">
                </quill-editor>
            </el-form-item>
            <el-form-item label="上传附件">
                <annex-manager ref="annexManager"/>
            </el-form-item>
            <el-form-item>
                <el-button @click="cancel">返回</el-button>
                <el-button type="primary" @click="onSubmit" :disabled="submitting">发表文章</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {uploadImage, addArticle, annexUploadUrl, uploadAnnex} from "../../API";
    import moduleInfos from '../../moduleInfos'
    import {dateUtils} from "../../util";
    import AnnexManager from "./AnnexManager";

    export default {
        name: "AdminArticleAdd",
        components: {AnnexManager},
        data() {
            return {
                annexUploadUrl,
                // 级联选择器option
                moduleOptions: moduleInfos.map(category => ({
                    // category的value不重要
                    value: category.name,
                    label: category.name,
                    children: category.modules.map(module => ({
                        value: module.type,
                        label: module.name,
                        children: module.subModules ? module.subModules.slice(1).map(subModule => ({
                            value: subModule.subType,
                            label: subModule.name
                        })) : undefined
                    }))
                })),
                faceImg: undefined,
                editorOption: {
                    placeholder: '在此输入内容'
                },

                // 表单项
                selectedOptions: [],
                title: '',
                author: '',
                content: '',
                plainContent: '',
                date: dateUtils.format(new Date(), 'yyyy-MM-dd'),
                from: '',
                annex: '',

                submitting: false,

            }
        },
        computed: {
            faceUrl() {
                return this.faceImg ? URL.createObjectURL(this.faceImg) : null
            },
        },
        watch: {
            content(val) {
                let ele = document.createElement('div')
                ele.innerHTML = val
                this.plainContent = ele.textContent
            }
        },
        methods: {
            cancel() {
                this.$router.go(-1)
            },
            onSubmit() {
                // 还没有添加封面图 退出
                if (!this.faceImg) return

                this.submitting = true

                Promise.all(this.$refs.annexManager.annexList.map(annex => uploadAnnex(annex)))
                    .then(ids => {
                        this.annex = ids.join(',')
                    })
                    .then(() => uploadImage(this.faceImg))
                    // upload
                    .then(id => {
                            addArticle({
                                author: this.author,
                                title: this.title,
                                plainContent: this.plainContent,
                                type: this.selectedOptions[1],
                                subType: this.selectedOptions[2] ? this.selectedOptions[2] : 0,
                                from: this.from,
                                content: this.content,
                                date: this.date,
                                face: id,
                                annex:this.annex
                            }).then(
                                () => {
                                    this.$emit('needUpdate')
                                    this.$message({
                                        type: 'success',
                                        message: '发表成功'
                                    });
                                    this.$router.go(-1)
                                },
                                e => {
                                    this.$message({
                                        type: 'danger',
                                        message: '失败：' + e.message
                                    });
                                }
                            )
                        },
                        e => {
                            this.$message({
                                type: 'danger',
                                message: '失败：' + e.message
                            });
                        }).then(() => {
                    this.submitting = false
                })
            },
            handleFaceUploaderChange(e) {
                if (!e.target.files) return
                this.faceImg = e.target.files[0]
            }
        }
    }
</script>

<style>
    .face-uploader {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        display: inline-block;

    }

    .face-uploader:hover {
        border-color: #409EFF;
    }

    .face-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }

    .face {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>