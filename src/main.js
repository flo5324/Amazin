import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header/Header.vue'
import Product from './components/Product/Product.vue'
import 'bootstrap/dist/css/bootstrap.css'

Vue.component('app-header', Header)
Vue.component('app-product', Product)

new Vue({
  el: '#app',
  render: h => h(App)
})
