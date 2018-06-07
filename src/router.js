import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Article from './components/detail/MyArticle'
import AdminArticle from './components/admin/AdminArticle'
import moduleInfos from './moduleInfos'
import Category from './views/Category'
import CategoryWithModule from './views/CategoryWithModule'
import Module from './views/Module'
import SubModule from './views/SubModule'

// 后台管理
import Admin from './views/Admin'
import AdminLayout from './views/AdminLayout'
import AdminCategory from './views/AdminCategory'
import AdminModule from './views/AdminModule'
import AdminRotation from './views/AdminRotation'
import RotationAddCard from './views/AdminRotation/components/RotationAddCard'


import path from 'path'


Vue.use(Router)

let articleRoute = {
    path: ':id',
    component: Article,
    meta: {
        routeNavName: '正文',
        isArticle: true
    },
    props: route => ({id: Number(route.params.id)})

}
let adminArticleRoute = Object.assign({},articleRoute,{
    component:AdminArticle
})

// 有单个、多个模块的目录
let singleModuleCategory = moduleInfos.filter(category => category.modules.length < 2),
    multiModuleCategory = moduleInfos.filter(category => category.modules.length >= 2)

let adminRoute = {
    path: '/admin',
    component: Admin,
    meta:{
        routeNavName: '后台管理'
    },
    children: [
        {
            path: 'module',
            component: AdminLayout,
            props: {
                title: '模块管理'
            },
            meta:{
                routeNavName: '模块管理'
            },
            children: [
                {
                    path:'add',
                    component:AdminArticle
                },

                ...moduleInfos.map(category => ({

                    path: category.path,

                    meta: Object.assign({}, category.meta, {
                        currentCategory: category,
                        modules: category.modules,
                        urlBasePath: path.join('/admin', 'module', category.path),
                        routeNavName: category.name
                    }),

                    component: AdminCategory,

                    children: category.modules.map(module => ({
                        path: module.path,
                        meta: Object.assign({}, {
                            currentModule: module,
                            subModules: module.subModules,
                            type: module.type,
                            routeNavName: module.name
                        }),
                        component: AdminModule,
                        props: {
                            type: module.type,
                        },
                        children: module.subModules ? module.subModules.map(subModule => ({
                            path: subModule.path,
                            meta: {
                                currentSubModule: subModule,
                                subType: subModule.subType,
                                routeNavName: subModule.name
                            },
                            component: SubModule,
                            children: [adminArticleRoute]
                        })) : [adminArticleRoute]
                    }))

                })),

            ]
        },
        {
            path:'rotation',
            component:AdminRotation,
            props:{
                title:'轮播图管理'
            },
            meta:{
                routeNavName: '轮播图管理'
            },
            children:[
                {
                    path:'add',
                    component:RotationAddCard
                }
            ]

        }
    ]
}

let routes = [
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    ...multiModuleCategory.map(category => ({

        path: '/' + category.path,

        meta: Object.assign({}, category.meta, {
            currentCategory: category,
            modules: category.modules,
            urlBasePath: '/' + category.path,
            routeNavName: category.name
        }),

        component: Category,

        children: category.modules.map(module => ({
            path: module.path,
            meta: Object.assign({}, {
                currentModule: module,
                subModules: module.subModules,
                type: module.type,
                routeNavName: module.name
            }),
            component: Module,
            props: {
                type: module.type,
            },
            children: module.subModules ? module.subModules.map(subModule => ({
                path: subModule.path,
                meta: {
                    currentSubModule: subModule,
                    subType: subModule.subType,
                    routeNavName: subModule.name
                },
                component: SubModule,
                children: [articleRoute]
            })) : [articleRoute]
        }))

    })),

    ...singleModuleCategory.map(category => {
        let module = category.modules[0]
        return {
            path: '/' + category.path,

            meta: Object.assign({}, category.meta, {
                currentModule: module,
                subModules: module.subModules,
                routeNavName: category.name,
                type: module.type
            }),

            component: CategoryWithModule,

            children: module.subModules ? module.subModules.map(subModule => ({
                path: subModule.path,
                meta: {
                    currentSubModule: subModule,
                    subType: subModule.subType,
                    routeNavName: subModule.name
                },
                component: SubModule,
                children: [articleRoute]
            })) : [articleRoute]


        }
    }),

    adminRoute,

    {
        path: '/',
        redirect: '/admin'
    },
]
export default new Router({
    routes
})