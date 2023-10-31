<!--
 * content
 * @author: betterme998
 * @since: 2023-10-25
 * user-content.vue
-->
<template>
  <!-- 用户内容 -->
  <div class="content">
    <div class="header">
      <h3 class="title">用户列表</h3>
      <el-button type="primary">新建用户</el-button>
    </div>
    <div class="table">表格</div>
    <div class="pagination">分页</div>
  </div>
</template>

<script setup lang="ts">
import userSystemStore from '@/store/main/system/system'

const systemStore = userSystemStore()
systemStore.postUsersListActive()
</script>
<style lang="less" scoped>
.content {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 10px;
  .title {
    font-size: 22px;
  }
}
</style>
