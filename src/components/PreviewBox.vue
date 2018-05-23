<template>
    <div class="preview-box">
        <div class="preview-box__head">
            <span class="title"><span class="chs">{{title}}</span><span class="eng">{{titleEng}}</span></span>
            <a :href="allLink" class="all">ALL>></a>
        </div>
        <div class="preview-box__body"><slot></slot></div>
    </div>
</template>

<script>
    // 预览模块，有标题 查看全部

    export default {
        name: "PreviewBox",
        props: {
            allLink: {
                default: 'javascript::void(0)'
            },
            title: String,
            titleEng: String
        }
    }
</script>

<style scoped>
    .preview-box__head .title .chs {
        color: rgb(52, 52, 52);
        font-weight: bold;
    }

    .preview-box__head .title .eng {
        color: rgb(20, 68, 131);
        font-size: 50%;
        font-weight: bold;
    }

    .preview-box__head .all {
        color: rgb(20, 68, 131);
    }

    .preview-box__head .title {
        font-size: 1.2em;
        float: left;
    }

    .preview-box__head .all {
        float: right;
    }

    .preview-box__head {
        overflow: hidden;
        padding-bottom: 1em;
    }

</style>