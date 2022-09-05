<template>
  <div>
    <p class="text">El tomate es uno de los alimentos más consumidos en nuestro país pero ¿realmente conoces todos sus beneficios y características? Descubre todo acerca de los tomates en este interesante artículo.

Seguro que, cuando piensas en el tomate, te imaginas una ensalada, un sofrito, un buen zumo o una deliciosa sopa. Se ha convertido en un alimento imprescindible para cualquier dieta mediterránea que se precie.

Para darte un ejemplo, ¿has probado la sopa de tomate alguna vez? Si es así ¿te gusta su sabor?. De tan solo pensarlo, se te hace la boca agua, ¿verdad? Y es que, en realidad, no es de extrañar, teniendo en cuenta todos los beneficios y el placer gustativo que te puede dar.</p>
  <img  src ="../../assets/tomate.jpg" style="width:200px">
</div>
  

  
</template>

<script>

   
import ProductCard from './ProductCard.vue';
export default {
  components: {ProductCard },
  props: ["details"],

    
}
</script>

<style>
.text{
  display: block;
  margin-left: 300px;
  margin-right: 300px;
}
</style>