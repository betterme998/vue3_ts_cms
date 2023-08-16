<!--
 * main
 * @author: betterme998
 * @since: 2023-08-09
 * main.vue
-->
<template>
  <div class="main">
    <h2>main</h2>
    <button @click="handleExitClick">退出登录</button>
  </div>
</template>

<script setup lang="ts">
import { localCache } from '@/utils/cache'
import { LOGIN_TOKEN } from '@/global/constants'
import { useRouter } from 'vue-router'

const router = useRouter()
function handleExitClick() {
  // 1.删除token
  localCache.removeCache(LOGIN_TOKEN)

  // 2.跳回到login页面
  router.push('/login')
}
</script>
<style lang="less" scoped>
.main {
}
</style>
