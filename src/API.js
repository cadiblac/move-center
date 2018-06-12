import axios from 'axios'
import {generateArticle, generateArticleList} from "./mockServer";
import path from 'path'
import qs from 'qs'

// const BASE_URL = '/api/v1/'
const BASE_URL = 'http://m.wangjingxin.top:22223/move/api/v1/'

const RESOURCE_URL = 'http://m.wangjingxin.top:22223/resource/'

class PermissionDeniedError extends Error {
    constructor(message) {
        super()
        this.message = message
    }
}

let server = axios.create({
    baseURL: BASE_URL,
    timeout: 1000
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
    if (!data.data) return []
    // 单文章
    if (data.type === 2) return [data.data]
    // 无文章
    if (!data.count) return []
    // 文章列表
    return data.data
}
const handleArticle = data => {
    return new Promise((resolve, reject) => {
        // 处理图片链接
        data.face = getResourceUrl(data.face)
        // 处理附件
        if (!data.annex || data.annex.length === 0)
            resolve(data)
        else {
            Promise.all(data.annex.split(',').map(id => getAnnex(id)))
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
        .then(articleList => Promise.all(articleList.map(handleArticle)))

}


export function getArticleById(id) {

    return server.get('article/getById', {params: {id}})
        .then(handleStatus)
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

export function searchArticle(key,page=1,rows=10) {
    return server.post('article/search', qs.stringify({key})).then(handleStatus)
}

/*静态资源*/
export const imageUploadUrl = BASE_URL + 'article/upload'

export function getResourceUrl(sourceId) {
    return RESOURCE_URL + sourceId
}

export function uploadImage(data) {
    return server.post(imageUploadUrl, data).then(res => res.data.data)

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
    })
}

export function uploadAnnex(form) {
    return server.post('download/upload', form).then(handleStatus)
}

export function deleteAnnex(id) {
    return server.post('download/delete', qs.stringify({id})).then(handleStatus)
}