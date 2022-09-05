<template>
    <div>
      <h1>Detalles del producto</h1>

      <ProductDetails :details="details">
      
    </ProductDetails>
    </div>
  </template>
  
  <script>
import ProductDetails from "../components/Products/ProductDetails.vue";
import {details} from '@/data/details'
export default {
  name: "details",
  components: {
    ProductDetails,
},
  props: ["details"]
  
}


  </script>
  
  <style>
    
  </style>