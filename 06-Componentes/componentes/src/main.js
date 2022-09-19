import Vue from 'vue'
import App from './App.vue'
import botonEnviar from './componentes/botonEnviar.vue'
import datosDelUsuario from './componentes/datosUsuario.vue'

/* Vue.component('saludar', {
  template: '<H1> Hola mundo desde main.js </H1>'
}) */
Vue.component('enviar', botonEnviar)
//forma global
Vue.component('App-datosUsuario', datosDelUsuario);

new Vue({
  el: '#app',
  render: h => h(App)
})

// vue init webpack-simple app-componentes
