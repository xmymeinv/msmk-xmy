import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component:() => import('../views/Home.vue'),
    // redirect:'/login',
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
    path: '/pass1',
    name: 'Pass1',
    component: () => import('../views/Pass1.vue')
  },
  {
    path: '/pass',
    name: 'Pass',
    component: () => import('../views/Pass.vue')
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
    path: '/login1',
    name: 'Login1',
    component: () => import('../views/Login1.vue')
  },
 
]

const router = new VueRouter({
  routes
})

export default router
