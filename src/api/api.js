// 封装我们的请求函数

import request from './request';

/**
 * 　メニュー項目を取得
 * @returns　メニュー項目
 */
export function getMenuData(param) {
  return request({
    url: `/products/${param}`,
    method: 'GET',
  })
}

export function setMenuData(param,data) {
  return request({
    url: `/products/${param}`,
    method: 'PATCH',
    data
  })
}


export function setShopingCart(param,data) {
  return request({
    url: `/shopingCart/${param}`,
    method: 'PATCH',
    data
  })
}

export function getShopingCart(param) {
  return request({
    url: `/shopingCart/${param}`,
    method: 'GET',
  })
}




