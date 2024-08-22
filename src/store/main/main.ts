import { getEntireDepartments, getEntireRoles } from '@/service/main/main'
import { defineStore } from 'pinia'

// 定义接口
interface IMainState {
  entireRoles: any[]
  entireDepartments: any[]
}

const useMainStore = defineStore('main', {
  state: (): IMainState => ({
    entireRoles: [],
    entireDepartments: []
  }),
  actions: {
    async fetchEntireDataAction() {
      const rolesResult = await getEntireRoles()
      const departmentsResult = await getEntireDepartments()

      // 保存数据
      this.entireRoles = rolesResult.data.data.list
      this.entireDepartments = departmentsResult.data.data.list
      console.log(this.entireRoles, this.entireDepartments)
    }
  }
})

export default useMainStore
