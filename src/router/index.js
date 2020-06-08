import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import PendingTL from '../views/PendingTL.vue'
import PendingTS from '../views/PendingTL.vue'
import Settings from '../views/Settings.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/pendingTL',
    name: 'PendingTL',
    component: PendingTL
  },
  {
    path: '/pendingTS',
    name: 'PendingTS',
    component: PendingTS
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
