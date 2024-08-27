// 配置文件 用来配置部门管理页面 需要那些搜索框
const searchConfig = {
  pageName: 'department',
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '部门名称',
      placeholder: '请输入查询的部门名称',
      initialValue: ''
    },
    {
      type: 'input',
      prop: 'leader',
      label: '部门领导',
      placeholder: '请输入查询的部门领导'
    },
    // {
    //   type: 'select',
    //   prop: 'enable',
    //   label: '状态',
    //   placeholder: '请输选择查询的状态',
    //   initialValue: 1,
    //   options: [
    //     { label: '启用', value: 1 },
    //     { label: '禁用', value: 0 }
    //   ]
    // },
    {
      type: 'date-picker',
      prop: 'createAt',
      label: '创建时间'
    }
  ]
}

export default searchConfig
