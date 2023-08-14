<!--
 * pane-account
 * @author: betterme998
 * @since: 2023-08-14
 * pane-account.vue
-->
<template>
  <!-- 账号登录 -->
  <div class="pane-account">
    <el-form :model="account" :rules="accountRules" label-width="60px" size="large" status-icon>
      <el-form-item label="帐号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { FormRules } from 'element-plus'

// 定义account数据
const account = reactive({
  name: '',
  password: ''
})

// 2.定义校验规则
const accountRules: FormRules = {
  name: [
    { required: true, message: '必须输入帐户信息~', trigger: 'blur' },
    { pattern: /^[a-z0-9]{6,20}$/, message: '必须是6~20位长度~', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '必须输入密码信息~', trigger: 'blur' },
    { pattern: /^[a-z0-9]{3,}$/, message: '必须是3位以上数字或字母', trigger: 'blur' }
  ]
}

// 3.执行账号的登录逻辑
function loginAction() {
  console.log('pance-account', account.name, account.password)
}
// 报出去给父组件使用
defineExpose({
  loginAction
})
</script>
<style lang="less" scoped>
.pane-account {
}
</style>
