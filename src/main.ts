import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
// 定义全局指令
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
