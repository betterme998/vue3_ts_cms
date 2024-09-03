<template>
  <div class="pie-echart">
    <base-echart :option="option" />
  </div>
</template>

<script setup lang="ts">
// 饼图封装
// 导入基础配置组件
import { computed } from 'vue'
import BaseEchart from './base-echart.vue'
// 导入类型，echarts配置项的类型
import type { EChartsOption } from 'echarts'

// 图表数据需要传入
// 数据类型
interface IEchartValueType {
  value: number
  name: string
}
interface Iprops {
  pieData: IEchartValueType[]
}

const props = defineProps<Iprops>()
// echarts 配置项,指定option为EChartsOption
const option = computed<EChartsOption>(() => {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'left'
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '50%',
        bottom: '-10%',
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>

<style scoped lang="less"></style>
