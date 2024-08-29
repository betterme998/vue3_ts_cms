import { getAmountListData } from '@/service/main/analysis/analysis'
import { defineStore } from 'pinia'

interface IAnalysisState {
  amountResult: any[]
}

const useAnalysisStore = defineStore('analysis', {
  state: (): IAnalysisState => ({
    amountResult: []
  }),
  actions: {
    async fetchAnalysisDataAcyion() {
      const amountResult = await getAmountListData()
      this.amountResult = amountResult.data.data
      console.log(amountResult)
    }
  }
})

export default useAnalysisStore
