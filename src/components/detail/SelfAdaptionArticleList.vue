<template>
    <div>
        <div style="text-align: center" v-if="responseType===0">
            <i class="el-icon-loading" style="font-size: 3em"/>
        </div>
        <offline-article-list
                v-else-if="responseType===1"
                :current-page="currentPage"
                :total-page="totalPage"
                :page-size="pageSize"
                :article-list="responseData.data"
                @navigate="requestArticle"
        />
        <offline-article v-else-if="responseType===2" v-bind="responseData.data"/>
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
                responseData: null,


                // 分页相关信息（如果有的话）
                currentPage: 1,
                pageSize: 5,
                totalPage: 1
            }
        },
        watch:{
            type(){
                this.requestArticle(this.currentPage)
            },
            subType(){
                this.requestArticle(this.currentPage)
            },
        },
        methods:{
            requestArticle(page){

                getSelfAdaptionArticle(this.type, this.subType, page, this.pageSize)
                    .then(response => {
                        this.responseType = response.type
                        this.responseData = response

                        // 列表
                        if (response.type === 1) {
                            this.totalPage = Math.ceil(this.responseData.count / this.pageSize)
                            this.currentPage = page
                        }
                    })
            }
        },
    }
</script>

<style scoped>

</style>