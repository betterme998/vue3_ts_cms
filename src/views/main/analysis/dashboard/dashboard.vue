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
        <el-col :span="6" :xs="24" :sm="12" :md="8" :lg="6">
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
          <map-echart :map-data="showGoodsAdressSale" />
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
          <bar-echart v-bind="showGoodsCategoryFavor" />
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

import { pieEchart, lineEchart, roseEchart, barEchart, mapEchart } from '@/components/page-echarts'
import { computed } from 'vue'

// 是否本地登录
import useLoginStore from '@/store/login/login'
const loginStore = useLoginStore()

// 1.发起数据的请求
const analysisStore = useAnalysisStore()
if (loginStore.locality) {
  analysisStore.fetchAnalysisDataAcyion2()
} else {
  analysisStore.fetchAnalysisDataAcyion()
}

// 2.从store获取数据qudao数据
const {
  amountResult,
  goodsCategoryCount,
  goodsCategorySale,
  goodsCategoryFavor,
  goodsAddressSale
} = storeToRefs(analysisStore)

// 3.获取数据
const showGoodsCategoryCount = computed(() => {
  return goodsCategoryCount.value
    .filter(
      (item) => item.goodsCount !== 0 && item.goodsCount !== null && item.goodsCount !== undefined
    )
    .map((item) => {
      return {
        name: item.name,
        value: item.goodsCount
      }
    })
})
// 折线图数据-销量数据
const showGoodsCategorySale = computed(() => {
  const labels = goodsCategorySale.value
    .filter(
      (item) => item.goodsCount !== 0 && item.goodsCount !== null && item.goodsCount !== undefined
    )
    .map((item) => {
      return item.name
    })
  const values = goodsCategorySale.value
    .filter(
      (item) => item.goodsCount !== 0 && item.goodsCount !== null && item.goodsCount !== undefined
    )
    .map((item) => {
      return item.goodsCount
    })

  return {
    labels,
    values
  }
})
// 柱状图-收藏数数据
const showGoodsCategoryFavor = computed(() => {
  const labels = goodsCategoryFavor.value
    .filter(
      (item) => item.goodsFavor !== 0 && item.goodsFavor !== null && item.goodsFavor !== undefined
    )
    .map((item) => {
      return item.name
    })
  const values = goodsCategoryFavor.value
    .filter(
      (item) => item.goodsFavor !== 0 && item.goodsFavor !== null && item.goodsFavor !== undefined
    )
    .map((item) => {
      return item.goodsFavor
    })

  return {
    labels,
    values
  }
})

// 地图数据处理
const showGoodsAdressSale = computed(() => {
  return goodsAddressSale.value.map((item) => ({
    name: item.address,
    value: item.count
  }))
})
</script>
<style lang="less" scoped>
.el-row {
  margin-bottom: 10px;
}
.el-col {
  margin-bottom: 10px;
}

.echarts {
  height: 20px;
}
</style>
