import { defineStore } from "pinia";
import {loginAPI} from '@/apis/user'
import { ref } from "vue";

export const useUserStore = defineStore('user', () => {
    //1.定义管理用户数据的state
    const userInfo = ref({})
    //2.定义修改用户数据的action
    const getUserInfo = async(account,password) => {
        const res = await loginAPI(account,password)
        userInfo.value = res.result
        //1.调用接口获取用户数据
        //2.将用户数据保存到userInfo中
    }
    //3.导出这个store供组件使用
    return {
        userInfo,
        getUserInfo
    }
},{
    persist: true
})