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
    <div class="table">
      <el-table :data="usersList" style="width: 100%">
        <el-table-column align="center" type="selection" width="50px" />
        <el-table-column align="center" type="index" label="序号" width="60px" />
        <el-table-column align="center" prop="name" label="用户名" width="150px" />
        <el-table-column align="center" prop="name" label="真实姓名" width="150px" />
        <el-table-column align="center" prop="cellphone" label="手机号码" width="150px" />
        <el-table-column align="center" prop="enable" label="状态" width="100px" />
        <el-table-column align="center" prop="createAt" label="创建时间" />
        <el-table-column align="center" prop="updateAt" label="更新时间" />

        <el-table-column align="center" label="操作" width="160px">
          <el-button size="small" icon="Edit" type="primary" text>编辑</el-button>
          <el-button size="small" icon="Delete" type="danger" text>删除</el-button>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">分页</div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import userSystemStore from '@/store/main/system/system'

// 1.发起active，请求usersList的数据
const systemStore = userSystemStore()
systemStore.postUsersListActive()

// 2.获取userList数据，进行展示
const { usersList } = storeToRefs(systemStore)
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

.table {
  :deep(.el-table__cell) {
    padding: 12px 0;
  }

  :deep(.el-button) {
    margin-left: 0;
    padding: 5px 8px;
  }
}
</style>
