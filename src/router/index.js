import axios from 'axios'
import { createRouter, createWebHistory } from 'vue-router'
// import { token } from '@/config'

// 获取各个路由模块
const routerContext = require.context('./modules', true, /\.js$/)
const routeList = routerContext.keys().reduce((prev, next) => {
  prev = [...prev, ...(routerContext(next).default || routerContext(next))]
  return prev
}, [])
const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/home',
  },
  ...routeList,
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound'),
  },
]

// 配置路由
const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (axios.defaultSource) {
    axios.defaultSource.cancel('路由切换，取消请求')
  }
  // 刷新 defaultSource
  axios.defaultSource = axios.CancelToken.source()
  // 业务逻辑
  // if (to.path !== '/login' && !token) return next('/login')
  next()
})

export default router
