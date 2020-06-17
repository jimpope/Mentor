import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Pending from '../views/Pending.vue'
import Settings from '../views/Settings.vue'
import App from '../views/App.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/pending',
    name: 'Pending',
    component: Pending
  },
  {
    path: '/app/:id',
    name: 'app',
    props: true,
    component: App
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
