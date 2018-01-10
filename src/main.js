import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Header from './components/Header/Header.vue'
import Product from './components/Product/Product.vue'
import Products from './components/Products'

import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter);

Vue.component('app-header', Header)
Vue.component('app-product', Product)

const routes = [
  {path: '/product', component: Product},
  {path: '/', component: Products}
];
const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
