<template>
    <div>
        <nav-bar2 search-bar-place-holder="搜索相关信息"/>
        <div class="article-container"><my-article :id="id"/></div>
        <the-footer/>
    </div>
</template>

<script>
    import TheFooter from "../components/TheFooter";
    import NavBar2 from "../components/detail/NavBar2";
    import MyArticle from "../components/detail/MyArticle";
    export default {
        name: "IndieArticle",
        components: {MyArticle, NavBar2, TheFooter},
        props:{
            id:{
                type:Number,
                required:true
            }
        }
    }
</script>

<style scoped>
.article-container{
    padding: 1em 3em;
    background-color: #eeeeee;
}
</style>