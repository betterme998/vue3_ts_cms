import { postUsersListData } from '@/service/main/system/system'
import { defineStore } from 'pinia'

const userSystemStore = defineStore('system', {
  state: () => ({
    usersList: [],
    usersTotalCount: 0
  }),
  actions: {
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
