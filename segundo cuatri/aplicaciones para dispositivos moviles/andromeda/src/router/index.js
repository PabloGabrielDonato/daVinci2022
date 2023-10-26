import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'tienda',
    component: () => import('../views/Tienda.vue')
  },  
  {
    path: '/nosotros',
    name: 'nosotros',
    component: () => import('../views/Nosotros.vue')
  },
  {
    path: '/carrito',
    name: 'carrito',
    component: () => import('../views/Carrito.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('../views/Contacto.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
