<!--
 * dashboard
 * @author: betterme998
 * @since: 2023-08-21
 * dashboard.vue
-->
<template>
  <div class="dashboard">
    <!-- 1.顶部数字的数据展示 -->
    <el-row :gutter="10">
      <template v-for="item in amountResult" :key="item.amount">
        <el-col :span="6">
          <count-card v-bind="item" />
        </el-col>
      </template>
    </el-row>

    <!-- 2.中间部分的图标 -->
    <el-row :gutter="10">
      <el-col :span="7">
        <chart-card>
          <div class="echartRef"></div>
        </chart-card>
      </el-col>
      <el-col :span="10">
        <chart-card></chart-card>
      </el-col>
      <el-col :span="7">
        <chart-card></chart-card>
      </el-col>
    </el-row>

    <!-- 3.底部部分的图标 -->
    <el-row :gutter="10">
      <el-col :span="12">
        <chart-card>饼图</chart-card>
      </el-col>
      <el-col :span="12">
        <chart-card>柱状图</chart-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import useAnalysisStore from '@/store/main/analysis/analysis'
import countCard from './c-cpns/count-card/count-card.vue'
import chartCard from './c-cpns/chart-card/chart-card.vue'

import * as echarts from 'echarts'

// 1.发起数据的请求
const analysisStore = useAnalysisStore()
analysisStore.fetchAnalysisDataAcyion()

// 2.从store获取数据qudao数据
const { amountResult } = storeToRefs(analysisStore)

// 3.echarts相关逻辑
const echartRef = ref<HTMLDivElement>()
onMounted(() => {
  // 1.初始化echarts
  const echartInstance = echarts.init(echartRef.value!, 'dark', {
    renderer: 'canvas'
  })
})
</script>
<style lang="less" scoped>
.el-row {
  margin-bottom: 10px;
}
</style>
