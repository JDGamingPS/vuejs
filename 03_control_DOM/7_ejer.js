const app = new Vue({
    el:'#app',
    data:{
        datos:[],
        textoAlm:""
    },
    methods: {
        //para que solo guarde texto y no un espacio en
        guardar(){
            if (this.textoAlm != "") {
                this.datos.push(this.textoAlm)
            }else{
                console.log("no se admite cadena vacia");
            }
        }
    }
})