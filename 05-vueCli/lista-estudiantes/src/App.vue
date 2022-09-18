<template>
  <div id="app">
    <h2>{{titulo}}</h2>
    .<div class="container">
      <div class="form">
        <div class="form-group">
            <label>nombre</label>
            <input type="text" class="form-control" v-model="registro.nombre">
        </div>

        <div class="form-group">
            <label>colegio</label>
            <input type="text" class="form-control" v-model="registro.colegio">
        </div>
        <br>
        <button type="button" class="btn btn-primary" @click="agregarEstudiante()">Guardar</button>
      </div>
      <div class="row">
        <div class="col-3" v-for="nomCol in arrayRegistros">
          <div class="card">
            <div class="form-group">
              <h2>{{nomCol.nombre}}</h2>
              <hr>
              <p>{{nomCol.colegio}}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      titulo: 'Welcome to Your Vue.JS',
      registro:{
        nombre: '',
        colegio:''
      },
      arrayRegistros:[
        {
          nombre:'Fabio Perez',
          colegio: 'Villa Tunari'
        }
      ],
    };
  },
  methods:{
    agregarEstudiante: function () {
      var {nombre, colegio} = this.registro
      this.arrayRegistros.push({
        nombre,
        colegio
      })
    }
  }
};
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
