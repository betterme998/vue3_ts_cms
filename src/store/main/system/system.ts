import { deleteUserById, postUsersListData } from '@/service/main/system/system'
import { defineStore } from 'pinia'
import type { ISystemState } from './type'

const userSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    usersList: [],
    usersTotalCount: 0
  }),
  actions: {
    // 用户列表，总数量
    async postUsersListActive(queryInfo: any) {
      const userListResult = await postUsersListData(queryInfo)
      const { totalCount, list } = userListResult.data.data
      this.usersTotalCount = totalCount
      this.usersList = list
      console.log(totalCount, list)
    },
    async deieteUserByIdAction(id: number) {
      // 1.删除数据操作
      const deleteResult = await deleteUserById(id)
      console.log(deleteResult)
      // 2.删除成功后，重新获取数据
      this.postUsersListActive({ offset: 0, size: 10 })
    }
  }
})

export default userSystemStore
