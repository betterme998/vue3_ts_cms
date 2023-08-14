<!--
 * login
 * @author: betterme998
 * @since: 2023-08-09
 * login.vue
-->
<template>
  <div class="login">
    <div class="login">
      <login-panel />
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginPanel from './c-cpns/login-panel.vue'
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
