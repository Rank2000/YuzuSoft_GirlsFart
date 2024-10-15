import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/login', component: () => import('@/views/login/LoginPage.vue') },
    {
      path: '/',
      redirect: '/yuzusoft/welcome',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      children: [
        {
          path: '/yuzusoft/welcome',
          component: () => import('@/views/welcome/WelcomePage.vue')
        },
        {
          path: '/yuzusoft/story',
          component: () => import('@/views/story/StoryPage.vue')
        },
        {
          path: '/yuzusoft/analyse',
          component: () => import('@/views/analyse/AnalysePage.vue')
        }
      ]
    }
  ]
})

export default router
