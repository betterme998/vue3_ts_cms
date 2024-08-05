import {
  deleteUserById,
  postUsersListData,
  newUserData,
  editUserData,
  postPageListData,
  deletePageById,
  newPageData,
  editPageData
} from '@/service/main/system/system'
import { defineStore } from 'pinia'
import type { ISystemState } from './type'

const userSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    usersList: [],
    usersTotalCount: 0,

    pageList: [],
    pageTotalCount: 0
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
    },
    // 新建用户
    async newUserDataAction(userInfo: any) {
      // 创建用户
      const newResult = await newUserData(userInfo)
      console.log('newUserResult', newResult)
      // 创建成功后，重新获取数据
      this.postUsersListActive({ offset: 0, size: 10 })
    },
    // 修改用户
    async editUserDataAction(id: number, userInfo: any) {
      //1. 更新用户数据
      const editResult = await editUserData(id, userInfo)
      // 2.更新成功后，重新获取数据
      this.postUsersListActive({ offset: 0, size: 10 })
    },

    /** 针对所有页面的数据： 增删改查 **/
    async postPageListAction(pageName: string, queryInfo: any) {
      const pageListResult = await postPageListData(pageName, queryInfo)
      console.log(pageListResult)

      const { totalCount, list } = pageListResult.data.data

      this.pageList = list
      this.pageTotalCount = totalCount
    },
    async deletePageByIdAction(pageName: string, id: number) {
      // 1.删除数据操作
      const deletePageResult = await deletePageById(pageName, id)
      // 2.删除成功后，重新获取数据
      this.postPageListAction(pageName, { offset: 0, size: 10 })
    },
    async newPageDataAction(pageName: string, pageInfo: any) {
      // 创建
      const newResult = await newPageData(pageName, pageInfo)
      console.log('newUserResult', newResult)
      // 创建成功后，重新获取数据
      this.postPageListAction(pageName, { offset: 0, size: 10 })
    },
    async editPageDataAction(pageName: string, id: number, pageInfo: any) {
      // 更新
      const editResult = await editPageData(pageName, id, pageInfo)
      // 更新成功后，重新获取数据
      this.postPageListAction(pageName, { offset: 0, size: 10 })
    }
  }
})

export default userSystemStore
