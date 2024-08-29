<template>
  <div class="count-card">
    <div class="header">
      <span class="title">{{ title }}</span>
      <el-tooltip :content="tips" placement="top" effect="light">
        <el-icon><Warning /></el-icon>
      </el-tooltip>
    </div>
    <div class="content">
      <!-- 使用了动画库countup -->
      <span ref="count1Ref">{{ number1 }}</span>
    </div>
    <div class="footer">
      <span>{{ subtitle }}</span>
      <span ref="count2Ref">{{ number2 }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CountUp } from 'countup.js'
import { ref, onMounted, toRef } from 'vue'

interface Iprops {
  amount?: string
  title?: string
  tips?: string
  number1?: number
  number2?: number
  subtitle?: string
}

// 默认值
const props = withDefaults(defineProps<Iprops>(), {
  title: '商品总销量',
  tips: '所有商品的总销量',
  number1: 566669,
  number2: 566669,
  subtitle: '商品总销量'
})

// 创建CountUp实例
const count1Ref = ref<HTMLElement | null>(null)
const count2Ref = ref<HTMLElement | null>(null)
// 参数一：要执行的动画元素
// 参数二：数字增加到多少

const countOption = {
  prefix: toRef(props, 'amount').value === 'saleroom' ? '￥' : ''
}
onMounted(() => {
  const countup1 = new CountUp(count1Ref.value!, props.number1, countOption)
  const countup2 = new CountUp(count2Ref.value!, props.number2, countOption)
  countup1.start()
  countup2.start()
})
</script>

<style scoped lang="less">
.count-card {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  height: 130px;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 38px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
  }
  .content {
    display: flex;
    margin-left: 0px;
    font-size: 26px;
    color: rgba(0, 0, 0, 0.85);
    flex: 1;
    align-items: center;
  }
  .footer {
    display: flex;
    height: 38px;
    line-height: 38px;
    font-size: 14px;
    letter-spacing: 1px;
    border-top: 1px solid rgba(0, 0, 0, 0.85);
    color: rgba(0, 0, 0, 0.45);
  }
}
</style>
