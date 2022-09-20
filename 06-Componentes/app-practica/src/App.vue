<template>
  <div id="app">
    <!-- 
      header
      main
        img - imagenes[props] {global}
      footer
     -->
    <div class="container">
      <div class="row">
          <h1>hola</h1>
        
      </div>
  
      <div class="row">
        <h2> 
          hola dos
        </h2>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
</style>
