import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
// 使用第三方库转换时间
dayjs.extend(utc)
export function formatUTC(utcString: string, format: string = 'YYYY-MM-DD HH:mm:ss') {
  const resultTime = dayjs.utc(utcString).utcOffset(8).format(format)
  return resultTime
}
