const searchConfig = {
  pageName: 'category',
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '类别名称',
      placeholder: '请输入查询的类别名称',
      initialValue: ''
    },
    {
      type: 'date-picker',
      prop: 'createAt',
      label: '创建时间'
    }
  ]
}
export default searchConfig
