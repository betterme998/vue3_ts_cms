import { BASE_URL, TIME_OUT } from './config'
import HYRequest from './request'
import { localCache } from '@/utils/cache'
import { LOGIN_TOKEN } from '@/global/constants'

// 传入配置对象config
const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // 封装的拦截
  interceptors: {
    requestFailureFn: (config) => {
      const token = localCache.getCache(LOGIN_TOKEN)
      // headers有值并且token有值
      if (config.headers && token) {
        //类型缩小
        // 所有请求只要满足条件，每个请求都会帮我们携带headers里面授权的token
        config.headers.Authorization = 'Bearer ' + token
      }
      return config
    }
  }
})

// 响应拦截会生效
export const hyRequest2 = new HYRequest({
  // 因为HYRequest 参数类型是AxiosRequestConfig，但是我们需要传入拦截器
  // 所以提取声明，让它不新鲜，不会进行严格检测
  baseURL: 'http://152.136.185.210:4000',
  timeout: 8000,
  // 对拦截做精细控制：部分拦截 部分不拦截
  // 传入拦截器
  interceptors: {
    requestFailureFn: (config) => {
      return config
    },
    requestSuccessFn: (err) => {
      return err
    },
    responseSuccessFn: (res) => {
      return res
    },
    responseFailureFn: (err) => {
      return err
    }
  }
})

export default hyRequest
