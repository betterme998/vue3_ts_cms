import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'
import App from './App.vue'
import router from './router'
import pinia from './store'
// 全局注册图标
import registerIcons from './global/register-icons'

const app = createApp(App)
// 会自动传入app
app.use(registerIcons)
app.use(router)
app.use(pinia)
app.mount('#app')
