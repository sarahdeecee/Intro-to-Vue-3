const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
      addToCart(id) {
        this.cart.push(id)
      },
      removeFromCart(id) {
        const index = this.cart.findIndex(productId => productId == id)
        this.cart.splice(index, 1)
      }
    }
})
