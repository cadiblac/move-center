<template>
    <div class="research-display-box" :style="{backgroundImage:`url(${photo})`}">
        <div class="content-wrapper">
            <div class="title">
                <span class="title-chs">{{title}}</span>
                <br>
                <span class="title-eng">{{titleEng}}</span>
            </div>
            <div class="content">{{content}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ResearchDisplayBox",
        props: {
            photo: {
                required: true,
                type: String
            },
            title: {
                required: true,
                type: String
            },
            titleEng: {
                type: String,
                default: null
            },
            content: {
                required: true,
                type: String
            }
        }
    }
</script>

<style scoped>
    .research-display-box {
        box-shadow: 1px 1px 5px rgba(50,50,50,.5);
        display: inline-block;
        width: 272px;
        height: 136px;
    }
    .research-display-box:hover{
        cursor: pointer;
    }
    .research-display-box{
        background-size: cover;
    }

    .research-display-box .title,
    .research-display-box .content {
        padding: .5em 1em;
    }
    .research-display-box .title{
        height: 40%;
        box-sizing: border-box;
    }

    .research-display-box .title-chs {
        color: #144483;
    }

    .research-display-box .title-eng {
        color: #626465;
        font-size: .8em;
        font-weight: bold;
    }
    .research-display-box .content{
        color: #868989;
    }
    .research-display-box .title-chs:after{
        content: '>';
    }
    .research-display-box .content-wrapper{
        width: 50%;
        left: 50%;
        position: relative;
        height: 100%;
        background-color: rgba(255,255,255,.9);
    }
</style>