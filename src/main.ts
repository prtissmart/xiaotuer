import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
import { getCategory } from "@/apis/testAPI.js";
getCategory().then(res => {
    console.log("Category data:", res);
}).catch(err => {
    console.error("Error fetching category data:", err);
});
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
