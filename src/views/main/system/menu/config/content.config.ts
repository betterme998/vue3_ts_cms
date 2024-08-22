const contentConfig = {
  pageName: 'menu',
  header: {
    title: '菜单列表',
    btnTitle: '菜单管理'
  },
  propsList: [
    { type: 'normal', label: '菜单名称', prop: 'name', width: '180px' },
    { type: 'normal', label: '级别', prop: 'type', width: '120px' },
    { type: 'normal', label: '菜单url', prop: 'url', width: '150px' },
    { type: 'normal', label: '菜单icon', prop: 'icon', width: '180px' },
    { type: 'normal', label: '排序', prop: 'sort', width: '120px' },
    { type: 'normal', label: '权限', prop: 'permission', width: '150px' },
    { type: 'timer', label: '创建时间', prop: 'createAt' },
    { type: 'timer', label: '更新时间', prop: 'updateAt' },
    { type: 'handler', label: '操作', width: '150px' }
  ]
}

export default contentConfig
