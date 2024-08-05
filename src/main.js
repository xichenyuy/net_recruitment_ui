import './assets/main.css'
import Header from './components/Header.vue'
import Bottom from './components/Bottom.vue'
import beside from './components/beside.vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//引入路由器
const app = createApp(App)
// 创建一个Vue 应用
app.use(router)
//为网页安装路由器
app.component('header', Header);
app.component('bottom', Bottom);
app.component('beside',beside);
app.mount('#app')

