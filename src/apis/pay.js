import  httpInstance  from "@/utils/http";

// 获取订单列表接口
export const getOrderAPI=(id)=>{
    return httpInstance({
        url:`/member/order/${id}`
    })
}