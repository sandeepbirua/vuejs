import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import Dashboard from '../pages/Dashboard.vue'
import Users from '../pages/Users.vue'
import Reports from '../pages/Reports.vue'
import Settings from '../pages/Settings.vue'
import Profile from '../pages/Profile.vue'

// Route tree:
// '/' loads MainLayout, then child routes render inside MainLayout's <router-view />.
const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', name: 'dashboard', component: Dashboard },
      { path: 'users', name: 'users', component: Users },
      { path: 'reports', name: 'reports', component: Reports },
      { path: 'settings', name: 'settings', component: Settings },
      { path: 'profile', name: 'profile', component: Profile }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
