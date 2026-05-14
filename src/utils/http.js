//axios基础封装
import axios from 'axios'
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus';
import { useUserStore } from '@/stores/user'
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// 请求拦截器
httpInstance.interceptors.request.use(config => {
  //1.从pinia获取token数据
  const userStore = useUserStore()
  //2.按照后端的要求拼接token
  const token = userStore.userInfo.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
httpInstance.interceptors.response.use(response => {
  return response.data
}, error => {
  ElMessage({
    message: error.response.data.message,
    type: 'warning',
  });
  return Promise.reject(error)
})
export default httpInstance