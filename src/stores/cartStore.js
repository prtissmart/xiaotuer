import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore('cart', () => {
  const cartList = ref([])
  const addCart = (goods) => {
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
  const deleteCart = (skuId) => {
    const idx = cartList.value.findIndex((item) => item.skuId === skuId)
    cartList.value.splice(idx, 1)
  }
  return {
    cartList,
    addCart,
    deleteCart
  }

},
  {
    persist: true
  }
)