<template>
  <div class="col-8 offset-md-3">
    <div class="row">
      <app-product v-for="product in products" :key="product.ref" :product="product"/>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'products',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        products: []
      }
    },
    created: function () {
      this.getProducts()
    },
    methods: {
      getProducts: function () {
        axios.get('/products').then((response) => {
          this.products = response.data
          console.log(this)
        })
      }
    }
  }
</script>

<style scoped>

</style>
