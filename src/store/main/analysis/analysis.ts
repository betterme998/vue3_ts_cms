import {
  getAmountListData,
  getGoodsCategoryCount,
  getGoodsCategorySale,
  getGoodsCategoryFavor,
  getGoodsAddressSale
} from '@/service/main/analysis/analysis'
import { defineStore } from 'pinia'

interface IAnalysisState {
  amountResult: any[]
  goodsCategoryCount: any[]
  goodsCategorySale: any[]
  goodsCategoryFavor: any[]
  goodsAddressSale: any[]
}
// 商品统计
const useAnalysisStore = defineStore('analysis', {
  state: (): IAnalysisState => ({
    amountResult: [],
    goodsCategoryCount: [],
    goodsCategorySale: [],
    goodsCategoryFavor: [],
    goodsAddressSale: []
  }),
  actions: {
    fetchAnalysisDataAcyion() {
      getAmountListData().then((res) => {
        this.amountResult = res.data.data
      })

      getGoodsCategoryCount().then((res) => {
        this.goodsCategoryCount = res.data.data
      })

      getGoodsCategorySale().then((res) => {
        this.goodsCategorySale = res.data.data
      })

      getGoodsCategoryFavor().then((res) => {
        this.goodsCategoryFavor = res.data.data
      })
      getGoodsAddressSale().then((res) => {
        this.goodsAddressSale = res.data.data
        console.log(this.goodsAddressSale)
      })
    }
  }
})

export default useAnalysisStore
