<template>
    <div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "index",
        props:{
            title:{
                type:String,
                default:''
            }
        }
    }
</script>

<style scoped>

</style>