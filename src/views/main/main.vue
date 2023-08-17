<!--
 * main
 * @author: betterme998
 * @since: 2023-08-09
 * main.vue
-->
<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside width="210px">
        <!-- 菜单组件 -->
        <main-menu />
      </el-aside>
      <el-container>
        <el-header height="50px">
          <!-- header组件 -->
          <main-header />
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import MainMenu from '@/components/main-menu/main-menu.vue'
import MainHeader from '@/components/main-header/main-header.vue'
</script>
<style lang="less" scoped>
.main {
  height: 100%;
}

.main-content {
  height: 100%;

  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #001529;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */

    transition: width 0.3s ease;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .el-main {
    background-color: #f0f2f5;
  }
}
</style>
