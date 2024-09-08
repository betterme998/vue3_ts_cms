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
          <pie-echart :pie-data="showGoodsCategoryCount" />
        </chart-card>
      </el-col>
      <el-col :span="10">
        <chart-card>
          <p>11</p>
        </chart-card>
      </el-col>
      <el-col :span="7">
        <chart-card>
          <rose-echart :rose-data="showGoodsCategoryCount" />
        </chart-card>
      </el-col>
    </el-row>

    <!-- 3.底部部分的图标 -->
    <el-row :gutter="10">
      <el-col :span="12">
        <chart-card>
          <line-echart v-bind="showGoodsCategorySale" />
        </chart-card>
      </el-col>
      <el-col :span="12">
        <chart-card>
          <bar-echart v-bind="showGoodsCategorySale" />
        </chart-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useAnalysisStore from '@/store/main/analysis/analysis'
import countCard from './c-cpns/count-card/count-card.vue'
import chartCard from './c-cpns/chart-card/chart-card.vue'

import { pieEchart, lineEchart, roseEchart, barEchart } from '@/components/page-echarts'
import { computed } from 'vue'

// 1.发起数据的请求
const analysisStore = useAnalysisStore()
analysisStore.fetchAnalysisDataAcyion()

// 2.从store获取数据qudao数据
const { amountResult, goodsCategoryCount, goodsCategorySale } = storeToRefs(analysisStore)

// 3.获取数据
const showGoodsCategoryCount = computed(() => {
  return goodsCategoryCount.value.map((item) => {
    if (item.goodsCount === 0) item.goodsCount = null
    return {
      name: item.name,
      value: item.goodsCount
    }
  })
})
// 柱状图数据-销量数据
const showGoodsCategorySale = computed(() => {
  const labels = goodsCategorySale.value.map((item) => {
    if (item.goodsCount === 0 || item.goodsCount === null) return
    return item.name
  })
  const values = goodsCategorySale.value.map((item) => {
    if (item.goodsCount === 0 || item.goodsCount === null) return
    return item.goodsCount
  })

  return {
    labels,
    values
  }
})
</script>
<style lang="less" scoped>
.el-row {
  margin-bottom: 10px;
}

.echarts {
  height: 20px;
}
</style>
