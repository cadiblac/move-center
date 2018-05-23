import Mock from 'mockjs'

const articleSketchConfig = {
    'id': '@natural(0,1000)',
    'author': '@first@last',
    title: '@csentence(1,3)',
    face: '@image',
    summary: '@cparagraph(3,5)',
    date: Date.now(),
    'visit': '@natural(10,1000)',
    from: '@first@last'
}
const articleConfig = Object.assign({}, articleSketchConfig, {
    content: '@cparagraph(10,15)'
})

export function generateArticle() {
    return Mock.mock(articleConfig)
}

export function generateArticleList(n) {
    return Array.from({length: n}).map(() => Mock.mock(articleSketchConfig))
}