<template>
    <section class="section-news">
        <section-title>
            <template slot="eng">NEWS</template>
            <template slot="chs">新闻通告</template>
        </section-title>
        <my-hr/>
        <section-content>
            <div style="display: flex;justify-content: space-between">
                <preview-box
                        title="动态"
                        title-eng="Events"
                        all-link="/info/news"
                >
                    <p v-if="newsItems.length==0">暂无新闻</p>
                    <news-display-box
                            v-else
                            v-for="newsItem in newsItems"
                            :key="newsItem.id"
                            box-class-name="news-box"
                            :date="newsItem.date"
                            :title="newsItem.title"
                            :background-image="newsItem.face"
                            :link="`/info/news/${newsItem.id}`"
                    />
                </preview-box>
                <preview-box
                        title="通知"
                        title-eng="Notices"
                        all-link="/info/notice"
                        style="width: 300px">
                    <p v-if="noticeItems.length==0">暂无通知</p>
                    <notice-item
                            v-else
                            v-for="noticeItem in noticeItems"
                            :key="noticeItem.id"
                            :title="noticeItem.title"
                            :date="noticeItem.date"
                            :link="`/info/notice/${noticeItem.id}`"
                            style="margin: .5em 0"/>
                </preview-box>
            </div>
        </section-content>
    </section>
</template>

<script>
    import MyHr from "../../components/MyHr";
    import PreviewBox from "../../components/PreviewBox";
    import NewsDisplayBox from "../../components/NewsDisplayBox";
    import NoticeItem from "../../components/NoticeItem";
    import SectionTitle from "./SectionTitle";
    import SectionContent from "./SectionContent";
    import {getSelfAdaptionArticle} from "../../API";

    export default {
        name: "NewsSection",
        components: {SectionContent, SectionTitle, NoticeItem, NewsDisplayBox, PreviewBox, MyHr},
        created(){
            getSelfAdaptionArticle(2,0,1,2).then(res=>{
                this.newsItems = res.articleList
            })
            getSelfAdaptionArticle(3,0,1,8).then(res=>{
                this.noticeItems = res.articleList
            })
        },
        data(){
            return{
                newsItems:[],
                noticeItems:[]
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../style/variables";

    .section-news {
        padding: $index-section-paddding;

        .news-box {
            display: inline-block;
            margin: 0 2em;
        }
    }
</style>