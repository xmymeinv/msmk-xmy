import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component:() => import('../views/Home.vue'),
    // redirect:'/login'
    children:[
      {
        path: '/sy',
        name: 'Sy',
        component: () => import('../views/Sy.vue')
      },
      {
        path: '/kc',
        name: 'Kc',
        component: () => import('../views/Kc.vue')
      },
      {
        path: '/zx',
        name: 'Zx',
        component: () => import('../views/Zx.vue')
      },
      {
        path: '/ts',
        name: 'Ts',
        component: () => import('../views/Ts.vue')
      },
      {
        path: '/my',
        name: 'My',
        component: () => import('../views/My.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/pass',
    name: 'Pass',
    component: () => import('../views/Pass.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
