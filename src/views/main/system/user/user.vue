<!--
 * user
 * @author: betterme998
 * @since: 2023-08-21
 * user.vue
-->
<template>
  <div class="user">
    <user-search />
    <user-content />
  </div>
</template>

<script setup lang="ts">
import UserSearch from './c-cpns/user-search.vue'
import UserContent from './c-cpns/user-content.vue'
import { useRouter } from 'vue-router'
import { onMounted, ref, watch } from 'vue'
import router from '@/router'

onMounted(() => {
  let ad = useRouter()
  console.log(router.getRoutes())
})
</script>
<style lang="less" scoped>
.user {
}
</style>
