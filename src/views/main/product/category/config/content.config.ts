const contentConfig = {
  pageName: 'category',
  header: {
    title: '类别列表',
    brnTitle: '新建用户'
  },
  propsList: [
    { type: 'normal', label: '角色名称', prop: 'name', width: '120px' },
    { type: 'timer', label: '创建时间', prop: 'createAt' },
    { type: 'timer', label: '更新时间', prop: 'updateAt' },
    { type: 'handler', label: '操作', width: '160px' }
  ],
  num: '2'
}

export default contentConfig
