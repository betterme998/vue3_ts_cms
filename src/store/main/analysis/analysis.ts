import {
  getAmountListData,
  getGoodsCategoryCount,
  getGoodsCategorySale,
  getGoodsCategoryFavor,
  getGoodsAddressSale
} from '@/service/main/analysis/analysis'
import { defineStore } from 'pinia'

// 本地数据
import {
  amountResult2,
  goodsCategoryCount2,
  goodsCategorySale2,
  goodsCategoryFavor2,
  goodsAddressSale2
} from '@/global/data'

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
      })
    },
    // 本地登录数据
    fetchAnalysisDataAcyion2() {
      this.amountResult = amountResult2

      this.goodsCategoryCount = goodsCategoryCount2

      this.goodsCategorySale = goodsCategorySale2

      this.goodsCategoryFavor = goodsCategoryFavor2

      this.goodsAddressSale = goodsAddressSale2
    }
  }
})

export default useAnalysisStore
