<template>
  <div class="container-fluid">
    <div class="row">
      <app-product v-for="product in products" :key="product.ref" :product="product"/>
    </div>
  </div>
</template>

<script>
  import Product from './Product/Product'

  export default {
    name: 'products',
    components:{
      appProduct:Product
    },
    created(){
      this.$store.dispatch('getProducts');
    },
    computed: {
      products(){
        return this.$store.getters.products;
      }
    }
  }
</script>

<style scoped>

</style>
