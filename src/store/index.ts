import { createPinia } from 'pinia'
import type { App } from 'vue'
import useLoginStore from './login/login'
import { localCache } from '@/utils/cache'

// 创建pinia
const pinia = createPinia()

function registerStore(app: App<Element>) {
  // 1.use的pinia
  app.use(pinia)
  // 2.加载本地的数据
  const loginStore = useLoginStore()
  const locality = localCache.getCache('locality')
  if (locality) {
    loginStore.loadLocalCacheAction2()
  } else {
    loginStore.loadLocalCacheAction()
  }
}

export default registerStore
