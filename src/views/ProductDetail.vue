<template>
    <div>
        <h1>Detalle del Producto {{ $route.params.id }}</h1>
        <p>Id_Producto: {{ productDetail.id }}</p>
        <p>Nombre: {{ productDetail.name }}</p>
        <p>Precio: {{ productDetail.price }}</p>
        <p>Cantidad: {{ productDetail.quantity }}</p>
    </div>
</template>

<script>
export default {
    name:'ProductDetail',
    data(){
        return {
            id: this.$route.params.id,
            details:{}
        }
    },
    computed:{
        productDetail(){
            return this.$store.getters.getProductById(parseInt(this.$route.params.id))
        }
    }
}
</script>

<style>

</style>
