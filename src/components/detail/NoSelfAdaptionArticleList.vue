<template>
    <div>
        <div style="text-align: center" v-if="responseType===0">
            <i class="el-icon-loading" style="font-size: 3em"/>
        </div>
        <offline-article-list
                v-else
                :current-page="currentPage"
                :total-page="totalPage"
                :page-size="pageSize"
                :article-list="responseData"
                @navigate="requestArticle"
                @needUpdate="requestArticle"
        />
    </div>
</template>

<script>
    import OfflineArticleList from "./OfflineArticleList";
    import {getSelfAdaptionArticle} from "../../API";

    export default {
        name: "NoSelfAdaptionArticleList",
        components: {OfflineArticleList},
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
        created() {
            this.requestArticle(this.currentPage)
        },
        data() {
            return {
                responseType: 0,//0 等待中 1列表2文章
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
                        // 没有文章的情况
                        if (!response.count) {
                            this.responseData = []
                            return

                        }


                        this.responseType = response.type
                        if (response.type === 2) {
                            this.responseData = [response.data]
                            this.totalPage = 1
                            this.currentPage = 1
                        } else {
                            this.responseData = response.data
                            this.totalPage = Math.ceil(response.count / this.pageSize)
                            this.currentPage = page
                        }

                    })
            }
        },
    }
</script>

<style scoped>

</style>