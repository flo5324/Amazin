<!--suppress ALL -->
<template>
  <div id="app">
    <app-header/>
    <h1>{{ msg }}</h1>
    <div class="col-8 offset-md-3">
      <div class="row">
        <app-product v-for="product in products" :key="product.ref" :product="product"/>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'app',
    data () {
      return {
        msg: 'My amazin marketplace!',
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

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
