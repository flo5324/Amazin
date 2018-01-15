<template>
  <nav class="categories col-2 sidebar" id="sidebar-wrapper" role="navigation">
    <ul class="nav nav-pills flex-column">
      <li class="nav-item">
        <a class="nav-link active" href="#">Toutes les catégories <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item" v-for="category in categories" :key="category.name">
        <a class="nav-link" href="#">{{category.name}}</a>
        <ul class="flex-column">
          <li class="nav-item" v-for="subcategory in category.subCategories" :key="subcategory.name">
            <a class="nav-link" href="#">{{subcategory.name}}</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'nav-categories',
    data () {
      return {
        categories: []
      }
    },
    created: function () {
      this.getCategories()
    },
    methods: {
      getCategories: function () {
        axios.get('/categories').then((response) => {
          this.categories = response.data
          console.log(this)
        })
      }
    }
  }
</script>

<style scoped>

</style>
