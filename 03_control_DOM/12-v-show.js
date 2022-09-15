const app = new Vue({
    el:'#app',
    data:{
        nota:0
    },
    methods:{
        resultado(){
            if (this.nota >= 3.0 & this.nota <= 5.0) {
                return true
            }else{
                return false
            }
        }
    }
})