<template>
  <div>
    <input
    type="text"
    placeholder="introduzca un producto"
    v-model="taskName"/>
    <button @click="onNewItem">+</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            taskName:''
        }
    },
    methods:{
        onNewItem(){
            console.log(`vamos a emitir: ${this.taskName}`)
            this.$emit('new',this.taskName)
            this.taskName=''
        }
    }
}
</script>

<style>

</style>