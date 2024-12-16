<!--
 * list
 * @author: betterme998
 * @since: 2023-08-21
 * list.vue
-->
<template>
  <div class="list">
    <page-content ref="contentRef" :content-config="contentConfig" />
  </div>
</template>

<script setup lang="ts">
import pageContent from '@/components/page-content/page-content.vue'
import contentConfig from './config/content.config'
</script>
<style lang="less" scoped>
.list {
}
</style>
