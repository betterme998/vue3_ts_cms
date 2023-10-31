import { postUsersListData } from '@/service/main/system/sysyem'
import { defineStore } from 'pinia'

const userSystemStore = defineStore('system', {
  state: () => ({
    usersList: []
  }),
  actions: {
    async postUsersListActive() {
      const userListResult = await postUsersListData()
      console.log(userListResult)
    }
  }
})

export default userSystemStore
