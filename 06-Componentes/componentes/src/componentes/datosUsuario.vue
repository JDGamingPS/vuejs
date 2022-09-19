<!-- de forma global -->
<template>
    <div>
        <h1>{{nombre}}</h1>
        <h1>{{ciudad}}</h1>
        <h1>{{correo}}</h1>

    </div>
</template>

<script>
export default {
    //definir las variables si seran strin o int o algun otro dato
    props: {
        nombre: (Number, String),
        ciudad: {
            type: String,
            default:"Dato por default"
        },
        correo: String
    }
}
</script>

<style scoped>

</style>