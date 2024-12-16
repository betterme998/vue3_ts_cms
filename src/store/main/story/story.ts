import { defineStore } from 'pinia'
import { newPageData } from '@/service/main/system/system'

interface IAnalysisState {
  storyList: any[]
  storyListCount: number
}
const storyStore = defineStore('story', {
  state: (): IAnalysisState => ({
    storyList: [],
    storyListCount: 0
  }),
  actions: {
    async setStory(pageName: string, queryInfo: any) {
      const storyListResult = await newPageData(pageName, queryInfo)
      const { totalCount, list } = storyListResult.data.data
      this.storyList = list
      this.storyListCount = totalCount
    }
  }
})

export default storyStore
