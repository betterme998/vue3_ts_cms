import { postUsersListData } from '@/service/main/system/system'
import { defineStore } from 'pinia'
import type { ISystemState } from './type'

const userSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    usersList: [],
    usersTotalCount: 0
  }),
  actions: {
    // 用户列表，总数量
    async postUsersListActive() {
      const userListResult = await postUsersListData()
      const { totalCount, list } = userListResult.data.data
      this.usersTotalCount = totalCount
      this.usersList = list
      console.log(totalCount, list)
    }
  }
})

export default userSystemStore
