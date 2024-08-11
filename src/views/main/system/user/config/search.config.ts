const searchConfig = {
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '用户名称',
      placeholder: '请输入查询的用户名称',
      initialValue: ''
    },
    {
      type: 'input',
      prop: 'realname',
      label: '真实姓名',
      placeholder: '请输入查询的真实姓名'
    },
    {
      type: 'input',
      prop: 'cellphone',
      label: '电话号码',
      placeholder: '请输入查询的电话号码',
      initialValue: ''
    },
    {
      type: 'select',
      label: '状态',
      prop: 'enable',
      placeholder: '请选择状态',
      // 这部分数据是网络请求的，需要特殊处理
      options: [
        {
          value: 1,
          label: '启用'
        },
        {
          value: '禁用',
          label: 0
        }
      ],
      initialValue: 1
    },
    {
      type: 'date-picker',
      prop: 'createAt',
      label: '创建时间'
    }
  ]
}

export default searchConfig
