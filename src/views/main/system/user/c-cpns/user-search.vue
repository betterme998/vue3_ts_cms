<!--
 * userSearch
 * @author: betterme998
 * @since: 2023-09-03
 * user-search.vue
-->
<template>
  <div class="userSearch">
    <!-- 1.输入搜索关键字的表单 -->
    <el-form :model="searchForm" ref="formRef" label-width="80px" size="large">
      <el-row :gutter="15">
        <el-col :span="8">
          <!-- 我们使用内置方法resetFields（）重置需要配合prop，不然他不知道要重置那个 -->
          <el-form-item label="用户名" prop="name">
            <el-input v-model="searchForm.name" placeholder="请输入查询的用户名 " />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="真实姓名">
            <el-input placeholder="请输入查询的真实姓名 " />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="电话号码">
            <el-input placeholder="请输入查询的电话号码 " />
          </el-form-item>
        </el-col>

        <!-- 写一个el-row就可以，前面吧24个都沾满了会另取一行 -->
        <el-col :span="8">
          <el-form-item label="状态">
            <el-select placeholder="请选择查询状态" style="width: 100%">
              <el-option label="启用" :value="1" />
              <el-option label="禁用" :value="0" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间">
            <el-date-picker
              type="daterange"
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <!-- 2.重置和搜索的按钮 -->
    <div class="btns">
      <el-button icon="Refresh" @click="handleResetClick">重置</el-button>
      <el-button icon="Search" type="primary">查询</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ElForm } from 'element-plus'
import { reactive, ref } from 'vue'

const searchForm = reactive({
  name: ''
})

// 1.重置操作
const formRef = ref<InstanceType<typeof ElForm>>()
function handleResetClick() {
  // 内置方法，当有值时调用重置
  formRef.value?.resetFields()
}
</script>
<style lang="less" scoped>
.userSearch {
  background-color: #fff;
  padding: 20px;
  .el-form-item {
    padding: 20px;
    margin-bottom: 0;
  }
  .btns {
    text-align: right;
    padding: 0 50px 10px 0;
    .el-button {
      height: 36px;
    }
  }
}
</style>
