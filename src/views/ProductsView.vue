<template>

  <div>
    <ProductsList :products="products">
      
    </ProductsList>
    <MiniCarrito>
      
    </MiniCarrito>
  </div>

</template>

<script>
// @ is an alias to /src

import ProductsList from '../components/Products/ProductsList.vue';
import MiniCarrito from '@/components/Carritos/MiniCarrito.vue';
import {products} from '@/data/Products.js';

export default {
  name: "products",
  components: {
    ProductsList,
    MiniCarrito
},
  data: function () {
    return {
      products: products,
    };
  },
  computed: {
    operacion(suma) {
      this.precio = parseInt(this.precio) + parseInt(this.precio);
      console.log(this.suma);
    },
  },

  methods: {
    onNewItem(taskName) {
      console.log(`hemos recibido ${taskName}`);
      console.log(this.items);
      this.items.push({
        id: this.items.length,
        name: taskName,
        precio: {},
        checkout:true,
        completed: false,
      });
      console.log(this.items);
    },

    
    calculateTotals() {
      const total = this.items.reduce(
        (subtotal, item) => subtotal + item.unidades * item.precio,
        0
      );
      console.log(total);
      return total;
    },
    checkout(){
      
    }
    
  },

    
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #b9a142;
  
}
.data {
  background-color: blue;
}



.images{
  display: flex;
  padding: 40px;
  margin-left: 200px;
  flex-wrap: wrap;
}
.imagesd{
  display: flex;
  padding: 40px;
  margin-left: 200px;
  flex-wrap: wrap;
}
</style>
