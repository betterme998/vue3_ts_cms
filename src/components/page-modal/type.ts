export interface IModalConfig {
  pageName: string
  header: {
    newTitle: string
    editTitle: string
  }
  formItems: any[]
}
export interface IModalProps {
  modalConfig: IModalConfig
  // 这是表单匿名插槽的数据类型
  otherInfo?: any
}
