<template>
    <el-card :body-style="{ padding: '10px' }" style="width: 300px;">
        <div class="image-uploader" @click="$refs.input.click()">
            <input type="file" hidden ref="input" accept="image/*" @change="handleInputChange"/>
            <img v-if="imageUrl" :src="imageUrl">
            <i v-else class="el-icon-plus image-uploader-icon "></i>
        </div>

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
    import {addRotation} from "../../../API";

    export default {
        name: "RotationAddCard",
        data() {
            return {
                title: '',
                subTitle: '',
                link: '',
                image: null
            }
        },
        computed: {
            imageUrl() {
                return this.image ? URL.createObjectURL(this.image) : ''
            }
        },
        methods: {
            cancel() {
                this.$router.go(-1)
            },
            onSubmit() {
                let formData = new FormData()
                formData.append('title', this.title)
                formData.append('subTitle', this.subTitle)
                formData.append('link', this.link)
                formData.append('id', this.image)
                addRotation(formData)
            },
            handleInputChange(e) {
                if (!e.target.files) return
                this.image = e.target.files[0]
            }

        }
    }
</script>

<style>
    .image-uploader {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        display: inline-block;
    }

    .image-uploader:hover {
        border-color: #409EFF;
    }

    .image-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }

    .image-uploader img {
        width: 178px;
        height: 178px;
        display: block;
        object-fit: cover;
    }
</style>