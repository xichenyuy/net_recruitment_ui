import './assets/main.scss'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'    //element的css
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from '@/router'
import { createPinia } from 'pinia';    //用于不同vue文件的状态、数据交互
import { createPersistedState } from 'pinia-persistedstate-plugin'  //pinia持久化插件 用于页面刷新之后不会清空token


import App from './App.vue'


const app = createApp(App)

app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router)
const pinia = createPinia();
const persist = createPersistedState();
pinia.use(persist)
app.use(pinia)



app.mount('#app')

