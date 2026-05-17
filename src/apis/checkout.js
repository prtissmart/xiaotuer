import  httpInstance  from "@/utils/http";
//获取详情接口
export const getCheckInfoAPI = ()=>{
    return httpInstance({
        url:'member/order/pre'
    })
}

//提交订单接口
export const createOrderAPI = (data)=>{
    return httpInstance({
        url:'member/order',
        method:'POST',
        data
    })
}