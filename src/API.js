import axios from 'axios'

class PermissionDeniedError extends Error {
    constructor(message) {
        super()
        this.message = message
    }
}

let server = axios.create({
    baseURL: '/api/v1/',
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


export function getArticle(type, subType) {
    return server.get('get', {
        params: {
            type, subType
        }
    }).then(handleStatus)
}

export let getArticleList = getArticle