import { defineStore } from "pinia";
import { loginAPI } from '@/apis/user'
import { ref } from "vue";
import { useCartStore } from "./cartStore";

export const useUserStore = defineStore('user', () => {
    const cartStore = useCartStore()
    //1.定义管理用户数据的state
    const userInfo = ref({})
    //2.定义修改用户数据的action
    const getUserInfo = async (account, password) => {
        const res = await loginAPI(account, password)
        userInfo.value = res.result
        //1.调用接口获取用户数据
        //2.将用户数据保存到userInfo中
    }
    //退出清除用户信息
    const clearUserInfo = () => {
        userInfo.value = {}
        //1.清除用户数据
        cartStore.clearCart()
    }
    //3.导出这个store供组件使用
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
}, {
    persist: true
})