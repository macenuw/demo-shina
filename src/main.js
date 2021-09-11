import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import terms from './assets/js/terms'

Vue.config.productionTip = false
Vue.prototype.$terms = terms

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
