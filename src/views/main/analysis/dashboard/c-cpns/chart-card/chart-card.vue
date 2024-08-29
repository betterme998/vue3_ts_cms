<template>
  <div class="chart-card">
    <el-card class="box-card" :header="header">
      <h2>hhhh</h2>
    </el-card>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  header?: string
}

// 默认值
withDefaults(defineProps<IProps>(), {
  header: '卡片的头部标题'
})
</script>

<style scoped lang="less"></style>
