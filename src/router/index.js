import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/',
      name: 'home',
      redirect: '/article/manage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Layout.vue'),
      children:[
        { 
            path: '/user/info',
            component: () => import('../views/user/UserInfo.vue')
        },
        {
            path: '/user/avatar', 
            component: () => import('../views/user/UserAvatar.vue')
        },
        { 
            path: '/user/resetPassword',
            component: () => import('../views/user/UserResetPassword.vue')
        },
        {
            path: '/article/category', component: () => import ('../views/article/ArticleCategory.vue')
        },
        {
            path: '/article/manage', component: () => import ('../views/article/ArticleManage.vue')
        }
      ]
    }
  ]
})

export default router
