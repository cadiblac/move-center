import axios from 'axios'
import qs from 'qs'

const BASE_URL = '/move/api/v1/' 
const RESOURCE_URL = '/resource/'

class PermissionDeniedError extends Error {
    constructor(message) {
        super()
        this.message = message
    }
}

let server = axios.create({
    baseURL: BASE_URL,
    timeout: 5000
})

// 处理请求状态  返回成功对象
let handleStatus = response => {
    let data = response.data
    switch (data.status) {
        case 200:
            return data.data
        case 300:
            throw new Error(data.message)
        case 400:
            throw new PermissionDeniedError(data.message)
    }
}


// 文章
const handleSelfAdaptionArticle = data => {
    // 无文章
    if (data.count === 0) return {count: 0, data: []}
    // 单文章
    if (data.type === 2) return {count: 1, data: [data.data]}
    // 文章列表
    return {count: data.count, data: data.data}
}
const handleArticle = data => {
    return new Promise((resolve, reject) => {
        // 处理图片链接
        data.faceId = data.face
        data.face = getResourceUrl(data.faceId)
        // 处理附件
        if (!data.annex || data.annex.length === 0) {
            data.annex = []
            resolve(data)
        } else {
            Promise.all(data.annex.split(',').map(id => getAnnex(id).then(res => {

                return {
                    name: res.name, id
                }
            })))
                .then(annexList => {
                    data.annex = annexList
                    resolve(data)
                }, e => {
                    reject(e)
                })
        }
    })
}

export function getSelfAdaptionArticle(type, subType, page, rows) {
    return server.get('article/get', {
        params: {
            type, subType, page, rows, offset: 0
        }
    })
        .then(handleStatus)
        .then(handleSelfAdaptionArticle)
        .then(res => Promise.all(res.data.map(handleArticle)).then(articleList => ({
                count: res.count,
                articleList
            }))
        )

}


export function getArticleById(id) {

    return server.get('article/getById', {params: {id}})
        .then(handleStatus)
        .then(handleArticle)
}

export function addArticle(bundle) {
    return server.post('article/add', bundle).then(handleStatus)
}

export function updateArticle(bundle) {
    return server.post('article/update', bundle).then(handleStatus)
}

export function deleteArticle(id) {
    return server.post('article/delete', qs.stringify({id})).then(handleStatus)
}

export function searchArticle(key, page = 1, rows = 10) {
    return server.get('article/search', {
        params: {
            key, page, rows
        }
    }).then(handleStatus)
}


/*静态资源*/
export const imageUploadUrl = BASE_URL + 'article/upload'

export function getResourceUrl(sourceId) {
    if (!sourceId) return null
    return RESOURCE_URL + sourceId
}

export function uploadImage(img) {
    let form = new FormData()
    form.append('file', img)
    return server.post('article/upload', form).then(res => res.data.data)

}

/*轮播图*/

export function getRotationList() {

    return server.get('rotation/get')
        .then(handleStatus)
}

export function deleteRotation(id) {
    return server.post('rotation/delete', qs.stringify({id}))
        .then(handleStatus)
}

export function addRotation(data) {
    return server.post('rotation/add', data)
        .then(handleStatus)
}

// 附件
export function getAnnex(id) {
    return server.get('download/show', {
        params: {
            id
        }
    }).then(handleStatus)
}

export function uploadAnnex(file) {
    let form = new FormData()
    form.append('file', file)
    return server.post('download/upload', form).then(handleStatus)
}

export function deleteAnnex(id) {
    return server.post('download/delete', qs.stringify({id})).then(handleStatus)
}

export const annexUploadUrl = BASE_URL + 'download/upload'

export function getAnnexDownloadUrl(id) {
    return BASE_URL + `download/get?id=${id}`
}

/*权限*/
export function login(loginForm) {
    return server.post('link/login', qs.stringify(loginForm)).then(handleStatus).then(success => {
        if (success) {
            sessionStorage.setItem('loggedIn', 'true')
        } else {
            throw new Error('Error')
        }
    })
}

export function logout() {
    return server.post('link/logout').then(handleStatus).then(success => {
        if (success) {
            sessionStorage.setItem('loggedIn', 'false')
        }
    })
}

export function loggedIn() {
    let s = sessionStorage.getItem('loggedIn')
    if (s === 'true') return true
    return false
}