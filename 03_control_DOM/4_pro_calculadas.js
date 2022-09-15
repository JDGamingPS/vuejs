//data

// interactuar on las propiedades de la data, y llevarlos 
//a los componentes del html
const app = new Vue({
    el: '#app',
    data:{
        nombre: 'Daniel',
        apellido: 'Restrepo'
    },

    // Computed properties
    computed: {
        nombreCompleto: function (params) {
            return this.nombre + " "+ this.apellido
        }
    }
})