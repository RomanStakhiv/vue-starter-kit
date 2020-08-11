import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    meta: {
      requiresAuth: true,
    },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
  },
  {
    path: '/:id',
    name: 'Card',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/Card.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters['user/getUser']) {
    next('login')
  } else if (to.name === 'Login' && store.getters['user/getUser']) {
    next('dashboard')
  } else {
    next()
  }
})

export default router
