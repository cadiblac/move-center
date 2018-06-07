<template>
    <el-card :body-style="{ padding: '0px' }" class="card">
        <img :src="imageUrl" class="image">
        <div style="padding: 14px;">
            <h1>标题：{{title}}</h1>
            <h2>子标题：{{ subTitle }}</h2>
            <span>链接：</span><a :href="link" target="_blank">{{link}}</a>
        </div>
    </el-card>
</template>

<script>
    import {getResourceUrl} from "../../../API";

    export default {
        name: "RotationDisplayCard",
        props: {
            id: Number,
            title: String,
            subTitle: String,
            link: String
        },
        computed:{
            imageUrl(){
                return getResourceUrl(this.id)
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
    .card{
        width: 300px;
    }
</style>