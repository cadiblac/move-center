<template>
    <div>article id{{id}}</div>
</template>

<script>
    export default {
        name: "MyArticle",
        props:{
            id:{
                type:Number
            }
        }
    }
</script>

<style scoped>

</style>