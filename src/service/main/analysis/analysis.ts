import hyRequest from '@/service'

export function getAmountListData() {
  return hyRequest.get({
    url: '/goods/amount/list'
  })
}

export function getGoodsCategoryCount() {
  return hyRequest.get({
    url: '/goods/category/count'
  })
}
