import axios from 'axios'

export default {
  getProducts({ commit }) {
    axios.get('/products').then((response) => {
      commit('setProducts',response.data)
    })
  }
}
