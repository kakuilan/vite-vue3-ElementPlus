import Qs from 'qs'
import axios from './axios'
import myFun from './myFun'
import { Kdatetime } from '@kakuilan/js-helper'

// 创建axios实例用于请求接口
// xhr,即为XMLHttpRequest请求对象
const xhr = axios.create({
  timeout: 5000,
  baseURL: myFun.getBaseApiUrl(),
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
})

// request拦截器
xhr.interceptors.request.use(
  (config) => {
    // 请求时间
    const t = Kdatetime.nowMilli()

    if (typeof config.params === 'object') {
      config.params['client_time'] = t
    } else {
      config.params = {
        client_time: t
      }
    }

    // 在请求之前对请求数据进行操作
    config.transformRequest = [
      (data) => {
        // data类型:string , Buffer, ArrayBuffer, FormData or Stream
        if (data instanceof FormData) {
          return data
        }

        data = Qs.stringify(data)
        return data
      }
    ]

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
