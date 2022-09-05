<template>
  <div id="app">
    <nav>
      <router-link  to="/">Listado de Productos</router-link> |
      <!--<router-link to="/producto">Productos  </router-link> |-->
      <router-link to="/carrito">Carrito</router-link>
      <!--<router-link to="/details">Details</router-link>-->
      <!--<router-link to="/checkout">CHeckout</router-link>-->
    </nav>
    <router-view/>
    
    
  </div>
</template>

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
  color: red;
 
}