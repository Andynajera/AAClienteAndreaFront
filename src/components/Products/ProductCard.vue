<template>
  <div>

      <img  src ="../../assets/tomate.jpg" style="width:200px">

    <p>{{product.name}}</p>
     <div>esto es el contador :    {{$store.state.counter}}</div>
    <button class="comprar" @click="$store.commit('increment')">comprar</button>
    <button class="detalles" @click="details">detalles</button>
   
    </div>
</template>

<script>

  export default {
    props: ["product"],
    methods:{
      details(){
        
        this.$router.push('/product/id')
        
      },
      comprar(){
       /* this.$router.push('/carrito')*/

      }
      
    }
    
   
  
    

}
</script>

<style>
.lista{
  display: flex;
  padding: 40px;
  margin-left: 100px;
  flex-wrap: wrap;
  
  

}

</style>