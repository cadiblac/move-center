<template>
    <div>
        <nav-bar2/>
        <section class="content">
            <my-breadcrumb/>
            <page-title>{{title}}</page-title>
            <h1>关键字：{{keyWord}} 共搜索到{{count}}条信息</h1>
            <div>
                <result-item
                        v-for="resultItem in result"
                        :key="resultItem.id"
                        v-bind="resultItem"
                />
            </div>
            <pagination
                    :total-page="Math.min(totalPage,pageSize)"
                    :current-page="currentPage"
                    @navigate="navigate"
            />


        </section>
        <the-footer/>
    </div>
</template>

<script>
    import NavBar2 from "../../components/detail/NavBar2";
    import MyBreadcrumb from "../../components/detail/MyBreadcrumb";
    import PageTitle from "../../components/detail/PageTitle";
    import TheFooter from "../../components/TheFooter";
    import {searchArticle} from "../../API";
    import OfflineArticleList from "../../components/detail/OfflineArticleList";
    import Pagination from "../../components/detail/Pagination";
    import ResultItem from "./ResultItem";
    export default {
        name: "index",
        components: {ResultItem, Pagination, OfflineArticleList, TheFooter, PageTitle, MyBreadcrumb, NavBar2},
        props:{
            keyWord:String,
            title:String
        },
        created(){
            this.search(this.keyWord)
        },
        data(){
            return{
                currentPage:1,
                pageSize:10,
                count:0,
                result:[]
            }
        },
        computed:{
            totalPage(){
                return Math.ceil(this.count/this.pageSize)
            }
        },
        methods:{
            search(){
                searchArticle(this.keyWord,this.currentPage,this.pageSize).then(result=>{
                    this.count = result.count
                    this.result = result.data
                })
            },
            navigate(page){
                this.currentPage = page
                this.search()
            }
        },
        watch:{
            keyWord(val){
                this.currentPage = 1
                this.search()
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../style/variables";

    section.content {
        padding: $index-section-paddding;
    }
</style>