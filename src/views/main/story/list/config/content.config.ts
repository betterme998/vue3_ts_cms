const contentConfig = {
  pageName: 'story',
  header: {
    title: '故事列表'
  },
  propsList: [
    { type: 'index', label: '序号', width: '80px' },
    { type: 'normal', label: '故事标题', prop: 'title', minWidth: '120' },
    { type: 'normal', prop: 'content', label: '我的故事', minWidth: '500' },
    { type: 'timer', label: '创建时间', prop: 'createAt', minWidth: '250' }
  ],
  num: '8'
}

export default contentConfig
