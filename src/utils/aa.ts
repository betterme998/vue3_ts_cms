export default function hythrottle<T extends (...args: any[]) => any>(
  fn: T,
  interval: number = 10,
  { leading = true, trailing = false }: { leading?: boolean; trailing?: boolean } = {}
): T {
  let startTime = 0
  let timer: ReturnType<typeof setTimeout> | null = null

  const _throttle = function (...args: Parameters<T>): Promise<ReturnType<T>> {
    return new Promise((resolve, reject) => {
      try {
        // 1.获取当前时间
        const nowTime = new Date().getTime()

        // 对立即执行进行控制
        if (!leading && startTime === 0) {
          startTime = nowTime
        }
        // 2.计算需要等待的时间执行函数
        const waitTime = interval - (nowTime - startTime)
        if (waitTime <= 0) {
          // 执行操作fn
          if (timer) clearTimeout(timer)
          const res = fn.apply(this, args)
          resolve(res)
          startTime = nowTime
          timer = null
          return
        }
        // 3.判断是否要执行尾部
        if (trailing && !timer) {
          timer = setTimeout(() => {
            // 执行timer
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

  ;(_throttle as { cancel: () => void }).cancel = function () {
    if (timer) clearTimeout(timer)
    startTime = 0
    timer = null
  }

  return _throttle as T
}
