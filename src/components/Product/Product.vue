<template>
  <div class="card col-2 m-2 p-0">
    <img class="card-img-top" src="http://via.placeholder.com/286x180" alt="Card image cap">
    <div class="card-body">
      <router-link :to="'/product/' + product.ref"><h5 class="card-title">{{product.name}}</h5></router-link>
      <p class="card-text">{{product.description}}</p>
    </div>
  </div>
</template>

<script src="./Product.js"></script>
<style scoped src="./Product.css"></style>
