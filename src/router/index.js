import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import aboutView from '../views/AboutView.vue'
import menu from '../views/menu.vue'
import gallery from '../views/gallary.vue'
import review from '../views/reviw.vue'
import blogs from '../views/blogs.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component: aboutView,
  },

  {
    path:'/menu',
    name:'menu',
    component:menu,
  },
  {
    path:'/gallery',
    name:'gallery',
    component: gallery,
  },
  {
    path:'/review',
    name:'review',
    component: review,
  },
  {
    path:'/blogs',
    name:'blogs',
    component: blogs,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
