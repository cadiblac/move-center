<template>
    <router-link :to="link" :class="[boxClassName,'preset-news-display-box-style']"
                 :style="{backgroundImage:`url(${backgroundImage})`}">
        <div class="date-label">
            <span class="month">{{month}}</span><br>
            <span class="day">{{day}}</span>
        </div>
        <div class="title-area">{{title}}</div>
    </router-link>
</template>

<script>
    // 新闻模块 展示框
    import {dateUtils} from "../util";

    export default {
        name: "NewsDisplayBox",
        props: {
            boxClassName: String,
            backgroundImage: String,
            title: String,
            link: {
                default: ''
            },
            date: {
                type: String,
                default: ''
            }
        },
        methods: {},
        computed: {
            month() {
                return dateUtils.getMonthEngWord(Number(this.date.split('-')[1])-1)
            },
            day(){
                return this.date.split('-')[2]
            }
        }
    }
</script>

<style scoped>
    .preset-news-display-box-style {
        display: inline-block;
        width: 300px;
        height: 200px;
        background-color: green;
        position: relative;
        background-size: cover;
    }

    .date-label {
        text-align: center;
        width: 4em;
        height: 4.3em;
        background-color: rgb(32, 59, 91);
        color: white;
        padding-top: .5em;
        box-sizing: border-box;
        position: absolute;
        left: 2em;
        top: 0;

    }

    .date-label .day {
        font-size: 1.5em;
        font-weight: 900;

    }

    .title-area {
        width: 100%;
        position: absolute;
        bottom: 0;
        color: rgb(79, 79, 79);
        padding: .5em 3em .5em 2em;
        background-color: rgba(255, 255, 255, .9);
        box-sizing: border-box;
    }

</style>