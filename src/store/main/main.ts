import { getEntireDepartments, getEntireRoles, getEntireMenus } from '@/service/main/main'
import { defineStore } from 'pinia'

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
      console.log(this.entireMenus)
    }
  }
})

export default useMainStore
