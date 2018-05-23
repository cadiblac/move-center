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
                        all-link="baidu.com"
                >
                    <news-display-box
                            box-class-name="news-box"
                            :date="Date.now()"
                            title="为“海洋山东”扬帆领航——山东大学服务海洋山东纪实"
                            :background-image="newsSamplePic1"
                    />
                    <news-display-box
                            box-class-name="news-box"
                            :date="Date.now()"
                            title="经济强省建设中的“山大智慧”——山东大学服务山东经济强省建设纪实"
                            :background-image="newsSamplePic2"
                    />
                </preview-box>
                <preview-box
                        title="通知"
                        title-eng="Notices"
                        all-link="baidu.com"
                        style="width: 300px">
                    <notice-item
                            title="test"
                            :date="Date.now()"
                            style="margin: .5em 0"/>
                    <notice-item
                            title="test"
                            :date="Date.now()"
                            style="margin: .5em 0"/>
                    <notice-item
                            title="test"
                            :date="Date.now()"
                            style="margin: .5em 0"/>
                    <notice-item
                            title="test"
                            :date="Date.now()"
                            style="margin: .5em 0"/>
                    <notice-item
                            title="test"
                            :date="Date.now()"
                            style="margin: .5em 0"/>
                    <notice-item
                            title="test"
                            :date="Date.now()"
                            style="margin: .5em 0"/>
                    <notice-item
                            title="关于推荐新材料领域专家的函(鲁经 信字（2017）186号)"
                            :date="Date.now()"
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
    import newsSamplePic1 from '../../assets/news_sample1.jpg'
    import newsSamplePic2 from '../../assets/news_sample2.jpg'

    export default {
        name: "NewsSection",
        components: {SectionContent, SectionTitle, NoticeItem, NewsDisplayBox, PreviewBox, MyHr},
        data(){
            return{
                newsSamplePic2,
                newsSamplePic1
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