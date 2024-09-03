import { getAmountListData, getGoodsCategoryCount } from '@/service/main/analysis/analysis'
import { defineStore } from 'pinia'

interface IAnalysisState {
  amountResult: any[]
  goodsCategoryCount: any[]
}
// 商品统计
const useAnalysisStore = defineStore('analysis', {
  state: (): IAnalysisState => ({
    amountResult: [],
    goodsCategoryCount: []
  }),
  actions: {
    fetchAnalysisDataAcyion() {
      getAmountListData().then((res) => {
        this.amountResult = res.data.data
      })

      getGoodsCategoryCount().then((res) => {
        this.goodsCategoryCount = res.data.data
      })
    }
  }
})

export default useAnalysisStore
