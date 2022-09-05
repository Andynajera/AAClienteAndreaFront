<template>
  <div id="carrito">
    <h1>Todo list</h1>
    <NewItem @new="onNewItem"></NewItem>

    <ProductsItem
      @todoremoved="onToDoRemoved"
      v-for="item in items"
      :key="item.id"
      :item="item"
    >
    </ProductsItem>
    <div class="total">TOTAL {{ calculateTotals() }}</div>

    <Operations
      :items="items"
      @remove-completed="onRemoveCompleted"
    ></Operations>
  </div>
</template>

<script>

import ProductsItem from "@/components/Carritos/CarritoItem.vue";
import NewItem from "@/components/Carritos/NewItem.vue";
import Operations from "@/components/Carritos/Operations.vue";

export default {
  name: "carrito",
  components: {
    ProductsItem,
    NewItem,
    Operations,
  },
  data: function () {
    return {
      items: [
        { id: 0, name: "Product1", unidades: 2, precio: 24, completed: false },
        { id: 1, name: "Product2", unidades: 2, precio: 23, completed: true },
        { id: 2, name: "Product3", unidades: 4, precio: 23, completed: true },
        { id: 3, name: "Product4", unidades: 2, precio: 23, completed: true },
      ],
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
        unidades: {},
        precio: {},
        completed: false,
      });
      console.log(this.items);
    },


    onRemoveCompleted() {
      this.items = this.items.filter((item) => !item.completed);
    },
    onToDoRemoved(itemToRemove) {
      console.log(`hemos recibido un item ${itemToRemove.id}`);
      this.items = this.items.filter((item) => item.id != itemToRemove.id);
    },
    calculateTotals() {
      const total = this.items.reduce(
        (subtotal, item) => subtotal + item.unidades * item.precio,
        0
      );
      console.log(total);
      return total;
    },
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
</style>
