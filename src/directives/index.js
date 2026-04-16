import { install } from "element-plus";
import { useIntersectionObserver } from '@vueuse/core'
//定义懒加载
export const  lazyPlugin = {
    install(app) {
        app.directive('img-lazy',{
            mounted(el, binding) {
                //el:指令绑定的元素，binding：一个对象，包含了指令相关的信息
                //bingding.value：指令的值，即图片的URL地址
                console.log(el, binding.value)
                const { stop } = useIntersectionObserver(
                  el,
                  ([{ isIntersecting }]) => {
                    console.log(isIntersecting)
                    if (isIntersecting) {
                      // 进入视口区域
                      el.src = binding.value
                      stop()
                    }
                  },
                )
            }
        
        })
    }
}