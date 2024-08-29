// 配置文件 用来配置部门管理页面 需要那些搜索框
const searchConfig = {
  pageName: 'role',
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '角色名称',
      placeholder: '请输入查询的角色名称',
      initialValue: ''
    },
    {
      type: 'input',
      prop: 'intro',
      label: '权限介绍',
      placeholder: '请输入查询的权限介绍'
    },
    {
      type: 'date-picker',
      prop: 'createAt',
      label: '创建时间'
    }
  ]
}

export default searchConfig