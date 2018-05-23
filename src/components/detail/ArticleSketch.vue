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
            dsfsd
        </div>
    </div>
</template>

<script>
    import {dateUtils} from "../../util";

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
            date: Number,
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
            }
        },
        methods: {
            getMonthEngWord: dateUtils.getMonthEngWord
        }
    }
</script>

<style scoped lang="scss">
    .article-sketch {
        display: flex;

        > .right {
            flex-grow: 1;
            background-color: red;
            border-bottom: 1px solid #cccccc;
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