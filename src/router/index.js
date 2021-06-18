import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Building from '../components/Building';

Vue.use(VueRouter)

// todo ==> edit company route
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/companies',
    name: 'Companies',
    component: () => import(/* webpackChunkName: "companies" */ '../views/Companies.vue')
  },
  {
    path: '/company/:name',
    name: 'Company',
    component: Company
  },
  {
    path: '/buildings',
    name: 'Buildings',
    component: () => import(/* webpackChunkName: "buildings" */ '../views/Buildings.vue')
  },
  {
    path: '/building/:name',
    name: 'Building',
    component: Building
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
