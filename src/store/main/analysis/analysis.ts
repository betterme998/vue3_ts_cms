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
        console.log(JSON.stringify(this.amountResult))
      })

      getGoodsCategoryCount().then((res) => {
        this.goodsCategoryCount = res.data.data
        console.log(JSON.stringify(this.goodsCategoryCount))
      })

      getGoodsCategorySale().then((res) => {
        this.goodsCategorySale = res.data.data
        console.log(JSON.stringify(this.goodsCategorySale))
      })

      getGoodsCategoryFavor().then((res) => {
        this.goodsCategoryFavor = res.data.data
        console.log(JSON.stringify(this.goodsCategoryFavor))
      })
      getGoodsAddressSale().then((res) => {
        this.goodsAddressSale = res.data.data
        console.log(JSON.stringify(this.goodsAddressSale))
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
