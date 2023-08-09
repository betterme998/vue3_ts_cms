import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  // 哈希
  history: createWebHashHistory(),
  // 映射关系：path => component
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import('../views/login/login.vue')
    },
    {
      path: '/main',
      component: () => import('../views/main/main.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/not-found/notFound.vue')
    }
  ]
})

export default router
