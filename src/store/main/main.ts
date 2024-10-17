import { getEntireDepartments, getEntireRoles, getEntireMenus } from '@/service/main/main'
import { defineStore } from 'pinia'

// 请求失败，本地登录数据
import { rolesResult2, departmentsResult2, mainMenusResult2 } from '@/global/data'

// 定义接口
interface IMainState {
  entireRoles: any[]
  entireDepartments: any[]
  entireMenus: any[]
}

const useMainStore = defineStore('main', {
  state: (): IMainState => ({
    entireRoles: [],
    entireDepartments: [],
    entireMenus: []
  }),
  actions: {
    async fetchEntireDataAction() {
      const rolesResult = await getEntireRoles()
      const departmentsResult = await getEntireDepartments()
      const mainMenusResult = await getEntireMenus()

      // 保存数据
      this.entireRoles = rolesResult.data.data.list
      this.entireDepartments = departmentsResult.data.data.list
      this.entireMenus = mainMenusResult.data.data.list
    },
    fetchEntireDataAction2() {
      const rolesResult = rolesResult2
      const departmentsResult = departmentsResult2
      const mainMenusResult = mainMenusResult2

      // 保存数据
      this.entireRoles = rolesResult.data.data.list
      this.entireDepartments = departmentsResult.data.data.list
      this.entireMenus = mainMenusResult.data.data.list
    }
  }
})

export default useMainStore
