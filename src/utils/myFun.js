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

export default {
  getBaseApiUrl
}
