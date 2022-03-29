import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/AddCustomer',
    name: 'AddCustomer',
    component: () => import('../views/AddCustomer.vue')
  },
  {
    path: '/ViewCustomers',
    name: 'ViewCustomers',
    component: () => import('../views/ViewCustomers.vue')
  },
  {
    path: '/EditCustomer',
    name: 'EditCustomer',
    component: () => import('../views/EditCustomer.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
