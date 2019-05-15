<template>
    <form @submit.prevent="onSubmit">
        <input v-validate="'required'" class="inp-nombre" name="nombre" type="text" v-model="name" placeholder="Nombre del producto"/>
        <!--<span>{{ errors.first('nombre') }}</span>-->
        <input v-validate="'required|min:1'" type="number" name="precio" v-model.number="price" placeholder="Precio del producto"/>
        <!--<span>{{ errors.first('precio') }}</span>-->
        <button type="submit">Agregar Producto</button>
    </form>
</template>

<script>
export default {
    name: 'ProductForm',
    data() {
        return{
            name: '',
            price: 0
        }
    },
    methods:{
        onSubmit(){
            this.$validator.validate().then((valid)=>{
                if(valid){
                    this.$emit('addToProductList', {
                        name:this.name,
                        price: this.price
                    })
                }else{
                    console.log('Algo Falló');
                }
            })
        }
    }
}
</script>

<style scoped>
    form{width:100%; padding:50px;margin:auto;width:380px; border-radius:10px; background-color:#858a84}
    input{
        display:block;
        box-sizing:border-box;
        width:100%;
        padding:20px;
        border-radius:5px;
        border:1px solid gray;
        margin-bottom:20px;
    }
    button{
        padding:20px;
        font-size:16px;
        color:white;
        background-color:lightcoral;
        border:1px solid lightcoral;
    }
</style>
