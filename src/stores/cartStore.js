import { defineStore } from "pinia";
import { ref } from "vue";
import { computed } from "vue";
import { useUserStore } from "./user";
import{insertCartAPI,findNewCartListAPI,deleteCartAPI} from "@/apis/cart"
export const useCartStore = defineStore('cart', () => {
  const userStore = useUserStore()
  //获取token
  const isLogin = computed(() => userStore.userInfo.token)
  const cartList = ref([])
    //获取最新的购物车列表
  const updateNewCartList = async () => {
   
      const res = await findNewCartListAPI()
      cartList.value = res.result
    
  }
  const addCart = async (goods) => {
    const {skuId,count} = goods
    if(isLogin.value){
      // 已登录，调用接口添加购物车
      console.log("调用接口添加购物车")
      await insertCartAPI(skuId,count)
      updateNewCartList()
    } else {
      // 没有登录，添加到本地购物车
          //已添加就加一，没有就push
    const item = cartList.value.find((item) => goods.skuId === item.skuId)
    if (item) {
      // 找到了
      item.count++
    } else {
      // 没找到
      cartList.value.push(goods)
    }
    console.log("添加购物车成功")
    }

  }
  const deleteCart = async (skuId) => {
    if(isLogin.value){
      // 已登录，调用接口删除购物车
      console.log("调用接口删除购物车")
      await deleteCartAPI([skuId])
      updateNewCartList()
    } else {
      // 没有登录，删除本地购物车
          const idx = cartList.value.findIndex((item) => item.skuId === skuId)
          cartList.value.splice(idx, 1)
    }

  }

//清除购物车
  // 计算数量和总价
  // 更健壮的版本
  const total = computed(() => {
    if (!cartList.value.length) return 0
    return cartList.value.reduce((a, item) => a + (item.count || 0), 0)
  })

  const totalPrice = computed(() => {
    if (!cartList.value.length) return 0
    return cartList.value.reduce((a, item) => a + (item.count || 0) * (item.price || 0), 0)
  })
  // 单选功能
  const singleCheck = (skuId, selected) => {
    //通过skuid找到要修改的一项，改变selected
    const item = cartList.value.find((item) => item.skuId === skuId)
    item.selected = selected
  }
  //是否全选
  const isall = computed(() => cartList.value.every((item) => item.selected))
  //全选功能
  const allCheck = (selected) => {
    // 把每一项的selected都改成selected
    cartList.value.forEach((item) => {
      item.selected = selected
    })
  }
  //已选数量
  const selectedTotal = computed(() => {
    return cartList.value.filter(item => item.selected).reduce((a, item) => a + (item.count || 0), 0)
  })
  //已选商品价格合计
  const selectedPrice = computed(() => {
    return cartList.value.filter(item => item.selected).reduce((a, item) => a + (item.count || 0) * (item.price || 0), 0)
  })
  return {
    cartList,
    addCart,
    deleteCart,
    total,
    totalPrice,
    singleCheck,
    isall,
    allCheck,
    selectedTotal,
    selectedPrice
  }

},
  {
    persist: true
  }
)