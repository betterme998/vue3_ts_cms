<!--
 * goods
 * @author: betterme998
 * @since: 2023-08-21
 * goods.vue
-->
<template>
  <div class="goods">
    <page-search
      :searchConfig="searchConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleResetClick"
    />
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/page-search/page-search.vue'
import pageContent from '@/components/page-content/page-content.vue'

import usePageContent from '@/hooks/usePageContent'

import searchConfig from './config/search.config'

// 点击了search，content的操作
// 使用了hooks
const { contentRef, handleQueryClick, handleResetClick } = usePageContent()
</script>
<style lang="less" scoped>
.goods {
}
</style>
