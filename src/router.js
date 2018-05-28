import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Info from './views/Info'
import IndieArticle from './views/IndieArticle'
import Overview from './views/Overview'

import ArticleList from './components/detail/ArticleList'
import Article from './components/detail/MyArticle'
import ArticleContainer from './components/detail/ArticleContainer'
import SelfAdaptionArticleList from './components/detail/SelfAdaptionArticleList'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/info',
            component: Info,
            meta: {
                // 路由用于导航的name
                routeNavName: '咨询中心'
            },
            children: [
                {
                    path: 'news',
                    meta: {
                        // 路由用于导航的name
                        routeNavName: '最新动态',
                    },
                    component: ArticleContainer,
                    children: [
                        {
                            // 列表
                            path: '',
                            name: 'news',
                            component: ArticleList,
                            props: {
                                type: 0
                            },
                        },
                        {
                            // 文章
                            path: ':id',
                            component: Article,
                            meta: {
                                // 路由用于导航的name
                                routeNavName: '正文',
                            },

                            props: route => ({id: Number(route.params.id)})
                        },
                    ]
                },
                {
                    path: 'notice',
                    meta: {
                        // 路由用于导航的name
                        routeNavName: '通知公告',
                    },
                    component: ArticleContainer,
                    children: [
                        {
                            // 列表
                            path: '',
                            name: 'notice',
                            component: ArticleList,
                            props: {
                                type: 1
                            },
                        },
                        {
                            // 文章
                            path: ':id',
                            component: Article,
                            meta: {
                                // 路由用于导航的name
                                routeNavName: '正文',
                            },
                            props: route => ({id: Number(route.params.id)})
                        },
                    ]
                },
                {
                    path:'',
                    name: 'info',
                    redirect:'news'
                }
            ],
        },
        {
            path: '/overview',
            component: Overview,
            meta: {
                // 路由用于导航的name
                routeNavName: '中心概况'
            },
            children: [
                {
                    path: 'introduction',
                    name: 'introduction',
                    meta: {
                        // 路由用于导航的name
                        routeNavName: '中心简介',
                    },
                    component: SelfAdaptionArticleList,
                    props:{
                        type:0
                    }
                },
                {
                    path: 'staff',
                    name: 'staff',
                    meta: {
                        // 路由用于导航的name
                        routeNavName: '中心人员',
                    },
                    component: SelfAdaptionArticleList,
                    props:{
                        type:1
                    }
                },
                {
                    path: 'institution',
                    name: 'institution',
                    meta: {
                        // 路由用于导航的name
                        routeNavName: '分支机构',
                    },
                    component: SelfAdaptionArticleList,
                    props:{
                        type:2
                    }
                },
                {
                    path:'',
                    name: 'overview',
                    redirect:'introduction'
                }
            ],
        },
        {
            // 预留的为没有分类的文章的导航
            path:'/article/:id',
            component:IndieArticle,
            props:route => ({id: Number(route.params.id)})
        },

        {
            path: '/',
            redirect: '/info'
        }
    ]
})
