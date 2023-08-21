/// <reference types="vite/client" />

// .vue文件类型声明
declare module '*.vue' {
  import { DefineComponent } from 'vue'

  const component: DefineComponent
  export default component
}
