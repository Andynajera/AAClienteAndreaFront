<template>

  <div>
    <ul>
      <li v-for="item in cartItems" :key="item.productId">
        {{item.productId}}

      </li>
    </ul>
    
  </div>

</template>

<script>
  
import {cartItems} from "@/data/cart.js"

export default {
  data (){
    return{
      cartItems:cartItems
    }
  }
  ,

  methods: {


    calculateTotal(){

      return this.item.unidades*this.item.precio
    },
    checkout(){

    }
    

  },
};
</script>

<style>

.minicar{
  width: 100%;
  height: 100%;
  margin-left: 200px;


}
.products {
  width: 70px;
  height: 20px;
  margin-left: 900px;
  margin-top: 13px;

 

}


.prices {
  width: 70px;
  height: 20px;
  margin-left: 1100px;
  margin-top: 15px;

}
.checkout{
  width: 90px;
  height: 30px;
  margin-left: 850px;
  margin-top: -0px;
  padding: 2px;
  
}
.totals{
  margin-left: 820px;
  margin-top: 30px;
}



</style>