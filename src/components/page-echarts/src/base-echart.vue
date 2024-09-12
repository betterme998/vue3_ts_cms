<template>
  <div class="base-echart">
    <div class="echart" ref="echartRef"></div>
  </div>
</template>

<script setup lang="ts">
// 对echart基础的封装.，不同图标调用这个组件并传入相应option配置项
import { ref, onMounted, watchEffect } from 'vue'
import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'
import ChinaJSON from '../data/china.json'
import ChinaJSON2 from '../data/china2.json'

// 注册地图组件
echarts.registerMap('china', ChinaJSON2 as any)

// echarts的类型
interface Iprops {
  option: EChartsOption
}

const props = defineProps<Iprops>()

const echartRef = ref<HTMLElement>()
onMounted(() => {
  // 1.初始化echart实例
  const echartInstance = echarts.init(echartRef.value, 'light', {
    renderer: 'canvas'
  })
  // 2. 第一次进行setOption 设置配置项和数据,是由别人传进来的
  // 进行监听，传过来的props，会自动搜集依赖，依赖变化会重新执行watchEffect的回调函数
  watchEffect(() => {
    echartInstance.setOption(props.option)
  })
})
</script>

<style scoped lang="less">
.echart {
  height: 300px;
}
</style>
