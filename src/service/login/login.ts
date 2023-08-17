import hyRequest from '..'
import type { IAccount } from '@/types'

// 登录
export function accountLogins(account: IAccount) {
  return hyRequest.post({
    url: '/login',
    data: account
  })
}

// 查询用户详情
export function getUserInfoById(id: number) {
  return hyRequest.get({
    url: `users/${id}`
  })
}

// 获取角色菜单树
export function getUserMenusByRoleId(id: number) {
  return hyRequest.get({
    url: `/role/${id}/menu`
  })
}
