import type { RouteRecordRaw } from 'vue-router'

// 加载本地路由
function loadLocalRouter() {
  // 2.动态获取所有的路由对象，放到数组 （路由对象都在独立的文件中，从文件中将所以路由对象读取到数组中）
  // 3.根据菜单匹配正确的路由 （router.addRouter('main',xxx)）
  const localRouter: RouteRecordRaw[] = []
  // 1.1.读取router/main所有的ts文件,import是懒加载（异步），拿到的对象里面的值是函数，我们需要直接拿到文件结果，加上{eager：true} 渴望直接拿到结果
  // 指定类型鼠标移动到files上可以看到类型，修改泛型unknown
  const files: Record<string, any> = import.meta.glob('../router/main/**/*.ts', {
    eager: true
  })
  // 2.1放到数组
  for (const key in files) {
    // 拿到每个模块
    const module = files[key]
    // 我们是通过module default导出的，所以在default里面
    localRouter.push(module.default)
  }

  return localRouter
}

// 获取菜单匹配路由对象并返回
// 用来保存动态路由第一个页面
export let firstMenu: any = null
export function mapMenusToRoutes(userMenus: any[]) {
  // 1.加载本地路由
  const localRouter = loadLocalRouter()

  // 3.1根据菜单匹配路由（遍历菜单）
  const routes: RouteRecordRaw[] = []
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      // 如果在路由中找到菜单的路径,就把它加到数组里面
      const route = localRouter.find((item) => item.path === submenu.url)
      if (route) {
        // 1.给route的顶层菜单加一个重定向功能（但是只需要添加一次即可）（在点击面包屑的第一个标签时，跳转到匹配到的该菜单的第一个子菜单）
        if (!routes.find((item) => item.path === menu.url)) {
          routes.push({ path: menu.url, redirect: route.path })
        }

        // 2.二级菜单对应的路由
        routes.push(route)
      }
      // 没有保存第一个路由并且有route (记录第一个配匹配到的菜单)
      if (!firstMenu && route) firstMenu = submenu
    }
  }
  return routes
}

// 路由路径匹配菜单方法
export function mapPathToMenu(path: string, userMenus: any[]) {
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      if (submenu.url === path) {
        return submenu
      }
    }
  }
}

// 面包屑 （路径匹配菜单）
interface IBreadcrumbs {
  name: string
  path: string
}
export function mapPathToBteadcrumbs(path: string, userMenus: any[]) {
  // 1.定义面包屑
  const breadcrumbs: IBreadcrumbs[] = []

  // 2.获取面包屑的层级
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      if (submenu.url === path) {
        // 1.顶层菜单
        breadcrumbs.push({ name: menu.name, path: menu.url })
        // 2.匹配菜单
        breadcrumbs.push({ name: submenu.name, path: submenu.url })
      }
    }
  }
  return breadcrumbs
}
