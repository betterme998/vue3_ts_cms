const searchConfig = {
  pageName: 'goods',
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '商品名称',
      placeholder: '请输入查询的商品名称',
      initialValue: ''
    },
    {
      type: 'input',
      prop: 'name',
      label: '商品地址',
      placeholder: '请输入查询的商品地址',
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
          label: '可用'
        },
        {
          value: '下架',
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
