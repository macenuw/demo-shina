import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../pages/Main.vue'
import Contacts from '../pages/Contacts.vue'
import Delivery from '../pages/Delivery.vue'
import Catalog from '../pages/Catalog.vue'
import ProductPage from '../pages/ProductPage.vue'
import RouterView from '../components/RouterView'

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
    path: '/catalog',
    name: 'Catalog',
    component: RouterView,
    redirect: { name: 'CatalogTires' },
    children: [
      {
        path: ':type(tires|wheels)/:id',
        name: 'Product',
        component: ProductPage
      },
      {
        path: 'tires',
        name: 'CatalogTires',
        component: Catalog,
        meta: { type: 'tires' }
      },
      {
        path: 'wheels',
        name: 'CatalogWheels',
        component: Catalog,
        meta: { type: 'wheels' }
      }
    ]
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
