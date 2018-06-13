<template>
    <section class="section-research">
        <section-title>
            <template slot="eng">REASEARCH</template>
            <template slot="chs">研究专利</template>
        </section-title>
        <my-hr/>
        <section-content>
            <el-menu
                    :default-active="curIndex"
                    @select="handleSelect"
                    class="research-nav-bar"
                    mode="horizontal"
            >
                <el-menu-item index="0">技术成果</el-menu-item>
                <el-menu-item index="1">专利信息</el-menu-item>
                <el-menu-item index="2">成功案例</el-menu-item>
            </el-menu>
            <div class="research-display-box-wrapper" style="font-size: .9em">
                <research-display-box
                        @click="$router.push(`/article/${article.id}`)"
                        v-for="article in displayingBoxes"
                        :key="article.id"
                        :photo="article.face"
                        :title="article.title"
                        title-eng=""
                        :content="article.summary"
                />
            </div>
            <template slot="more">
                <router-link :to="'/achievement/technology'" v-if="curIndex==='0'">
                    <blue-button>更多技术成果</blue-button>
                </router-link>
                <router-link :to="'/achievement/patent'" v-else-if="curIndex==='1'">
                    <blue-button>更多专利信息</blue-button>
                </router-link>
                <router-link :to="'/achievement/case'" v-else="curIndex==='2'">
                    <blue-button>更多成功案例</blue-button>
                </router-link>
            </template>
        </section-content>
    </section>
</template>

<script>
    import SectionTitle from "./SectionTitle";
    import MyHr from "../../components/MyHr";
    import SectionContent from "./SectionContent";
    import BlueButton from "../../components/BlueButton";
    import ResearchDisplayBox from "../../components/ResearchDisplayBox";
    import {getSelfAdaptionArticle} from "../../API";

    export default {
        name: "ResearchSection",
        components: {ResearchDisplayBox, BlueButton, SectionContent, MyHr, SectionTitle},
        created() {
            this.requestArticle()
        },
        data() {
            return {
                displayingBoxes: [],
                curIndex: '0',
                type: [4, 5, 6]
            }
        },
        methods: {
            handleSelect(i) {
                this.curIndex = i
                this.requestArticle()
            },
            // 请求curIndex对应module的文章
            requestArticle() {
                getSelfAdaptionArticle(this.type[this.curIndex], 0, 1, 3)
                    .then(articleList => {
                        this.displayingBoxes = articleList
                    })
            },
            test(){
                console.log('test')
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../style/variables";

    .section-research {
        padding: $index-section-paddding;
        .research-nav-bar {
            padding-left: 400px;
            margin-bottom: 4em;
        }
        .research-display-box-wrapper {
            font-size: .9em;
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
            padding: 0 2em 3em 2em;
        }

    }
</style>