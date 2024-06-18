<!--
 * user
 * @author: betterme998
 * @since: 2023-08-21
 * user.vue
-->
<template>
  <div class="user">
    <!-- 监听子组件自定义事件查询 -->
    <user-search @query-click="handleQueryClick" @reset-click="handleResetClick" />
    <!-- 父组件调用子组件方法，子组件需要把方法暴露出来 -->
    <user-content ref="contentRef" @new-click="handleNewBtnClick" />
    <user-modal ref="modalRef" />
  </div>
</template>

<script setup lang="ts">
import UserSearch from './c-cpns/user-search.vue'
import UserContent from './c-cpns/user-content.vue'
import UserModal from './c-cpns/user-modal.vue'
import { onMounted, ref, watch } from 'vue'
import router from '@/router'

// 对content组件进行操作
const contentRef = ref<InstanceType<typeof UserContent>>()

function handleQueryClick(formData: any) {
  // 调用子组件方法
  contentRef.value?.fetchUserListData(formData)
}

function handleResetClick() {
  contentRef.value?.fetchUserListData()
}

// 对modal组件进行操作
const modalRef = ref<InstanceType<typeof UserModal>>()
function handleNewBtnClick() {
  modalRef.value?.setModalVisible()
}
</script>
<style lang="less" scoped>
.user {
}
</style>
