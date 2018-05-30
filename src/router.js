import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Info from './views/Info'
import IndieArticle from './views/IndieArticle'
import Overview from './views/Overview'


import Achievement from './views/Achievement'
import Technology from './views/Achievement/Technology'
import technologySecondNavInfo from './views/Achievement/TechnologySecondNavInfo'

import TechnologyManager from './views/TechnologyManager'
import Experts from './views/TechnologyManager/Experts'
import expertsSecondNavInfo from './views/TechnologyManager/expertsSecondNavInfo'

import PatentCenter from './views/PatentCenter'
import patentCenterRouteInfo from './views/PatentCenter/routeInfo'

import Policy from './views/Policy'
import policyRouteInfo from './views/Policy/routeInfo'

import Guidence from './views/Guidence'

import Contact from './views/Contact'

import Article from './components/detail/MyArticle'
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
                routeNavName: '咨询中心'
            },
            children: [
                {
                    path: 'news',
                    name: 'news',
                    routeNavName: '最新动态',
                    meta: {
                        routeNavName: '最新动态'
                    },
                    component: SelfAdaptionArticleList,
                    props: {
                        type: 0
                    },
                    children: [
                        {
                            path: ':id',
                            component: Article,
                            meta: {
                                routeNavName: '正文',
                                isArticle: true
                            },
                            props: route => ({id: Number(route.params.id)})
                        }
                    ]
                },
                {
                    path: 'notice',
                    name: 'notice',
                    routeNavName: '通知公告',
                    meta: {
                        routeNavName: '通知公告'
                    },
                    component: SelfAdaptionArticleList,
                    props: {
                        type: 0
                    },
                    children: [
                        {
                            path: ':id',
                            component: Article,
                            meta: {
                                routeNavName: '正文',
                                isArticle: true
                            },
                            props: route => ({id: Number(route.params.id)})
                        }
                    ]
                },
                {
                    path: '',
                    name: 'info',
                    redirect: 'news'
                }
            ]
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
                    props: {
                        type: 0
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
                    props: {
                        type: 1
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
                    props: {
                        type: 2
                    }
                },
                {
                    path: '',
                    name: 'overview',
                    redirect: 'introduction'
                }
            ],
        },
        {
            path: '/achievement',
            component: Achievement,
            meta: {
                // 路由用于导航的name
                routeNavName: '成果专利库'
            },
            children: [
                {
                    path: 'technology',
                    component: Technology,
                    meta: {
                        // 路由用于导航的name
                        routeNavName: '科技成果',
                    },
                    children: [
                        ...technologySecondNavInfo.map(config => ({

                            path: config.path,
                            meta: {
                                // 路由用于导航的name
                                routeNavName: config.routeNavName,
                            },
                            component: SelfAdaptionArticleList,
                            props: {
                                type: 0,
                                subType: config.subType
                            },
                            children: [
                                {
                                    path: ':id',
                                    component: Article,
                                    meta: {
                                        routeNavName: '正文',
                                        isArticle: true
                                    },
                                    props: route => ({id: Number(route.params.id)})
                                }
                            ]

                        })),

                        {
                            path: '',
                            name: 'technology',
                            redirect: technologySecondNavInfo[0].path
                        }

                    ]
                },
                {
                    path: 'patent',
                    name: 'patent',
                    component: SelfAdaptionArticleList,
                    meta: {
                        routeNavName: '专利库'
                    },
                    props: {
                        type: 0
                    },
                    children: [
                        {
                            path: ':id',
                            component: Article,
                            meta: {
                                routeNavName: '正文',
                                isArticle: true
                            },
                            props: route => ({id: Number(route.params.id)})
                        }
                    ]
                },
                {
                    path: '',
                    name: 'achievement',
                    redirect: 'technology'
                }
            ],
        },
        {
            // 预留的为没有分类的文章的导航
            path: '/article/:id',
            component: IndieArticle,
            props: route => ({id: Number(route.params.id)})
        },

        {
            path: '/technologyManager',
            component: TechnologyManager,
            meta: {
                // 路由用于导航的name
                routeNavName: '科技管家'
            },
            children: [
                {
                    path: 'experts',
                    component: Experts,
                    meta: {
                        // 路由用于导航的name
                        routeNavName: '专家库',
                    },
                    children: [
                        ...expertsSecondNavInfo.map(config => ({

                            path: config.path,
                            meta: {
                                // 路由用于导航的name
                                routeNavName: config.routeNavName,
                            },
                            component: SelfAdaptionArticleList,
                            props: {
                                type: 0,
                                subType: config.subType
                            },
                            children: [
                                {
                                    path: ':id',
                                    component: Article,
                                    meta: {
                                        routeNavName: '正文',
                                        isArticle: true
                                    },
                                    props: route => ({id: Number(route.params.id)})
                                }
                            ]

                        })),

                        {
                            path: '',
                            name: 'experts',
                            redirect: expertsSecondNavInfo[0].path
                        }

                    ]
                },
                {
                    path: 'cooperation',
                    name: 'cooperation',
                    component: SelfAdaptionArticleList,
                    meta: {
                        routeNavName: '合作案例'
                    },
                    props: {
                        type: 0
                    },
                    children: [
                        {
                            path: ':id',
                            component: Article,
                            meta: {
                                routeNavName: '正文',
                                isArticle: true
                            },
                            props: route => ({id: Number(route.params.id)})
                        }
                    ]
                },
                {
                    path: 'enterpriseRequirement',
                    name: 'enterpriseRequirement',
                    component: SelfAdaptionArticleList,
                    meta: {
                        routeNavName: '企业需求'
                    },
                    props: {
                        type: 0
                    },
                    children: [
                        {
                            path: ':id',
                            component: Article,
                            meta: {
                                routeNavName: '正文',
                                isArticle: true
                            },
                            props: route => ({id: Number(route.params.id)})
                        }
                    ]
                },
                {
                    path: '',
                    name: 'technologyManager',
                    redirect: 'experts'
                }
            ],
        },
        {
            path: '/patentCenter',
            meta: {
                routeNavName: '专利管理'
            },
            component: PatentCenter,
            children: [
                ...patentCenterRouteInfo.map(
                    routeInfo => ({
                        path: routeInfo.path,
                        meta: {
                            routeNavName: routeInfo.routeNavName
                        },
                        component: SelfAdaptionArticleList,
                        props: {
                            type: routeInfo.type
                        },
                        children: routeInfo.isArticle ? undefined : [
                            {
                                path: ':id',
                                component: Article,
                                meta: {
                                    routeNavName: '正文',
                                    isArticle: true
                                },
                                props: route => ({id: Number(route.params.id)})
                            }
                        ]

                    })
                ),

                {
                    path: '',
                    name: 'patentCenter',
                    redirect: 'process'
                }
            ]
        },
        {
            path: '/policy',
            meta: {
                routeNavName: '政策法规'
            },
            component: Policy,
            children: [
                ...policyRouteInfo.map(
                    routeInfo => ({
                        path: routeInfo.path,
                        meta: {
                            routeNavName: routeInfo.routeNavName
                        },
                        component: SelfAdaptionArticleList,
                        props: {
                            type: routeInfo.type
                        },
                        children: routeInfo.isArticle ? undefined : [
                            {
                                path: ':id',
                                component: Article,
                                meta: {
                                    routeNavName: '正文',
                                    isArticle: true
                                },
                                props: route => ({id: Number(route.params.id)})
                            }
                        ]

                    })
                ),

                {
                    path: '',
                    name: 'policy',
                    redirect: 'nation'
                }
            ]
        },
        {
            path:'/guidence',
            meta: {
                routeNavName: '办事指南'
            },
            component: Guidence,
            children: [
                ...policyRouteInfo.map(
                    routeInfo => ({
                        path: routeInfo.path,
                        meta: {
                            routeNavName: routeInfo.routeNavName
                        },
                        component: SelfAdaptionArticleList,
                        props: {
                            type: routeInfo.type
                        },
                        children: routeInfo.isArticle ? undefined : [
                            {
                                path: ':id',
                                component: Article,
                                meta: {
                                    routeNavName: '正文',
                                    isArticle: true
                                },
                                props: route => ({id: Number(route.params.id)})
                            }
                        ]

                    })
                ),
                {
                    path: 'process',
                    meta: {
                        routeNavName: '办事流程'
                    },
                    component: SelfAdaptionArticleList,
                    props: {
                        type: 0
                    },
                    children:  [
                        {
                            path: ':id',
                            component: Article,
                            meta: {
                                routeNavName: '正文',
                                isArticle: true
                            },
                            props: route => ({id: Number(route.params.id)})
                        }
                    ]
                },
                {
                    path: 'download',
                    meta: {
                        routeNavName: '常用下载'
                    },
                    component: SelfAdaptionArticleList,
                    props: {
                        type: 0
                    },
                    children:  [
                        {
                            path: ':id',
                            component: Article,
                            meta: {
                                routeNavName: '正文',
                                isArticle: true
                            },
                            props: route => ({id: Number(route.params.id)})
                        }
                    ]
                },
                {
                    path: '',
                    name: 'guidence',
                    redirect: 'process'
                }
            ]
        },
        {
            path:'/contact',
            meta: {
                routeNavName: '联系我们'
            },
            component: Contact,
            children:[
                {
                    path:'',
                    name:'contact',
                    component:SelfAdaptionArticleList,
                    props:{
                        type:0
                    }
                }
            ]

        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
})
