<!--
 * user
 * @author: betterme998
 * @since: 2023-08-21
 * user.vue
-->
<template>
  <div class="user">
    <!-- 监听子组件自定义事件查询 -->
    <page-search
      :search-config="searchConfig"
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    />
    <!-- 父组件调用子组件方法，子组件需要把方法暴露出来 -->
    <page-content
      :content-config="contentConfig"
      ref="contentRef"
      @new-click="handleNewClick"
      @edit-click="handleEditClick"
    >
      <!-- 高级封装/抽取：这样封装就可以自由修改子组件的内容，达到定制效果 -->
      <!-- 作用域插槽 -->
      <template #enable="scope">
        <el-button size="small" :type="scope.row.enable ? 'primary' : 'danger'" plain>
          {{ scope.row.enable ? '启动' : '禁用' }}
        </el-button>
      </template>
    </page-content>

    <user-modal :modal-config="modalConfigRef" ref="modalRef" />
  </div>
</template>

<script setup lang="ts">
// import UserSearch from './c-cpns/user-search.vue'
// import UserContent from './c-cpns/user-content.vue'
// import UserModal from './c-cpns/user-modal.vue'
import { computed, ref } from 'vue'

import useMainStore from '@/store/main/main'
import PageSearch from '@/components/page-search/page-search.vue'
import PageContent from '@/components/page-content/page-content.vue'
import UserModal from '@/components/page-modal/page-modal.vue'

import searchConfig from './config/search.config'
import contentConfig from './config/content.config'
import modalConfig from './config/modal.config'

import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'

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

// 点击conter，modal的操作
// setup相同的逻辑的抽取：hooks
// const { modalRef, handleNewClick, handleEditClick } = usePageModal()

// // 对content组件进行操作
// const contentRef = ref<InstanceType<typeof PageContent>>()

// function handleQueryClick(formData: any) {
//   // 调用子组件方法
//   contentRef.value?.fetchUserListData(formData)
// }

// function handleResetClick() {
//   contentRef.value?.fetchUserListData()
// }

// 对modal组件进行操作
// const modalRef = ref<InstanceType<typeof UserModal>>()
// function handleBtnClick() {
//   modalRef.value?.setModalVisible()
// }
// function handleEditClick(itemData: any) {
//   modalRef.value?.setModalVisible(false, itemData)
// }
</script>
<style lang="less" scoped>
.user {
}
</style>
