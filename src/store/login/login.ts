import { defineStore } from 'pinia'
import { accountLogins, getUserInfoById, getUserMenusByRoleId } from '@/service/login/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
import router from '@/router'
import { LOGIN_TOKEN, LOGIN_TOKEN2 } from '@/global/constants'
import type { RouteRecordRaw } from 'vue-router'
import { mapMenuListToPermissions, mapMenusToRoutes } from '@/utils/map-menus'
import useMainStore from '../main/main'

// 本地数据
import { loginResult2, userInfoResult2, userMenusResult2 } from '@/global/data'

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
  permissions: string[]
  locality: Boolean
}

const useLoginStore = defineStore('login', {
  // 如何指定state返回的类型
  state: (): ILoginState => ({
    token: '',
    userInfo: {},
    userMenus: [],
    permissions: [],
    locality: false
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      // 是否本地化数据登录
      this.locality = false
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

      const userInfo = userInfoResult.data.data
      this.userInfo = userInfo

      // 3.根据角色请求用户的权限（菜单menus）
      const userMenusResult = await getUserMenusByRoleId(this.userInfo.role.id)
      const userMenus = userMenusResult.data.data
      console.log(JSON.stringify(userMenusResult))

      this.userMenus = userMenus

      // 4.进行本地缓存
      localCache.setCache('userInfos', userInfo)
      localCache.setCache('userMenuss', userMenus)

      // 5.请求所有角色/部门数据(roles/departments)数据
      const mainStore = useMainStore()
      mainStore.fetchEntireDataAction()

      // 重要：获取登录用户的所有按钮权限
      // 用户的权限也在返回的菜单当中，需要通过方法抽取出来，并存入store中
      const permissions = mapMenuListToPermissions(userMenus)
      this.permissions = permissions
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

        // 2.获取登录用户的所有按钮权限
        const permissions = mapMenuListToPermissions(userMenus)
        this.permissions = permissions

        // 动态添加路由
        // 2.重要：动态添加路由
        const routes = mapMenusToRoutes(userMenus)
        routes.forEach((route) => router.addRoute('main', route))
      }
    },
    loginLocalData() {
      // 是否本地化数据登录
      this.locality = true
      // 1.账号登录，获取token等信息
      const loginResult = loginResult2
      const id = loginResult.data.data.id
      this.token = loginResult.data.data.token
      // 进行本地缓存
      localCache.setCache(LOGIN_TOKEN2, this.token)

      // 2.获取登录用户的详细信息
      const userInfoResult = userInfoResult2
      const userInfo = userInfoResult.data.data
      this.userInfo = userInfo

      // 3.根据角色请求用户的权限（菜单menus）
      const userMenusResult = userMenusResult2
      const userMenus = userMenusResult.data.data

      this.userMenus = userMenus

      // 4.进行本地缓存
      localCache.setCache('userInfos2', userInfo)
      localCache.setCache('userMenuss2', userMenus)

      // 5.请求所有角色/部门数据(roles/departments)数据
      const mainStore = useMainStore()
      mainStore.fetchEntireDataAction2()

      // 重要：获取登录用户的所有按钮权限
      // 用户的权限也在返回的菜单当中，需要通过方法抽取出来，并存入store中
      const permissions = mapMenuListToPermissions(userMenus)
      this.permissions = permissions
      // 5.重要：动态添加路由
      const routes = mapMenusToRoutes(userMenus)

      routes.forEach((route) => router.addRoute('main', route))

      // 5.页面跳转（main页面）
      router.push('/main')
    },
    Refresh() {
      this.locality = true
      // 进行本地缓存
      // 1.获取token等信息
      const loginResult = loginResult2
      const id = loginResult.data.data.id
      this.token = loginResult.data.data.token
      // 进行本地缓存
      localCache.setCache(LOGIN_TOKEN2, this.token)
      // 2.获取登录用户的详细信息
      const userInfoResult = userInfoResult2
      const userInfo = userInfoResult.data.data
      this.userInfo = userInfo
      // 3.根据角色请求用户的权限（菜单menus）
      const userMenusResult = userMenusResult2
      const userMenus = userMenusResult.data.data
      this.userMenus = userMenus
      // 4.进行本地缓存
      localCache.setCache('userInfos2', userInfo)
      localCache.setCache('userMenuss2', userMenus)
      // 5.请求所有角色/部门数据(roles/departments)数据
      const mainStore = useMainStore()
      mainStore.fetchEntireDataAction2()

      // 重要：获取登录用户的所有按钮权限
      // 用户的权限也在返回的菜单当中，需要通过方法抽取出来，并存入store中
      const permissions = mapMenuListToPermissions(userMenus)
      this.permissions = permissions
      // 5.重要：动态添加路由
      const routes = mapMenusToRoutes(userMenus)

      routes.forEach((route) => router.addRoute('main', route))
    },
    loadLocalCacheAction2() {
      this.Refresh()
      // 1.本地登录时用户进行刷新默认加载数据
      const token = localCache.getCache(LOGIN_TOKEN2)
      const userInfo = localCache.getCache('userInfos2')
      const userMenus = localCache.getCache('userMenuss2')
      if (token && userInfo && userMenus) {
        this.token = token
        this.userInfo = userInfo
        this.userMenus = userMenus

        // 刷新后重新请求
        // 1.请求所有角色/部门数据(roles/departments)数据
        const mainStore = useMainStore()
        mainStore.fetchEntireDataAction2()

        // 2.获取登录用户的所有按钮权限
        const permissions = mapMenuListToPermissions(userMenus)
        this.permissions = permissions

        // 动态添加路由
        // 2.重要：动态添加路由
        const routes = mapMenusToRoutes(userMenus)
        routes.forEach((route) => router.addRoute('main', route))
      }
    }
  }
})

export default useLoginStore
