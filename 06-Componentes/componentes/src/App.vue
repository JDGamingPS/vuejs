<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
   
    <h2>Ecosystem</h2>

    <App-saludar></App-saludar>


    <!-- <App-saludar></App-saludar>
    <App-saludar></App-saludar> -->
    <hr>

      <center>
        <!-- :nombre hace un filtrado de tipo numerico, pero sin los : hace referencai a los string o numeros -->
        <App-datosUsuario :nombre="1231" ciudad="Bogota" correo="example@gmail.com" ></App-datosUsuario><hr>
        <App-datosUsuario :nombre="153"  correo="example@gmail.com"></App-datosUsuario><hr>
        <App-datosUsuario :nombre="4654" ciudad="Bogota" correo="example@gmail.com"></App-datosUsuario>
      </center>

    <enviar inline-template>
      <h1>
        template-lineal
        <br>
        <button>enviar</button>
      </h1>
      
    </enviar>
 
  </div>
</template>

<script>
  /* import saludar from './componentes/saludar.vue'; */

import mensajeSaludar from './componentes/mensajeSaludar.vue';
export default {
  name: 'app',
  components: {
    'App-saludar': mensajeSaludar,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
