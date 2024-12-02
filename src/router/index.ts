import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import WebProfileBuilder from '@/views/WebProfileBuilder/SelectByName.vue'
import Pricing from '@/views/Pricing.vue'
import Customers from '@/views/Customers.vue'
import Templates from '@/views/Templates.vue'
import Integrations from '@/views/Integrations.vue'

const router = createRouter({
  history: createWebHistory('/sitebuilder/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/webprofilebuilder',
      name: 'Website Builder',
      component: WebProfileBuilder
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: Pricing
    },
    {
      path: '/customers',
      name: 'Customers',
      component: Customers
    },
    {
      path: '/templates',
      name: 'Templates',
      component: Templates
    },
    {
      path: '/integrations',
      name: 'Integrations',
      component: Integrations
    },
  ]
})

export default router