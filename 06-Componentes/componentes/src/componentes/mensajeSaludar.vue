<template>
    <div id="msj">
        <ul>
            <enviar v-for="dia in arrayDiasSemana"  :key="dia.id">
                {{dia.id}}
                {{dia.text}}
            </enviar>
        </ul>
    </div>    
</template>

<script>
import BotonEnviar from "./botonEnviar.vue";
export default {
    name: "msj",
    data() {
        return {
            arrayDiasSemana: [
                { id: 1, text: "lunes", },
                { id: 2, text: "martes", },
                { id: 3, text: "miercoles", },
                { id: 4, text: "jueves", },
                { id: 5, text: "viernes", },
            ]
        };
    },
    components: { BotonEnviar }
}
</script>

<style scoped>

</style>