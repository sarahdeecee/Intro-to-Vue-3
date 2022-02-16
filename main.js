const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
<<<<<<< HEAD
            inventory: 0,
            onSale: true
=======
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              {id: 2234, color: 'green'},
              {id: 2235, color: 'blue'}
            ],
            sizes: ['small', 'medium', 'large']
>>>>>>> L5-start
        }
    }
})
