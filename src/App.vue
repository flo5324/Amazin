<template>
  <div id="app">
    <app-header/>
    <h1>{{ msg }}</h1>
    <div class="d-flex flex-row align-items-stretch">
      <app-categories/>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header/Header.vue'
  import NavCategories from './components/NavCategories'

  export default {
    name: 'app',
    components:{
      appHeader: Header,
      appCategories: NavCategories
    },
    data () {
      return {
        msg:'My amazin marketplace !'
      }
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  h1, h2 {
    font-weight: normal;
  }
</style>
