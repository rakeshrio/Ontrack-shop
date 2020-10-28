import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home'
import models from '../components/models'
import cart from '../components/cart'
import display from '../components/display'
import checkout from '../components/checkout'

Vue.use(VueRouter)

const routes = [

  {path:'/models', component:models},
  {path:'/cart', component:cart},
  {path:'/display', component:display},
  {path:'/', component:home},
  {path:'/checkout', component:checkout},
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
