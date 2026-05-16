import { defineStore } from "pinia";
import { ref } from "vue";
import { computed } from "vue";
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
  return {
    cartList,
    addCart,
    deleteCart,
    total,
    totalPrice,
    singleCheck
  }

},
  {
    persist: true
  }
)