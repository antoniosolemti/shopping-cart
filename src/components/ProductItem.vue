<template>
    <div v-if="productItem" class="c-product-item">
        <div class="info">
            <span>{{ productItem.name }}</span>
            <span>{{ productItem.price | currency }}</span>
        </div>
        <div class="toolbar">
            <button @click="$emit('addToCart', productItem)">Agregar</button>
        </div>
    </div>
</template>

<script>
export default {
    name:'ProductItem',
    props:{
        productItem:Object
    }
}
</script>

<style scoped>
    .c-product-item{
        margin:1rem auto;
        height: 45px;
        width:400px;
        padding:25px 30px;
        position:relative;
        overflow:auto;
        box-shadow:5px 5px 15px lightgray;
        border-radius: 10px;
        background-color:lightblue;
    }

    span{
        display:blocK;
    }

    button{
        float:right;
        height:100%;
        width:100%;
        display:block;
        border-radius:5px;
    }

    .info{
        width:60%;
        height:100%;
        float:left;
        text-align: left;
    }

    .toolbar{
        width:40%;
        height:100%;
        float:left;
    }
</style>
