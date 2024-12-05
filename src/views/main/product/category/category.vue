<!--
 * category
 * @author: betterme998
 * @since: 2023-08-21
 * category.vue
-->
<template>
  <div class="category">
    <page-search
      :search-config="searchConfig"
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    />
    <page-content
      :content-config="contentConfig"
      ref="contentRef"
      @new-click="handleNewClick"
      @edit-click="handleEditClick"
    />
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/page-search/page-search.vue'
import pageContent from '@/components/page-content/page-content.vue'

import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'

import searchConfig from './config/search.config'
import contentConfig from './config/content.config'

// 点击了search，content的操作
// 使用了hooks
const { contentRef, handleQueryClick, handleResetClick } = usePageContent()
// 点击conter，modal的操作
// setup相同的逻辑的抽取：hooks
const { modalRef, handleNewClick, handleEditClick } = usePageModal()
</script>
<style lang="less" scoped>
.category {
}
</style>
