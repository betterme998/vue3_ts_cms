import type { IModalConfig } from '@/components/page-modal/type'
const modalConfig: IModalConfig = {
  pageName: 'category',
  header: {
    newTitle: '新增类别',
    editTitle: '编辑类别'
  },
  formItems: [{ type: 'input', label: '用户名', prop: 'name', placeholder: '请输入部门名称' }]
}
export default modalConfig
