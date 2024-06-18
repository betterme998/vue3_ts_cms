<template>
  <div class="modal">
    <el-dialog v-model="dialogVisible" title="新建用户" width="30%" center>
      <span> It should be noted that the content will not be aligned in center by default </span>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false"> 确定 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 1.定义内部的属性
const dialogVisible = ref(true)

// 2.定义设置dialogVisible方法
function setModalVisible() {
  dialogVisible.value = true
}

// 暴露的属性和方法
defineExpose({ setModalVisible })
</script>

<style scoped lang="less"></style>
