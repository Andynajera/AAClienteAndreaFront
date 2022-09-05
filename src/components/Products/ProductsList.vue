<template>

<div class="images">
  <h1 class="namelist">Lista de productos</h1>
  <ProductCard v-for="product in products" :key="product.id" :product="product">

  </ProductCard>
</div>

</template>

<script>
import ProductCard from './ProductCard.vue';
export default {
  components: {ProductCard },
  props: ["products"],

  methods: {
   
    unidades() {
      this.$emit("addunidades", this.item);
    },
    addUnidades(){

      this.item.unidades++
    },
    

  },
};
</script>

<style>
.unidades {
  width: 17px;
  margin-left: 100px;
  margin-top: -40px;
  padding: 9px;
  border: 1px solid black;
}

.images{
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
}
.namelist{
  margin-top: -50px;
  margin-left: 30px;
}
</style>
