import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Info from './views/Info'

import ArticleList from './components/detail/ArticleList'
import Article from './components/detail/MyArticle'
import ArticleContainer from './components/detail/ArticleContainer'


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
                            props: route => ({id: Number(route.query.id)})
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
            path: '/',
            redirect: '/info'
        }
    ]
})
