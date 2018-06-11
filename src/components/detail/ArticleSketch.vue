<template>
    <div class="article-sketch">
        <div class="date left">
            <template v-if="date">
                <div class="month">{{month}}</div>
                <div class="day">{{day}}</div>
            </template>
            <div class="unknow" v-else>未知</div>
        </div>
        <div class="right">
            <div class="left"><h1 class="title" @click="watchArticle(id)">{{title}}</h1>
                <p class="content">{{summary}}</p>
                <p class="info">
                    发布时间:{{date}}&nbsp;&nbsp;&nbsp;&nbsp;|
                    作者:{{author||'未知'}}&nbsp;&nbsp;&nbsp;&nbsp;|
                    来源:{{from||'未知'}}&nbsp;&nbsp;&nbsp;&nbsp;
                </p>
            </div>
            <img class="right" :src="face">
        </div>
    </div>
</template>

<script>
    import {dateUtils} from "../../util";
    import path from 'path'

    export default {
        name: "ArticleSketch",
        props: {
            id: {
                type: Number,
                required: true
            },
            author: String,
            title: String,
            face: String,
            summary: String,
            date: String,
            visit: Number,
            from: String
        },
        computed: {
            month() {
                return this.getMonthEngWord(new Date(this.date).getMonth())
            },
            day() {
                let day = new Date(this.date).getDay()
                return day < 10 ? '0' + day : String(day)
            },
        },
        methods: {
            getMonthEngWord: dateUtils.getMonthEngWord,
            watchArticle(id) {
                this.$router.push({
                    path: path.join(this.$router.currentRoute.fullPath, String(id))
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .article-sketch {
        display: flex;
        padding-top: .5em;

        > .right {
            flex-grow: 1;
            border-bottom: 1px solid #cccccc;
            display: flex;

            h1.title {
                font-weight: normal;
                color: #144483;
            }
            p.content {
                color: #585858;
            }
            p.info {
                color: #999999;
                font-size: .9em;
            }

            > .left {
                flex-grow: 1;
            }
            > .right {
                flex-shrink: 0;
                width: 200px;
                height: 200px;

                object-fit: contain;
            }
        }
    }

    .date {
        background-color: #193455;
        width: 50px;
        height: 50px;
        margin-right: 20px;
        color: white;
        text-align: center;

        .month {
            line-height: 25px;
            font-size: .8em;
        }
        .day {
            line-height: 20px;
            font-size: 1.7em;
            font-weight: bold;
        }
        .unknow {
            line-height: 50px;
            font-weight: bold;
        }
    }
</style>