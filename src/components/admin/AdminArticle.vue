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
            <el-form-item label="摘要">
                <el-input v-model="summary"></el-input>
            </el-form-item>
            <el-form-item label="作者">
                <el-input v-model="author"></el-input>
            </el-form-item>
            <el-form-item label="来源">
                <el-input v-model="from"></el-input>
            </el-form-item>
            <el-form-item label="封皮图片">
                <el-upload
                        class="face-uploader"
                        :action="imageUploadUrl"
                        :on-success="handleFaceSuccess"
                        :show-file-list="false">
                    <img v-if="faceUrl" :src="faceUrl" class="face">
                    <i v-else class="el-icon-plus face-uploader-icon "></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="发布时间">
                <el-date-picker
                        v-model="date"
                        type="datetime"
                        placeholder="选择日期时间">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="内容">
                <quill-editor v-model="content"
                              :options="editorOption"
                              ref="myQuillEditor">
                </quill-editor>
            </el-form-item>
            <el-form-item>
                <el-button @click="cancel">返回</el-button>
                <el-button type="primary" @click="onSubmit">{{isNew?'发表文章':'修改文章'}}</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {getArticleById, imageUploadUrl} from "../../API";
    import moduleInfos from '../../moduleInfos'

    export default {
        name: "AdminArticle",
        created() {
            getArticleById(this.id).then(article => {

            })
        },
        props: {
            id: {
                type: Number
            }
        },
        data() {
            return {
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
                faceUrl: undefined,
                faceId: undefined,
                editorOption: {
                    placeholder: '在此输入内容'
                },

                // 表单项
                selectedOptions: [],
                title: '',
                summary: '',
                author: '',
                content: '',
                date: Date.now(),
                from:'',

                imageUploadUrl
            }
        },
        computed: {
            // 是否是新创建文章
            isNew() {
                return this.id ? false : true
            },
            form() {
                return {
                    id: this.isNew ? undefined : this.id,
                    author: this.author,
                    title: this.title,
                    summary: this.summary,
                    type: this.selectedOptions[1],
                    subType: this.selectedOptions[2] ? this.selectedOptions[2] : 0,
                    from:this.from,
                    content: this.content,
                    date: this.date,
                    face: this.faceId,
                }
            },
        },
        methods: {
            handleFaceSuccess(res, file) {
                this.faceUrl = URL.createObjectURL(file.raw);
            },
            cancel(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style>
    .face-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .face-uploader .el-upload:hover {
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