//和用户相关的函数
import httpInstance from "@/utils/http";

 export function loginAPI(account,password) {
    return httpInstance({
        url: "/login",
        method:'POST',
        data:{
            account,
            password
        }
    })
}