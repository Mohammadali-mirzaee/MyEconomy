import Vue from 'vue'
import VueRouter from 'vue-router'
import moment from 'moment'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Stocks from '../views/Stocks.vue'
import History from '../views/History.vue'
import Budgets from '../views/Budgets.vue'

Vue.prototype.moment = moment
Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/Stocks',
    name: 'Stocks',
    component: Stocks
  },
  {
    path: '/Budgets',
    name: 'Budgets',
    component: Budgets
  },
  {
    path: '/History',
    name: 'History',
    component: History
  }
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
]

const router = new VueRouter({
  routes
})

export default router
