import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WebProfileBuilder from '@/views/WebProfileBuilder.vue'
import BlogsView from '@/views/BlogsView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: './',
      name: 'home',
      component: HomeView
    },
    {
      path: './WebProfileBuilder',
      name: 'Website Builder',
      component: WebProfileBuilder
    },
  ]
})

export default router