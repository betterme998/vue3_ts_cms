<!--
 * login
 * @author: betterme998
 * @since: 2023-08-09
 * login.vue
-->
<template>
  <div class="login">
    <h2>login</h2>
  </div>
</template>

<script setup lang="ts">
import hyRequest from '@/service'
hyRequest
  .get({
    url: '/home/multidata'
  })
  .then((res) => {
    console.log(res)
  })
</script>
<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>
