// 区分开发环境和生产环境各种方法
// export const BASE_URL = 'http://codercba.com:8000'
// export const TIME_OUT = 10000

// 2.代码逻辑判断，当前环境
// vite默认提供的环境变量
/*
Vite在一个特殊的import.meta.env对象上暴露环境变量。这里有一些在所有情况下都可以使用的内建变量
import.meta.env.MODE:{string}应用运行的模式
import.meta.env.PROD:{boolean}应用是否运行在生产环境
import.meta.env.DEV:{boolean}应用是否运行在开发环境（永远于import.meta.env.PROD相反）
import.meta.env.SSR:{boolean}应用是否运行在server上
*/
export const BASE_URL = import.meta.env.BASE_URL
export const TIME_OUT = 1000

// 3.通过创建.env文件直接创建变量
