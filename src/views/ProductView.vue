<template>
  <div>
    <h1>Detalles del producto</h1>
    
    <ProductDetails> </ProductDetails>
    <p>{{product.name}}</p>

  </div>
</template>

<script>
import ProductDetails from "@/components/Products/ProductDetails.vue";
import {products} from "@/data/Products.js"
export default {
  components: { ProductDetails },
  computed: {

  },
  methods:{
  },
  data: function () {
    
    return {
      product: products.find(item=>item.id.toString()===this.$route.params.id),
    };
  },
};
</script>

<style>
  
</style>