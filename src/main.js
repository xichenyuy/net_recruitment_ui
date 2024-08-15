import './assets/main.scss'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from '@/router'
import { createPinia } from 'pinia';    //用于不同vue文件的状态、数据交互


import App from './App.vue'


const app = createApp(App)

app.use(ElementPlus)
app.use(router)
const pinia = createPinia();
app.use(pinia)

app.mount('#app')

