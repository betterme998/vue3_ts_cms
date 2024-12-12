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
    <!-- 父组件调用子组件方法，子组件需要把方法暴露出来 -->
    <page-content
      ref="contentRef"
      :content-config="contentConfig"
      @new-click="handleNewClick"
      @edit-click="handleEditClick"
    >
      <!-- 高级封装/抽取：这样封装就可以自由修改子组件的内容，达到定制效果 -->
      <!-- 作用域插槽 -->
      <template #imageSlot="scope">
        <el-image
          style="width: 50px; height: 50px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        >
        </el-image>
      </template>
    </page-content>
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/page-search/page-search.vue'
import pageContent from '@/components/page-content/page-content.vue'

import usePageContent from '@/hooks/usePageContent'

import searchConfig from './config/search.config'
import contentConfig from './config/content.config'

import usePageModal from '@/hooks/usePageModal'

// 点击了search，content的操作
// 使用了hooks
const { contentRef, handleQueryClick, handleResetClick } = usePageContent()
// 点击conter，modal的操作
// setup相同的逻辑的抽取：hooks
const { modalRef, handleNewClick, handleEditClick } = usePageModal()
</script>
<style lang="less" scoped>
.goods {
}
</style>
