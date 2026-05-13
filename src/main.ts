import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
import { lazyPlugin } from "@/directives/index";
import { componentPlugin } from "@/components/index"
// 定义懒加载插件 

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')


