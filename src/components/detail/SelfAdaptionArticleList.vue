<template>
    <div>
        <div style="text-align: center" v-if="loading">
            <i class="el-icon-loading" style="font-size: 3em"/>
        </div>
        <offline-article-list
                v-else-if="responseData.length>1"
                :current-page="currentPage"
                :total-page="totalPage"
                :page-size="pageSize"
                :article-list="responseData"
                @navigate="requestArticle"
                @needUpdate="requestArticle"
        />
        <offline-article v-else-if="responseData.length===1" v-bind="responseData"/>
        <p v-else>暂无内容</p>
    </div>
</template>

<script>
    import OfflineArticleList from "./OfflineArticleList";
    import OfflineArticle from "./OfflineArticle";
    import {getSelfAdaptionArticle} from "../../API";

    /***
     * 通过type请求然后动态判断是列表还是文章
     * 自适应显示文章、文章列表
     */

    export default {
        name: "SelfAdaptionArticleList",
        components: {OfflineArticle, OfflineArticleList},
        created(){
            this.requestArticle()
        },
        props: {
            type: {
                type: Number,
                required: true
            },
            subType: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                loading: true,
                // 请求返回的数据
                responseData: [],


                // 分页相关信息（如果有的话）
                currentPage: 1,
                pageSize: 5,
                totalPage: 1
            }
        },
        watch: {
            type() {
                this.requestArticle(this.currentPage)
            },
            subType() {
                this.requestArticle(this.currentPage)
            },
        },
        methods: {
            requestArticle(page=1) {

                getSelfAdaptionArticle(this.type, this.subType, page, this.pageSize)
                    .then(response => {
                        this.loading = false
                        this.responseData = response.articleList

                        this.totalPage = Math.ceil(response.count / this.pageSize)
                        this.currentPage = page

                    })
            }
        },
    }
</script>

<style scoped>

</style>