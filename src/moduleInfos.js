// 分类->一级模块->二级模块

let SubModule = (name, path, subType) => ({
    name, path, subType
})

// 暂时只有一种子模块
let subModuleGroup1 = [
    SubModule('全部', 'all', 0),
    SubModule('信息技术', 'infomation', 1),
    SubModule('生物技术', 'biology', 3),
    SubModule('新材料', 'material', 4),
    SubModule('能源技术', 'energy', 5),
    SubModule('激光技术', 'laser', 6),
    SubModule('自动化技术', 'auto', 7),
    SubModule('航天技术', 'space', 8),
    SubModule('海洋技术', 'ocean', 9),
    SubModule('其它技术领域', 'other', 10),
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
    Category('新旧动能转化', 'translation', {
        title:'TRANSLATION'
    },[
        Module('新旧动能转化', 'translation',8,true)
    ]),
    Category('办事指南', 'guidence',{
        title:'GUIDENCE'
    },[
        Module('办事指南', 'guidence',9)
    ]),
    Category('常用下载', 'download',{
        title:'DOWNLOADS'
    },[
        Module('常用下载', 'download',10)
    ]),
]





