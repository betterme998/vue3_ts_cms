const contentConfig = {
  // 网络请求名
  pageName: 'menu',
  // 表单名称
  header: {
    title: '菜单列表',
    btnTitle: '菜单管理'
  },
  // 表单属性
  propsList: [
    // 这里没有type属性因为table表单是展开的，而content组件是使用v-bind="item" 来绑定属性，type：'xxx'会覆盖默认值，导致数据不能展开，所以不加type属性
    { label: '菜单名称', prop: 'name', width: '180px' },
    { label: '级别', prop: 'type', width: '120px' },
    { label: '菜单url', prop: 'url', width: '150px' },
    { label: '菜单icon', prop: 'icon', width: '180px' },
    { label: '排序', prop: 'sort', width: '120px' },
    { label: '权限', prop: 'permission', width: '150px' },
    { label: '创建时间', prop: 'createAt' },
    { label: '更新时间', prop: 'updateAt' },
    { label: '操作', width: '150px' }
  ],
  // 表单是否展开
  childrenTree: {
    rowKey: 'id',
    treeProps: {
      children: 'children'
    }
  },
  num: '4'
}

export default contentConfig
