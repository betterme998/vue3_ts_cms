<!--
 * chat
 * @author: betterme998
 * @since: 2023-08-21
 * chat.vue
-->
<template>
  <div class="chat">
    <el-form :model="form" :rules="rules" ref="ruleFormRef" label-width="auto">
      <el-form-item label="文章标题" prop="title">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="文章内容" prop="content">
        <hy-editor v-model:valueHtml="form.content" />
      </el-form-item>
      <el-form-item label="操作">
        <el-button type="primary" @click="submitForm(ruleFormRef)"> 发布 </el-button>
        <el-button @click="resetForm(ruleFormRef)">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import HyEditor from '@/base-ui/editor'
import storyStore from '@/store/main/story/story'
import type { FormInstance, FormRules } from 'element-plus'

const ruleFormRef = ref<FormInstance>()
interface RuleForm {
  title: string
  content: string
}
const form = reactive({
  title: '',
  content: ''
})

// 表单规则
const rules = reactive<FormRules<RuleForm>>({
  title: [{ required: true, message: 'Please input Activity title', trigger: 'blur' }],
  content: [{ required: true, message: 'Please input activity content', trigger: 'blur' }]
})
// 2.获取roles/deparments数据
const storyStoreObject = storyStore()

// 发布故事和取消发布
const submitForm = (formEl: FormInstance | undefined) => {
  const tempDiv = document.createElement('div')
  tempDiv.innerHTML = form.content
  let infoData = form
  infoData.content = tempDiv.textContent || form.content
  storyStoreObject.setStory('story', infoData)
}

const resetForm = (formEl: FormInstance | undefined) => {
  form.content = ''
  form.title = ''
}

watch(form, (val) => {
  const tempDiv = document.createElement('div')
  tempDiv.innerHTML = val.content
})
</script>
<style lang="less" scoped>
.chat {
}
</style>
