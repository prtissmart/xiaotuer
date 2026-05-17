//封装购物车相关接口
import  httpInstance  from "@/utils/http";


// 添加购物车接口
 export function insertCartAPI(skuId,count) {
    return httpInstance({
        url: "/member/cart",
        method:'POST',
        data:{
            skuId,
            count
        }
    })
}

// 获取购物车列表接口
export const findNewCartListAPI = () => {
    return httpInstance({
        url: "/member/cart"
    })
}

// 删除购物车接口
 export const deleteCartAPI = (ids) => {
    return httpInstance({
        url: "/member/cart",
        method:'DELETE',
        data:{
            ids
        }
    })
}