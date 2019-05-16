<template>
  <div class="about">
    <h1>Author: {{ fullName }}</h1>

    <h1>Author: {{ session.name }}</h1>

    <input type="text" v-model="name" />
    <button @click="changeName">Cambiar Nombre</button>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

  export default {
    name:'About',
    data(){
      return{
        name: ''
      }
    },
    methods:{
      changeName(){
       //this.$store.commit('setName', this.name);
       //this.setName(this.name);
       this.$store.dispatch('asyncSetName', this.name);
       //this.asyncSetName(this.name);
      },
      ...mapMutations(['setName']),
      ...mapActions(['asyncSetName'])
    },
    computed:{
      ...mapState(['session']),
      ...mapGetters(['fullName'])
    }
  }
</script>
