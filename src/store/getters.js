export default {
  products (state) {
    return state.products
  },
  product (state, id) {
    return state.products.find((p) => {
      return p.id === id
    })
  }
}
