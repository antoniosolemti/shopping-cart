<template>
    <div>
        <h1>Mi carrito</h1>
        <ProductForm @addToProductList="addToProductList" />

        <ProductItem @addToCart="addToCart" v-bind:key="product.id" v-bind:productItem="product" v-for="product in productList" />
        <div class="cart-total">Total: {{ total | currency }}</div>
    </div>
</template>

<!--ESTILOS-->
<style lang="less" scoped>
    @bgColor: lightcoral;

    h1{font-size:24px; color:#41b883;}
    .cart-total{font-size:18px; color:@bgColor;}
</style>

<script>
import ProductItem from './ProductItem.vue'
import ProductForm from './ProductForm.vue'
import { mapState, mapMutations } from 'vuex';
//import Axios from 'axios';


export default {
    name: 'SoppingCart',
    beforeCreate() {},
    components: {
        ProductItem,
        ProductForm
    },
    methods:{
       /* addToProductList(productItem){
            productItem.id = this.productList.length + 1;
            productItem.quantity = 0;

            this.productList.push(productItem);
        },*/

        addToCart(productItem){
            this.cart.push(productItem);
        },

        ...mapMutations(['addToProductList','addToCart'])
    },
    computed: {
        total(){
            return this.cart.reduce(function(sum, currItem){
                return sum + currItem.price;
            },0);
        },
        ...mapState(['productList', 'cart'])
    }
}
</script>
