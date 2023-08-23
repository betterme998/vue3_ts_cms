<!--
 * crumb
 * @author: betterme998
 * @since: 2023-08-23
 * header-crumb.vue
-->
<template>
  <div class="crumb">
    <el-breadcrumb separator-icon="ArrowRight">
      <template v-for="item in breadcrumbs" :key="item.name">
        <el-breadcrumb-item :to="item.path">{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import useLoginStore from '@/store/login/login'
import { mapPathToBteadcrumbs } from '@/utils/map-menus'
import { useRoute } from 'vue-router'

const route = useRoute()
const userMenus = useLoginStore().userMenus
const breadcrumbs = computed(() => {
  return mapPathToBteadcrumbs(route.path, userMenus)
})
</script>
<style lang="less" scoped>
.crumb {
}
</style>
