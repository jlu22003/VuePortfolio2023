import { createRouter, createWebHistory } from 'vue-router'
// import about from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/LandingView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('../views/SkillsView.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/portfolioView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contactView.vue')
    }
  ]
})

export default router
