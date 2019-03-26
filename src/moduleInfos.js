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
    Category('关于我们','about',{
        title:'ABOUT'
    },[
        Module('工研院（科技园）介绍','introduction',0),
        Module('部门黄页','contact',1),
        Module('部门职责','function',2),
    ]),
    Category('新闻中心','news',{
        title:'NEWS'
    },[
        Module('通知公告','notice',3),
        Module('新闻动态','recentNews',4),
        Module('产业动态','industryNews',5),
    ]),
    Category('创新中心','department',{
        title:'CENTER'
    },[
        Module('中心介绍','departmentIntroduction',6),
        Module('成果推介','cgtj',7),
        Module('成果孵化','cgfh',8),
    ]),
    Category('人才建设','experts',{
        title:'EXPERTS'
    },[
        Module('高端人才','gdrc',9),
        Module('人才招聘','rczp',10),
    ]),
    Category('产学研政策','policy',{
        title:'POLICY'
    },[
        Module('国家政策','country',11),
        Module('地方政策','local',12),
        Module('学校政策','school',13),
    ]),
]





