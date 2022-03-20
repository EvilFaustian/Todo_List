import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LandingPage from '../components/pages/LandingPage'
import Archivio from '../components/pages/MyArchivio'
import Login from '../components/pages/MyLogin'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated == false) {
        next("/login")
      } else {
        next();
      }
    }
  },
  {
    path: '/landingpage',
    name: 'landingpage',
    component: LandingPage
  },
  {
    path: '/archivio',
    name: 'archivio',
    component: Archivio,
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated == false) {
        next("/login")
      } else {
        next();
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/about',
    redirect: {
      name: "login"
  },
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
