import hyRequest from '@/service'

/* 用户的网络请求 */
export function postUsersListData(queryInfo: any) {
  return hyRequest.post({
    url: '/users/list',
    data: queryInfo
  })
}
// 删除用户
export function deleteUserById(id: number) {
  return hyRequest.delete({
    url: `/users/${id}`
  })
}
// 新建用户
export function newUserData(userInfo: any) {
  return hyRequest.post({
    url: '/users',
    data: userInfo
  })
}
// 编辑用户
export function editUserData(id: number, userInfo: any) {
  return hyRequest.patch({
    url: `/users/${id}`,
    data: userInfo
  })
}

/** 针对页面的网络请求： 增删改查. 当后端返回的数据比较乱，接口不规范，可以写一个工具处理数据 **/
export function postPageListData(pageName: string, queryInfo: any) {
  return hyRequest.post({
    //查询
    url: `/${pageName}/list`,
    data: queryInfo
  })
}
export function deletePageById(pageName: string, id: number) {
  return hyRequest.delete({
    //删除
    url: `/${pageName}/${id}`
  })
}
export function newPageData(pageName: string, pageInfo: any) {
  return hyRequest.post({
    //新建
    url: `/${pageName}`,
    data: pageInfo
  })
}
export function editPageData(pageName: string, id: number, pageInfo: any) {
  return hyRequest.patch({
    //编辑
    url: `/${pageName}/${id}`,
    data: pageInfo
  })
}
