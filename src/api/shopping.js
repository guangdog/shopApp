import fetch from '../utils/fetch'

// 查询app首页数据
export function selectData (params) {
  return fetch({
    url: '/goods/list',
    method: 'get',
    params
  })
}

// 根据商品id获取商品信息
export function getShopInfoById (params) {
  return fetch({
    url: '/goods/getModelById',
    method: 'get',
    params
  })
}
