<template>
    <div class="expert-display-box">
        <img class="expert-display-box__profile" :src="profile">
        <div class="expert-display-box__content">
            <h1 class="name"><span class="inner-name">{{name}}</span></h1>
            <p class="introduction">{{introduction}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ExpertDisplayBox",
        props:{
            // 图片
            profile:{
                type:String,
                required:true
            },
            // 姓名
            name:{
                type:String,
                required:true
            },
            // 介绍
            introduction:{
                type:String,
                required:true
            },
        },

    }
</script>

<style scoped>
    .expert-display-box{
        width: 225px;
        height: 307px;
        position: relative;
        transition-property: box-shadow;
        transition-duration: .2s;
        box-shadow: 2px 2px 4px rgba(200,200,200,.7);
        display: inline-block;
    }
    .expert-display-box:hover{
        cursor: pointer;
        box-shadow: 5px 5px 10px rgba(150,150,150,.7);
    }
    .expert-display-box__profile{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .expert-display-box__content{
        width: 100%;
        height: 114px;
        position: absolute;
        bottom: 0;
        left: 0;
        box-sizing: border-box;
        padding: 0 2em;
        background-color: rgba(255,255,255,.9);
        font-size: .8em;
    }
    .expert-display-box__content .name{
        font-weight: normal;
        margin: .7em 0 1em;
        font-size: 1.35em;
    }
    .expert-display-box__content .inner-name{
        display: inline-block;
        padding-right: 1em;
    }
    .expert-display-box__content .inner-name:after{
        display: inline-block;
        content: '>';
        position: relative;
        left: .5em;
    }
    .expert-display-box__content .introduction{
        color: #797979;
    }
</style>