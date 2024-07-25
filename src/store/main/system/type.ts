// 单个用户接口类型
export interface IUser {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  departmentId: number
  roleId: number
  createAt: string
  updateAt: string
}

// 用户列表接口类型
export interface ISystemState {
  usersList: IUser[]
  usersTotalCount: number

  pageList: any[]
  pageTotalCount: number
}
