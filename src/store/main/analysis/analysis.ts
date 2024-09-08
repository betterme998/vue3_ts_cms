import {
  getAmountListData,
  getGoodsCategoryCount,
  getGoodsCategorySale
} from '@/service/main/analysis/analysis'
import { defineStore } from 'pinia'

interface IAnalysisState {
  amountResult: any[]
  goodsCategoryCount: any[]
  goodsCategorySale: any[]
}
// 商品统计
const useAnalysisStore = defineStore('analysis', {
  state: (): IAnalysisState => ({
    amountResult: [],
    goodsCategoryCount: [],
    goodsCategorySale: []
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
        console.log(this.goodsCategorySale)
      })
    }
  }
})

export default useAnalysisStore
