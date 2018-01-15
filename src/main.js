import Vue from 'vue'
import VueRouter from 'vue-router'
import { store } from './store/store'
import routes from './routes'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
