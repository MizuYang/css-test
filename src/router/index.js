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
    path: '/css',
    name: 'css',
    meta: {
      title: 'CSS',
      isFinite: true
    },
    component: () => import('@/views/css/Index.vue'),
    children: [
      {
        path: 'flex',
        name: 'flex',
        meta: {
          name: 'flex',
          title: 'CSS-Flex'
        },
        component: () => import('@/views/css/items/Flex.vue')
      },
      {
        path: 'pseudoClasses',
        name: '偽類',
        meta: {
          name: 'pseudoClasses',
          title: 'CSS-偽類'
        },
        component: () => import('@/views/css/items/PseudoClasses.vue')
      },
      {
        path: 'pseudoElements',
        name: '偽元素',
        meta: {
          name: 'pseudoElements',
          title: 'CSS-偽元素'
        },
        component: () => import('@/views/css/items/PseudoElements.vue')
      }
    ]
  },
  {
    path: '/scss',
    name: 'scss',
    meta: {
      title: 'SCSS'
    },
    component: () => import('@/views/scss/Index.vue')
    // children: [
    //   {
    //     path: '/',
    //     name: 'home',
    //     meta: {
    //       title: 'CSS'
    //     },
    //     component: () => import('@/views/css/Index.vue')
    //   }
    // ]
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
