<template>
    <article>
        <h1>{{title}}</h1>
        <p class="info">作者：{{author}}</p>
        <p class="info2">发布时间：{{date}}|查看次数：{{visit}}</p>
        <div v-html="content"></div>
    </article>
</template>

<script>
    import {getArticleById} from "../../API";

    export default {
        name: "my-article",
        created(){
            getArticleById(this.id).then(article=>{
                delete article.id
                Object.assign(this,article)
            })
        },
        props:{
            id:{
                type:Number,
                required:true
            },
        },
        data(){
            return{
                author:null,
                title:null,
                face:null,
                summary:null,
                date:null,
                visit:null,
                content:null,
                from:null,
                annex:[],
            }
        }
    }
</script>

<style scoped lang="scss">
    article{
        h1{
            text-align: center;
        }
        p.info,p.info2{
            text-align: center;
            font-size:.9em;
        }
    }
</style>