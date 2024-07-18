import { defineStore } from 'pinia'
import { accountLogins, getUserInfoById, getUserMenusByRoleId } from '@/service/login/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
import router from '@/router'
import { LOGIN_TOKEN } from '@/global/constants'
import type { RouteRecordRaw } from 'vue-router'
import { mapMenusToRoutes } from '@/utils/map-menus'
import useMainStore from '../main/main'

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}

const useLoginStore = defineStore('login', {
  // 如何指定state返回的类型
  state: (): ILoginState => ({
    token: '',
    userInfo: {},
    userMenus: []
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      // 1.账号登录，获取token等信息
      const loginResult = await accountLogins(account)
      console.log(loginResult)
      const id = loginResult.data.data.id
      this.token = loginResult.data.data.token
      // 进行本地缓存
      localCache.setCache(LOGIN_TOKEN, this.token)

      // 2.获取登录用户的详细信息
      console.log(id)
      const userInfoResult = await getUserInfoById(id)
      console.log(userInfoResult)

      const userInfo = userInfoResult.data.data
      this.userInfo = userInfo

      // 3.根据角色请求用户的权限（菜单menus）
      const userMenusResult = await getUserMenusByRoleId(this.userInfo.role.id)
      const userMenus = userMenusResult.data.data
      console.log(userMenus, '这个')

      this.userMenus = userMenus

      // 4.进行本地缓存
      localCache.setCache('userInfos', userInfo)
      localCache.setCache('userMenuss', userMenus)

      // 5.请求所有角色/部门数据(roles/departments)数据
      const mainStore = useMainStore()
      mainStore.fetchEntireDataAction()

      // 5.重要：动态添加路由
      const routes = mapMenusToRoutes(userMenus)

      routes.forEach((route) => router.addRoute('main', route))
      console.log(router)

      // 5.页面跳转（main页面）
      router.push('/main')
    },
    loadLocalCacheAction() {
      // 1.用户进行刷新默认加载数据
      const token = localCache.getCache(LOGIN_TOKEN)
      const userInfo = localCache.getCache('userInfos')
      const userMenus = localCache.getCache('userMenuss')
      if (token && userInfo && userMenus) {
        this.token = token
        this.userInfo = userInfo
        this.userMenus = userMenus

        // 刷新后重新请求
        // 1.请求所有角色/部门数据(roles/departments)数据
        const mainStore = useMainStore()
        mainStore.fetchEntireDataAction()

        // 动态添加路由
        // 2.重要：动态添加路由
        const routes = mapMenusToRoutes(userMenus)
        routes.forEach((route) => router.addRoute('main', route))
      }
    }
  }
})

export default useLoginStore
