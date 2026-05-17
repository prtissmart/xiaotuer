//axios基础封装
import axios from 'axios'
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus';
import { useUserStore } from '@/stores/user'
import router from '@/router';
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 100000
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
  const userStore = useUserStore()
  ElMessage({
    message: error.response.data.message,
    type: 'warning',
  });
  //401
  //1.清楚本地用户数据
  if (error.response.status === 401) {

    userStore.clearUserInfo()
    //2.跳转登录页
    router.push('/login')
  }

  return Promise.reject(error)
})
export default httpInstance