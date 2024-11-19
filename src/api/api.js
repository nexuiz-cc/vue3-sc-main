import request from './request';

/**
 * ユーザーリストの取得
 * @returns ユーザーリスト
 */
export function getUserData() {
  return request({
    url: 'https://nexuiz-cc.github.io/expjson/user.json',
    method: 'GET',
  });
}

/**
 * メニュー項目を取得
 * @returns メニュー項目
 */
export function getMenuData(param) {
  return request({
    url: `/products/${param}`,
    method: 'GET',
  });
}

/**
 * メニュー項目の更新
 * @returns メニュー項目
 */
export function setMenuData(param, data) {
  return request({
    url: `/products/${param}`,
    method: 'PATCH',
    data,
  });
}

/**
 * 各メニュー会計ペの更新
 * @returns メニュー項目
 */
export function setShopingCart(param, data) {
  return request({
    url: `/shopingCart/${param}`,
    method: 'PATCH',
    data,
  });
}

/**
 * 各メニュー会計項目の取得
 * @param 各メニュー
 * @returns 各メニュー会計項目
 */
export function getShopingCart(param) {
  return request({
    url: `/shopingCart/${param}`,
    method: 'GET',
  });
}

/**
 * defaultメニュー項目の取得
 * @param 各メニュー
 * @returns defaultメニュー項目
 */
export function getDefault(param) {
  return request({
    url: `/default/${param}`,
    method: 'GET',
  });
}
