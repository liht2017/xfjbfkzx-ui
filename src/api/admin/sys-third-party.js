import request from '@/router/axios'

export function getPage (query) {
  return request({
    url: '/admin/thirdparty/page',
    method: 'get',
    params: query
  })
}

export function addObj (obj) {
  return request({
    url: '/admin/thirdparty/',
    method: 'post',
    data: obj
  })
}

export function getObj (id) {
  return request({
    url: '/admin/thirdparty/' + id,
    method: 'get'
  })
}

export function delObj (id) {
  return request({
    url: '/admin/thirdparty/' + id,
    method: 'delete'
  })
}

export function putObj (obj) {
  return request({
    url: '/admin/thirdparty/',
    method: 'put',
    data: obj
  })
}
