<template>
  <div style="border: 1px solid #ccc">
    <Toolbar
      v-if="showToolbarFlag"
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
      @onChange="handleChange"
      :style="{ height: editorHeight, overflowY: 'hidden' }"
      :readOnly="readOnlyFlag"
    />
  </div>
</template>

<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

interface IProps {
  // 内容
  content: string
  zIndex: number
  // 编辑器高度
  editorHeight: number
  // 是否显示工具栏
  showToolbarFlag: boolean
  // 是否只读
  readOnlyFlag: boolean
  width: number
  focus: boolean
}
// 默认值
const props = withDefaults(defineProps<IProps>(), {
  zIndex: 500,
  editorHeight: 500,
  showToolbarFlag: true,
  readOnlyFlag: true,
  width: 0,
  focus: false,
  content: ''
})
</script>

<style scoped lang="less"></style>
