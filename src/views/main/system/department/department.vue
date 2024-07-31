<!--
 * department
 * @author: betterme998
 * @since: 2023-08-21
 * department.vue
-->
<template>
  <div class="department">
    <page-search
      :search-config="searchConfig"
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    />
    <page-content
      :content-config="contentConfig"
      ref="contentRef"
      @new-click="handleNewClick"
      @edit-click="handleEditClick"
    >
      <!-- 高级封装/抽取：这样封装就可以自由修改子组件的内容，达到定制效果 -->
      <template #leader="scope">
        <span class="leader"> 我是领导: {{ scope.row[scope.prop] }} </span>
      </template>
      <template #parent="scope"> 哈哈哈: {{ scope.row[scope.prop] }} </template>
    </page-content>

    <page-modal :modal-config="modalConfigRef" ref="modalRef" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import PageSearch from '@/components/page-search/page-search.vue'
import PageContent from '@/components/page-content/page-content.vue'
import PageModal from '@/components/page-modal/page-modal.vue'
import useMainStore from '@/store/main/main'

// 导入配置文件
import searchConfig from './config/search.config.ts'
import contentConfig from './config/content.config.ts'
import modalConfig from './config/modal.config.ts'

// 对modalConfig进行操作,选择部门是网络请求的数据，所以需要使用computed修改配置文件的数据
const modalConfigRef = computed(() => {
  const mainStore = useMainStore()
  // 拿到的是proxy，所以要处理数据
  const departments = mainStore.entireDepartments.map((item) => {
    return { label: item.name, value: item.id }
  })
  modalConfig.formItems.forEach((item: any) => {
    if (item.prop === 'parentId') {
      item.options.push(...departments)
    }
  })
  return modalConfig
})

// 点击了search，content的操作
const contentRef = ref<InstanceType<typeof PageContent>>()
function handleQueryClick(queryInfo: any) {
  contentRef.value?.fetchPageListData(queryInfo)
}
function handleResetClick() {
  contentRef.value?.fetchPageListData()
}

// 点击conter，modal的操作
const modalRef = ref<InstanceType<typeof PageModal>>()
function handleNewClick() {
  modalRef.value?.setModalVisible()
}
function handleEditClick(itemData: any) {
  modalRef.value?.setModalVisible(false, itemData)
}
</script>
<style lang="less" scoped>
.department {
}
</style>
