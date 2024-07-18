import hyRequest from '..'
// 因为这些数据是很多地方都需要的，所以单独抽离出来
// 获取全部角色信息
export function getEntireRoles() {
  return hyRequest.post({
    url: '/role/list'
  })
}

// 获取全部部门信息
export function getEntireDepartments() {
  return hyRequest.post({
    url: '/department/list'
  })
}
