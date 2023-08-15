import { defineStore } from 'pinia'
import { accountLogins } from '@/service/login/login'
import type { IAccount } from '@/types'

const useLoginStore = defineStore('login', {
  state: () => ({
    token: '',
    name: '',
    id: ''
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      const loginResult = await accountLogins(account)
      this.id = loginResult.data.data.id
      this.name = loginResult.data.data.name
      this.token = loginResult.data.data.token
    }
  }
})

export default useLoginStore
