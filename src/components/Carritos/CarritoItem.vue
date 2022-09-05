<template>
  <div :class="{ completed: item.completed }">
    <div class="papelera">
      <button @click="toDoRemoved">
        <img src="../../assets/papelera.jpg" height="30" />
      </button>

      <div class="name">
        {{ item.name }}
      </div>
      <div class="unidades">
        {{ item.unidades }}
      </div>
      <div class="masmenos">
        <button @click="addUnidades">+</button>
        <button @click="deleteUnidades">-</button>
        <!--Botones con vuex que se incrementa o decrementa conjunto con carrito y lista de compra-->
        <button class="mas" @click="$store.commit('increment')">+</button>
        <button class="menos" @click="$store.commit('decrement')">-</button>

      </div>
      <div class="precio">{{ item.precio }}</div>
      <div class ="total">{{calculateTotal()}}</div>



      <div class ="totalvuex">unidadesVuex:    {{$store.state.counter}}</div>
      
    </div>

  </div>
</template>

<script>
export default {
  props: ["item"],

  methods: {
    toDoRemoved() {
      console.log(`vamos a eliminar el elemento ${this.item.id}`);
      this.$emit("todoremoved", this.item);
    },
    unidades() {
      this.$emit("addunidades", this.item);
    },
    addUnidades(){

      this.item.unidades++
    },
     deleteUnidades(){

      this.item.unidades--
    },

    calculateTotal(){
      return this.item.unidades*this.item.precio
      
    }
    

  },
};
</script>

<style>
.papelera {
  width: 20px;
  height: 20px;
  margin-left: 580px;
  margin-bottom: 40px;
  padding: 8px;
}
.name {
  width: 150px;
  margin-left: 90px;
  margin-top: -40px;
  padding: 10px;
  border: 1px solid black;
}
.unidades {
  width: 17px;
  margin-left: 290px;
  margin-top: -40px;
  padding: 9px;
  border: 1px solid black;
}
.masmenos {
  width: 20px;
  height: 20px;
  margin-left: 350px;
  margin-top: -50px;
  padding: 9px;
}
.precio {
  width: 20px;
  height: 20px;
  margin-left: 400px;
  margin-top: -25px;
  padding: 9px;
  border: 1px solid black;
}
.totalvuex{
  width: 20px;
  height: 20px;
  margin-left: 450px;
  margin-top: -70px;
  padding: 9px;
}
.mas{
  width: 20px;
  height: 20px;
  margin-left: 230px;
  margin-top: -100px;
  padding: 9px;

}
.menos{
  width: 20px;
  height: 20px;
  margin-left: 230px;
  margin-top: -200px;
  padding: 9px;
}
</style>