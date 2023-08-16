import { defineStore } from 'pinia'
import { accountLogins } from '@/service/login/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
import router from '@/router'
import { LOGIN_TOKEN } from '@/global/constants'

const useLoginStore = defineStore('login', {
  state: () => ({
    token: '',
    name: localCache.getCache(LOGIN_TOKEN) ?? '',
    id: ''
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      // 1.账号登录，获取token等信息
      const loginResult = await accountLogins(account)
      this.id = loginResult.data.data.id
      this.name = loginResult.data.data.name
      this.token = loginResult.data.data.token

      // 2.进行本地缓存
      localCache.setCache(LOGIN_TOKEN, this.token)

      // 3.页面跳转（main页面）
      router.push('/main')
    }
  }
})

export default useLoginStore
