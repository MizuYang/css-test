import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首頁'
    },
    component: () => import('@/App.vue')
  },
  {
    path: '/',
    name: 'css',
    meta: {
      title: 'CSS'
    },
    component: () => import('@/views/css/Index.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        meta: {
          title: 'CSS'
        },
        component: () => import('@/views/css/Index.vue')
      }
    ]
  },
  {
    path: '/',
    name: 'scss',
    meta: {
      title: 'SCSS'
    },
    component: () => import('@/views/scss/Index.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        meta: {
          title: 'CSS'
        },
        component: () => import('@/views/css/Index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.fullPath.match('/')) {
      return {
        top: 0 //* 切換頁面時會切換到最上面的位置
      }
    }
    return {}
  }
})
// 頁面跳轉時 更改網頁title
router.beforeEach((to, from, next) => {
  const { title } = to.meta
  document.title = title

  next()
})

export default router
