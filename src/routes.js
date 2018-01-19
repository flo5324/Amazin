import Product from './components/Product/Product.vue'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail/ProductDetail'

export default [
  {path: '/', component: Products},
  {path: '/product', component: Products},
  {path: '/product/:id', component: ProductDetail}
]

