import axios from 'axios'

// 创建axios服务
const service = axios.create({
  baseURL: 'http://114.55.249.153:8028', // 请求地址配置
  timeout: 5000 // 请求超时配置
})

export default service
