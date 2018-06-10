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
            <el-form-item>
                <el-button @click="cancel">返回</el-button>
                <el-button type="primary" @click="onSubmit" :disabled="submitting">修改文章</el-button>
                <el-button type="danger" @click="onDelete" :disabled="submitting">删除文章</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {getArticleById, uploadImage, updateArticle, deleteArticle, getResourceUrl} from "../../API";
    import moduleInfos from '../../moduleInfos'
    import {dateUtils} from "../../util";

    export default {
        name: "AdminArticleUpdate",
        created() {
            getArticleById(this.id).then(article => {
                this.title = article.title
                this.content = article.content
                this.author = article.author
                this.face = article.face
                this.from = article.from
                this.date = article.date
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


                face: undefined,
                facaImg: undefined,
                faceModified: false,

                submitting: false,

            }
        },
        computed: {

            // 展示出来的图片url可能来自服务器 也可能来自本地
            faceUrl() {
                return this.faceModified ? URL.createObjectURL(this.faceImg) : getResourceUrl(this.face)
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
            onDelete() {
                this.$confirm('即将删除, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    deleteArticle(this.id).then(() => {
                        this.$emit('needUpdate')
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        this.$router.go(-1)
                    }, e => {
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
            },
            onSubmit() {
                this.submitting = true

                let pipeline = Promise.resolve(true)

                // 是否需要重新上传
                if (this.faceModified) {
                    let faceForm = new FormData()
                    faceForm.append('file', this.faceImg)
                    pipeline = uploadImage(faceForm).then(id => {
                        this.face = id
                    })
                }


                pipeline.then(
                    () => updateArticle({
                        id: this.id,
                        author: this.author,
                        title: this.title,
                        plainContent: this.plainContent,
                        type: this.selectedOptions[1],
                        subType: this.selectedOptions[2] ? this.selectedOptions[2] : 0,
                        from: this.from,
                        content: this.content,
                        date: this.date,
                        face: this.face,
                        annex: ''
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
                ).then(() => {
                    this.submitting = false
                })
            },
            handleFaceUploaderChange(e) {
                if (!e.target.files) return
                this.faceModified = true
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