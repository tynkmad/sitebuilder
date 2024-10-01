import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WebProfileBuilder from '@/views/WebProfileBuilder.vue'
import Pricing from '@/views/Pricing.vue'
import Customers from '@/views/Customers.vue'
import Templates from '@/views/Templates.vue'
import Integrations from '@/views/Integrations.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/WebProfileBuilder',
      name: 'Website Builder',
      component: WebProfileBuilder
    },
    {
      path: '/Pricing',
      name: 'Pricing',
      component: Pricing
    },
    {
      path: '/Customers',
      name: 'Customers',
      component: Customers
    },
    {
      path: '/Templates',
      name: 'Templates',
      component: Templates
    },
    {
      path: '/Integrations',
      name: 'Integrations',
      component: Integrations
    },
  ]
})

export default router