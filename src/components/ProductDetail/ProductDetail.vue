<template>
  <div class="card col-2 m-2 p-0">
    <img class="card-img-top" src="http://via.placeholder.com/286x180" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{product.name}}</h5>
      <p class="card-text">{{product.description}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductDetail',
    created () {
      this.$store.dispatch('getProduct', $route.param.id)
    },
    watch: {
      '$route': 'fetchData'
    },
    computed: {
      products () {
        return this.$store.getters.product
      }
    }
  }
</script>
<style scoped src="./ProductDetail.css"></style>
