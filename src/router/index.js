import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Building from '../components/Building'
import Company from '../components/Company'
import Companies from '../views/Companies'
import Buildings from '../views/Buildings'

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
    component: Companies
  },
  {
    path: '/company/:name',
    name: 'Company',
    component: Company
  },
  {
    path: '/buildings',
    name: 'Buildings',
    component: Buildings
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
