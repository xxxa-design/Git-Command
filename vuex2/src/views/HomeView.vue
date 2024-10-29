<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>home</h3>
    <p>counter ={{ $store.getters.getCounter }}</p>
    <p>{{ getCounter }}</p>
    <button @click="addHandle">增加</button>
    <button @click="asyncAddHandle">异步增加</button>
    
  </div>
</template>

<script>
// @ is an alias to /src
import {mapGetters,mapMutations  } from "vuex";

export default {
  name: 'HomeView',
  components: {
   
  },
  computed:{
    ...mapGetters(['getCounter'])
  },
  methods:{
    ...mapMutations(['addCounter']),
    addHandle(){
      //固定写法
      // this.$store.commit('addCounter')
      this.addCounter(20)
    },
    asyncAddHandle(){
      this.$store.dispatch('asyncAdd')
    }
  }
}
</script>
