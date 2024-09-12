import hyRequest from '@/service'

// 获取商品列表数据
export function getAmountListData() {
  return hyRequest.get({
    url: '/goods/amount/list'
  })
}

// 获取商品分类数量
export function getGoodsCategoryCount() {
  return hyRequest.get({
    url: '/goods/category/count'
  })
}

// 每个分类商品的销量
export function getGoodsCategorySale() {
  return hyRequest.get({
    url: '/goods/category/sale'
  })
}

// 每个商品的收藏次数
export function getGoodsCategoryFavor() {
  return hyRequest.get({
    url: '/goods/category/favor'
  })
}

// 每个商品的收藏次数
export function getGoodsAddressSale() {
  return hyRequest.get({
    url: '/goods/address/sale'
  })
}
