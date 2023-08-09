<!--
 * main
 * @author: betterme998
 * @since: 2023-08-09
 * main.vue
-->
<template>
  <div class="main">
    <h2>main:{{ counterStore.counter }}-{{ counterStore.doubleCounter }}</h2>
    <button @click="changeCounter">修改counter</button>
  </div>
</template>

<script setup lang="ts">
import useCounterStore from '@/store/counter'
const counterStore = useCounterStore()

function changeCounter() {
  counterStore.changeCounterAction(999)
}
</script>
<style lang="less" scoped>
.main {
}
</style>
