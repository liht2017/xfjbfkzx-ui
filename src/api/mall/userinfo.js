/**
 * Copyright (C) 2018-2019
 * All rights reserved, Designed By  
 * 注意：
 * 本软件为 开发研制，未经购买不得使用
 * 购买后可获得全部源代码（禁止转卖、分享、上传到码云、github等开源平台）
 * 一经发现盗用、分享等行为，将追究法律责任，后果自负
 */
import request from '@/router/axios'

export function getPage(query) {
    return request({
        url: '/mall/userinfo/page',
        method: 'get',
        params: query
    })
}

export function addObj(obj) {
    return request({
        url: '/mall/userinfo',
        method: 'post',
        data: obj
    })
}

export function getObj(id) {
    return request({
        url: '/mall/userinfo/' + id,
        method: 'get'
    })
}

export function delObj(id) {
    return request({
        url: '/mall/userinfo/' + id,
        method: 'delete'
    })
}

export function putObj(obj) {
    return request({
        url: '/mall/userinfo',
        method: 'put',
        data: obj
    })
}
