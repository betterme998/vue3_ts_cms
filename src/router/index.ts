import { localCache } from '@/utils/cache'
import { createRouter, createWebHashHistory } from 'vue-router'
import { LOGIN_TOKEN } from '@/global/constants'

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
      component: () => import('../views/main/main.vue'),
      children: [
        {
          path: '/main/analysis/overview',
          component: () => import('../views/main/analysis/overview/overview.vue')
        },
        {
          path: '/main/analysis/dashboard',
          component: () => import('../views/main/analysis/dashboard/dashboard.vue')
        },
        {
          path: '/main/system/user',
          component: () => import('../views/main/system/user/user.vue')
        },
        {
          path: '/main/system/role',
          component: () => import('../views/main/system/role/role.vue')
        },
        // 111
        {
          path: '/main/system/department',
          component: () => import('../views/main/system/department/department.vue')
        },
        {
          path: '/main/system/menu',
          component: () => import('../views/main/system/menu/menu.vue')
        },
        {
          path: '/main/story/chat',
          component: () => import('../views/main/story/chat/chat.vue')
        },
        {
          path: '/main/story/list',
          component: () => import('../views/main/story/list/list.vue')
        },
        {
          path: '/main/product/category',
          component: () => import('../views/main/product/category/category.vue')
        },
        {
          path: '/main/product/goods',
          component: () => import('../views/main/product/goods/goods.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/not-found/notFound.vue')
    }
  ]
})

// 动态添加路由
// router.addRoute('main',localRouter[0])

// 导航守卫
// 参数：to(跳转到的位置)/from（从哪里跳转过来）
// 返回值：返回值决定导航的路径（不反回或返回undefined就默认跳转）
router.beforeEach((to, from) => {
  const token = localCache.getCache(LOGIN_TOKEN)
  if (to.path === '/main' && !token) {
    // 只有登录成功（token），才能进入到main页面
    return '/login'
  }
})

export default router
