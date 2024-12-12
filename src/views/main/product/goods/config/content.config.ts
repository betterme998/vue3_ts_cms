const contentConfig = {
  pageName: 'goods',
  header: {
    title: '商品列表',
    brnTitle: '新建商品'
  },
  propsList: [
    { type: 'selection', label: '选择', width: '80px' },
    { type: 'index', label: '序号', width: '80px' },
    { label: '商品名称', prop: 'name', minWidth: '100' },
    { type: 'normal', prop: 'oldPrice', label: '原价格', width: '80' },
    { type: 'normal', prop: 'newPrice', label: '新价格', minWidth: '80' },
    { type: 'normal', prop: 'desc', label: '商品描述', minWidth: '100' },
    { type: 'normal', prop: 'status', label: '状态', minWidth: '80' },
    { type: 'custom', prop: 'imgUrl', label: '图片', minWidth: '100', slotName: 'imageSlot' },
    { type: 'normal', prop: 'inventoryCount', label: '库存', minWidth: '80' },
    { type: 'normal', prop: 'saleCount', label: '销量', minWidth: '80' },
    { type: 'normal', prop: 'favorCount', label: '收藏', minWidth: '80' },
    { type: 'normal', prop: 'address', label: '地址', minWidth: '80' },
    { type: 'timer', label: '创建时间', prop: 'createAt' },
    { type: 'timer', label: '更新时间', prop: 'updateAt' },
    { type: 'handler', label: '操作', width: '160px' }
  ],
  num: '7'
}

export default contentConfig
