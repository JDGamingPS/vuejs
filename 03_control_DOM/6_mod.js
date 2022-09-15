// CDN V2
// modificadores de eventos mediante la propiedad morhods
// enviando argumentos
const app = new Vue({
    el:'#app',
    data:{
        contador: 0
    },
    methods:{
        saludar(nombre){

            console.log("hola mundo", nombre);
            console.log("hola mundo");
        }
    }
})