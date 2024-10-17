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
          component: () => import('@/views/analyse/AnalysePage.vue'),
          redirect: '/yuzusoft/analyse/allGirls',
          children: [
            {
              path: '/yuzusoft/analyse/allGirls',
              component: () => import('@/views/analyse/AnalyseAllGirls.vue')
            },
            {
              path: '/yuzusoft/analyse/fartCount',
              component: () => import('@/views/analyse/AnalyseFartCount.vue')
            },
            {
              path: '/yuzusoft/analyse/fartSmell',
              component: () => import('@/views/analyse/AnalyseFartSmell.vue')
            },
            {
              path: '/yuzusoft/analyse/poop',
              component: () => import('@/views/analyse/AnalysePoop.vue')
            }
          ]
        },
        {
          path: '/yuzusoft/user',
          component: () => import('@/views/user/UserProfile.vue')
        }
      ]
    }
  ]
})

export default router
