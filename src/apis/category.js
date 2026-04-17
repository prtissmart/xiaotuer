import  httpInstance  from "@/utils/http";


export function getCategory(id) {
    return httpInstance({
        url: "/category",
        params:{
            id
        }
    })
}