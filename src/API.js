import axios from 'axios'
import {generateArticle, generateArticleList} from "./mockServer";
import path from 'path'

const BASE_URL = '/api/v1/'

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


export function getArticle(type, subType, page, rows) {

    return Promise.resolve({
        type: 1,
        count: 50,
        data: generateArticleList(rows)
        // data:generateArticle()

    })

    return server.get('article/get', {
        params: {
            type, subType, page, rows, offset: 0
        }
    }).then(handleStatus)
}

export let getArticleList = getArticle

export let getSelfAdaptionArticle = getArticle

export function getArticleById(id) {

    return Promise.resolve(generateArticle())

    return server.get('article/getById', {
        params: {
            id
        }
    })
}


export function getResourceUrl(sourceId) {
    // return BASE_URL+'resource/'+sourceId
    return sourceId
}

export const imageUploadUrl = path.join(BASE_URL,'article/upload')

export function getRotationList() {

    return server.get('rotation/get')
}