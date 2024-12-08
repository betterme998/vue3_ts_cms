<!--
 * category
 * @author: betterme998
 * @since: 2023-08-21
 * category.vue
-->
<template>
  <div class="category">
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
    />
    <user-modal :modal-config="modalConfigRef" ref="modalRef" />
  </div>
</template>

<script setup lang="ts">
import useMainStore from '@/store/main/main'

import PageSearch from '@/components/page-search/page-search.vue'
import pageContent from '@/components/page-content/page-content.vue'
import UserModal from '@/components/page-modal/page-modal.vue'

import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'

import searchConfig from './config/search.config'
import contentConfig from './config/content.config'
import modalConfig from './config/modal.config'

import { computed, ref } from 'vue'

// 对modalConfig进行操作,选择部门是网络请求的数据，所以需要使用computed修改配置文件的数据
const modalConfigRef = computed(() => {
  const mainStore = useMainStore()
  // 拿到的是proxy，所以要处理数据
  const departments = mainStore.entireDepartments.map((item) => {
    return { label: item.name, value: item.id }
  })
  const roles = mainStore.entireRoles.map((item) => {
    return { label: item.name, value: item.id }
  })
  modalConfig.formItems.forEach((item: any) => {
    if (item.prop === 'departmentId') {
      item.options.push(...departments)
    }
    if (item.prop === 'roleId') {
      item.options.push(...roles)
    }
  })
  return modalConfig
})

// 点击了search，content的操作
// 使用了hooks
const { contentRef, handleQueryClick, handleResetClick } = usePageContent()
// 点击conter，modal的操作
// setup相同的逻辑的抽取：hooks
const { modalRef, handleNewClick, handleEditClick } = usePageModal()
</script>
<style lang="less" scoped>
.category {
}
</style>
