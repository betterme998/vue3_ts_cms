import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局注册图标
import icons from './global/register-icons'

// 0针对element plus的反馈组件（不会自动引入）引入样式
// import 'element-plus/theme-chalk/el-message.css'

const app = createApp(App)
// 会自动传入app
app.use(icons)
app.use(store)
app.use(router)
app.mount('#app')
