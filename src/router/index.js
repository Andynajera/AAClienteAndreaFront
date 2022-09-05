import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'products-list',
    component: () => import('../views/ProductsView.vue'),
  },

  

  {
    path: '/product/:id',
    name: 'product-details',
    component: () => import('../views/ProductView.vue'),
  },
  {
    path: '/carrito',
    name: 'carrito',
    component: () => import('../views/CarritoView.vue'),
  },
  {
    path: '/details',
    name: 'details',
    component: () => import('../views/DetailsView.vue'),
  },
  {
    path: '/checkout',
    name: 'chekout',
    component: () => import('../views/CheckOutView.vue'),
  },


 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
