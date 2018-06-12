<template>
    <div>
        <h1><router-link :to="`/article/${id}`">{{title}}</router-link></h1>
        <p>{{content}}</p>
        <p>时间：{{date}} | 作者：{{author}}</p>
    </div>
</template>

<script>
    export default {
        name: "ResultItem",
        props:{
            id:{
                required:true,
                type:Number
            },
            author:String,
            title:String,
            content:String,
            date:String,
            type:Number
        }
    }
</script>

<style scoped>

</style>