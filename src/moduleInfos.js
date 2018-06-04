// 分类->一级模块->二级模块

let SubModule = (name, path, subType) => ({
    name, path, subType
})

// 暂时只有一种子模块
let subModuleGroup1 = [
    SubModule('全部', 'all', 0),
    SubModule('电子信息', 'dianzi', 1),
    SubModule('能源环保', 'nengyuan', 3),
    SubModule('装备制造', 'zhuangbei', 4),
    SubModule('生物医药', 'shengwu', 5),
    SubModule('化工材料', 'huagong', 6),
    SubModule('土木交通', 'tumu', 7),
    SubModule('相关其他', 'other', 8),
]

let Category = (name, path, meta, modules) => ({
    name, path, meta, modules
})

let Module = (name, path, type, containSubModule = false) => ({
    name, path, type,
    subModules: containSubModule ? subModuleGroup1 : undefined
})


export default [
    Category('中心概况', 'overview', {
        title:'OVERVIEW'
    },[
        Module('中心简介', 'introduction', 0),
        Module('中心人员', 'staff', 1),
    ]),
    Category('新闻通告', 'info', {
        title:'NEWS'
    },[
        Module('新闻动态', 'news', 2),
        Module('通知', 'notice', 3),
    ]),
    Category('成果专利', 'achievement', {
        title:'ACHIEVEMENT'
    },[
        Module('技术成果', 'technology', 4, true),
        Module('专利信息', 'patent', 5),
        Module('成功案例', 'case', 6),
    ]),
    Category('专家资源', 'experts', {
        title:'EXPERTS'
    },[
        Module('专家资源', 'experts',7,true)
    ]),
    Category('办事指南', 'guidence',{
        title:'GUIDENCE'
    },[
        Module('办事指南', 'guidence',8)
    ]),
    Category('常用下载', 'download',{
        title:'DOWNLOADS'
    },[
        Module('常用下载', 'download',9)
    ]),
]





