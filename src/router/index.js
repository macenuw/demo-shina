import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../pages/Main.vue'
import Contacts from '../pages/ContactsPage.vue'
import Delivery from '../pages/Delivery.vue'
import CatalogTires from '../pages/CatalogTires.vue'
import CatalogWheels from '../pages/CatalogWheels.vue'
import ProductPage from '../pages/ProductPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/delivery',
    name: 'Delivery',
    component: Delivery
  },
  {
    path: '/catalog-tires',
    name: 'CatalogTires',
    component: CatalogTires
  },
  {
    path: '/catalog-wheels',
    name: 'CatalogWheels',
    component: CatalogWheels
  },
  {
    path: '/product-page/:id',
    name: 'ProductPage',
    component: ProductPage
  },
  {
    path: '*',
    component: MainPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
