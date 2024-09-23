/**
 * 节流函数，限制函数执行频率
 *
 * @param fn 需要节流的函数
 * @param interval 节流时间间隔，单位毫秒，默认为10毫秒
 * @param options 配置项
 * @param options.leading 是否在节流开始时立即执行一次，默认为false
 * @param options.trailing 是否在节流结束时再执行一次，默认为false
 * @returns 返回节流后的函数
 */
export default function hythrottle<T extends (...args: any[]) => any>(
  fn: T,
  interval: number = 10,
  options: { leading?: boolean; trailing?: boolean } = {}
): T {
  let startTime = 0
  let timer: ReturnType<typeof setTimeout> | null = null

  const _throttle = function (this: any, ...args: Parameters<T>): Promise<ReturnType<T>> {
    return new Promise((resolve, reject) => {
      try {
        // 1. 获取当前时间
        const nowTime = new Date().getTime()

        // 对立即执行进行控制
        if (!options.leading && startTime === 0) {
          startTime = nowTime
        }

        // 2. 计算需要等待的时间执行函数
        const waitTime = interval - (nowTime - startTime)
        if (waitTime <= 0) {
          // 执行操作fn
          if (timer) clearTimeout(timer)
          // const res = fn(...args)
          const res = fn.apply(this, args)

          resolve(res)
          startTime = nowTime
          timer = null
          return
        }

        // 3. 判断是否要执行尾部
        if (options.trailing && !timer) {
          timer = setTimeout(() => {
            // 执行timer
            // const res = fn(...args)
            const res = fn.apply(this, args)
            resolve(res)
            startTime = new Date().getTime()
            timer = null
          }, waitTime)
        }
      } catch (error) {
        reject(error)
      }
    })
  }

  // 添加取消方法
  ;(_throttle as unknown as { cancel: () => void }).cancel = function () {
    if (timer) clearTimeout(timer)
    startTime = 0
    timer = null
  }

  return _throttle as unknown as T
}
