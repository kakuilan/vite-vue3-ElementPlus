import lscache from 'lscache'
import { ElLoading } from 'element-plus'

// 设置lscache缓存时间以秒计,并自动清除过期的缓存
lscache.setExpiryMilliseconds(1000)
lscache.flushExpired()

/**
 * 获取接口基本地址
 */
function getBaseApiUrl() {
  let res = ''
  // eslint-disable-next-line no-undef
  if (typeof GLOBAL_API_URL !== undefined && GLOBAL_API_URL !== '') {
    // eslint-disable-next-line no-undef
    res = GLOBAL_API_URL
  } else {
    res = import.meta.env.VITE_API_URL
  }

  return res
}

/**
 * 获取lscache对象
 * @returns lscache
 */
function getCache() {
  return lscache
}

// loading显示
function Loading() {
  return ElLoading.service({
    lock: false,
    text: '加载中···',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}

// 防抖(防止重复提交)
const debounce = (function () {
  let timer = 0
  return function (callback, ms) {
    clearTimeout(timer)
    timer = setTimeout(callback, ms)
  }
})()

export default {
  getBaseApiUrl,
  getCache,
  Loading,
  debounce
}
