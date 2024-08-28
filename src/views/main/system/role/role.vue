<!--
 * role
 * @author: betterme998
 * @since: 2023-08-21
 * role.vue
-->
<template>
  <div class="role">
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
    <!-- other-info是弹窗的额外信息 -->
    <page-modal :modal-config="modalConfig" :other-info="otherInfo" ref="modalRef">
      <template #menulist>
        <el-tree
          ref="treeRef"
          style="max-width: 600px"
          :data="entireMenus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleElTreeCheck"
        />
      </template>
    </page-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { storeToRefs } from 'pinia'
import type { ElTree } from 'element-plus'

import PageSearch from '@/components/page-search/page-search.vue'
import PageContent from '@/components/page-content/page-content.vue'
import pageModal from '@/components/page-modal/page-modal.vue'

import searchConfig from './config/search.config'
import contentConfig from './config/content.config'
import modalConfig from './config/modal.config'

import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'

import { mapMenuListToIds } from '@/utils/map-menus'

import useMainStore from '@/store/main/main'

// 逻辑关系
const { contentRef, handleQueryClick, handleResetClick } = usePageContent()
const { modalRef, handleNewClick, handleEditClick } = usePageModal(newCallback, editCallback)

// 获取菜单数据
const mainStore = useMainStore()
const { entireMenus } = storeToRefs(mainStore)
const otherInfo = ref({})
// 因为要操作组件，所以绑定ref
const treeRef = ref<InstanceType<typeof ElTree>>()
function handleElTreeCheck(data1: any, data2: any) {
  // 组件选中触发的事件，用于给弹窗传递额外信息
  const menuList = [...data2.checkedKeys, ...data2.halfCheckedKeys]
  otherInfo.value = { menuList }
}

// 新建时回调，用来清空弹窗的节点
function newCallback() {
  // 调用组件的回方法设置目前选中的节点，使用此方法必须设置 node-key 属性
  nextTick(() => {
    treeRef.value?.setCheckedKeys([])
  })
}
// 让抽成了hooks方法里的数据传出，
function editCallback(itemData: any) {
  // 调用组件的回方法设置目前选中的节点，使用此方法必须设置 node-key 属性
  // nextTick是宏任务还是微任务？：微任务
  nextTick(() => {
    const menuIds = mapMenuListToIds(itemData.menuList)

    treeRef.value?.setCheckedKeys(menuIds)
  })
}
</script>
<style lang="less" scoped>
.role {
}
</style>
