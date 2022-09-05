<template>
  <div>
    <div>
       {{taskCompleted}} of  {{items.lenght}} task done
    </div>
    <button class="checkout"  @click="checkout">checkout</button>
  </div>
</template>

<script>
export default {
   props:['items'],
   computed:{
    taskCompleted(){
      return this.items.filter(item =>item.completed).lenght
    }
   },

    methods:{
      checkout(){
        this.$emit('checkoutCompleted')
      },
      checkout(){
        this.$router.push('/checkout')

      }
    }
    }
   
  

</script>

<style>

</style>