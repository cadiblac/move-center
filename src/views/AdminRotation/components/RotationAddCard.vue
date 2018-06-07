<template>
    <el-card :body-style="{ padding: '10px' }" style="width: 300px;">
        <el-upload
                class="face-uploader"
                :action="imageUploadUrl"
                :on-success="handleFaceSuccess"
                :show-file-list="false">
            <img v-if="faceUrl" :src="faceUrl" class="face">
            <i v-else class="el-icon-plus face-uploader-icon "></i>
        </el-upload>

        <el-form>
            <el-form-item label="标题">
                <el-input v-model="title"></el-input>
            </el-form-item>
            <el-form-item label="子标题">
                <el-input v-model="subTitle"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input v-model="link"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="cancel">返回</el-button>
                <el-button type="primary" @click="onSubmit">添加</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
    export default {
        name: "RotationAddCard",
        data: {
            title: '',
            subTitle: '',
            link: '',
        },
        methods: {
            cancel() {
                this.$router.go(-1)
            },
            onSubmit() {
                return
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