<!--
 * main-menu
 * @author: betterme998
 * @since: 2023-08-17
 * main-menu.vue
-->
<template>
  <div class="main-menu">
    <div class="logo" :class="{ logoMin: isFold }">
      <img class="img" src="@/assets/img/logo.svg" alt="" />
      <h2 v-show="!isFold" class="title">管理系统</h2>
    </div>
    <div class="menu">
      <el-menu
        active-text-color="#fff"
        :collapse="isFold"
        text-color="#b7bdc3"
        background-color="#001529"
        default-active="3"
      >
        <!-- 1.遍历整个菜单 -->
        <template v-for="item in userMenus" :key="item.id">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <!-- 图标使用动态组件， -->
              <el-icon>
                <component :is="item.icon.split('el-icon')[1]" />
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.id + ''">{{ subitem.name }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import useLoginStore from '@/store/login/login'
import type { Monitor } from '@element-plus/icons-vue'
// 0.定义props
defineProps({
  isFold: {
    type: Boolean,
    default: false
  }
})
// 1.获取动态菜单
const loginStore = useLoginStore()
const userMenus = loginStore.userMenus
console.log(userMenus)
</script>
<style lang="less" scoped>
.main-menu {
  height: 100%;
  background-color: #001529;
}
.logo {
  display: flex;
  height: 30px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  .img {
    height: 100%;
    margin: 0 10px;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    color: white;
    white-space: nowrap;
  }
}
.logoMin {
  justify-content: center;
}
.el-menu {
  border-right: none;
  user-select: none;
}

.el-sub-menu {
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135;
  }

  .el-menu-item:hover {
    color: #fff;
  }

  .el-menu-item.is-active {
    background-color: #0a60bd;
  }
}
</style>
