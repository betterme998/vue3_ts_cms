<template>
  <div style="border: 1px solid #ccc">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 500px; overflow-y: hidden"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
      @onChange="handleChange"
      @onDestroyed="handleDestroyed"
      @onFocus="handleFocus"
      @onBlur="handleBlur"
      @customAlert="customAlert"
      @customPaste="customPaste"
    />
  </div>
</template>

<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { onBeforeUnmount, computed, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

const mode = ref('default')
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()
// 内容 HTML

interface IProps {
  valueHtml: string
}
// 默认值
const props = withDefaults(defineProps<IProps>(), {
  valueHtml: '<p>hello</p>'
})

// 使用 computed 包装 props.valueHtml 以保持响应性
const valueHtml = computed({
  get: () => props.valueHtml,
  set: (value) => emit('update:valueHtml', value)
})
// 0.内定自定义事件
const emit = defineEmits(['update:valueHtml'])

// 模拟 ajax 异步获取内容
onMounted(() => {
  createWangEditor()
})
const editor = editorRef.value // 获取 editor ，必须等待它渲染完之后

const createWangEditor = () => {}
const setEditorConfig = () => {
  if (editor == null) return

  // 配置触发 onchange 的时间频率，默认为 200ms
  editor.config.onchangeTimeout = 500 // 修改为 500ms
  // 配置菜单栏，删减菜单，调整顺序
  editor.config.menus = [
    'head',
    'bold',
    'fontSize',
    'fontName',
    'italic',
    'underline',
    'strikeThrough',
    'indent',
    'lineHeight',
    'foreColor',
    'backColor',
    'link',
    'list',
    // 'todo',
    'justify',
    'quote',
    // 'emoticon',
    // 'image',
    // 'video',
    // 'table',
    'code',
    'splitLine',
    'undo',
    'redo'
  ]
}

const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor: any) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
const handleChange = (editor: any) => {}
const handleDestroyed = (editor: any) => {}
const handleFocus = (editor: any) => {}
const handleBlur = (editor: any) => {}
const customAlert = (info: any, type: any) => {
  alert(`【自定义提示】${type} - ${info}`)
}
const customPaste = (editor: any, event: any, callback: any) => {
  // const html = event.clipboardData.getData('text/html') // 获取粘贴的 html
  // const text = event.clipboardData.getData('text/plain') // 获取粘贴的纯文本
  // const rtf = event.clipboardData.getData('text/rtf') // 获取 rtf 数据（如从 word wsp 复制粘贴）

  // 自定义插入内容
  // editor.insertText('xxx')

  // 返回 false ，阻止默认粘贴行为
  // event.preventDefault()
  // callback(false) // 返回值（注意，vue 事件的返回值，不能用 return）

  // 返回 true ，继续默认的粘贴行为
  callback(true)
}
</script>

<style scoped lang="less"></style>
