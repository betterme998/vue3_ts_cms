<!--
 * menu
 * @author: betterme998
 * @since: 2023-08-21
 * menu.vue
-->
<template>
  <div class="menu">
    <page-content :content-config="contentConfig" />
  </div>
</template>

<script setup lang="ts">
import pageContent from '@/components/page-content/page-content.vue'
import contentConfig from './config/content.config'
</script>
<style lang="less" scoped>
.menu {
}
</style>
