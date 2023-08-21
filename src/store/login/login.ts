import { defineStore } from 'pinia'
import { accountLogins, getUserInfoById, getUserMenusByRoleId } from '@/service/login/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
import router from '@/router'
import { LOGIN_TOKEN } from '@/global/constants'

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}

const useLoginStore = defineStore('login', {
  // 如何指定state返回的类型
  state: (): ILoginState => ({
    token: localCache.getCache(LOGIN_TOKEN) ?? '',
    userInfo: localCache.getCache('userInfo') ?? '',
    userMenus: localCache.getCache('userMenus') ?? ''
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      // 1.账号登录，获取token等信息
      const loginResult = await accountLogins(account)
      const id = loginResult.data.data.id
      this.token = loginResult.data.data.token
      // 进行本地缓存
      localCache.setCache(LOGIN_TOKEN, this.token)

      // 2.获取登录用户的详细信息
      const userInfoResult = await getUserInfoById(id)
      const userInfo = userInfoResult.data.data
      this.userInfo = userInfo

      // 3.根据角色请求用户的权限（菜单menus）
      const userMenusResult = await getUserMenusByRoleId(this.userInfo.role.id)
      const userMenus = userMenusResult.data.data
      console.log(userMenus)

      this.userMenus = userMenus

      // 4.进行本地缓存
      localCache.setCache('userInfo', userInfo)
      localCache.setCache('userMenus', userMenus)

      // 5.重要：动态添加路由
      // 1.获取菜单
      // 2.动态获取所有的路由对象，放到数组 （路由对象都在独立的文件中，从文件中将所以路由对象读取到数组中）
      // 3.根据菜单匹配正确的路由 （router.addRouter('main',xxx)）

      // 5.页面跳转（main页面）
      router.push('/main')
    }
  }
})

export default useLoginStore
