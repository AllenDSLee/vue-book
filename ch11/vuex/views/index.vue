<template>
  <div>
    <h1>首頁</h1>
    <p>計數:{{count}}</p>    
    <router-link to="/about">跳轉到About</router-link>
    <br>
    <button @click="handleIncrement">+1</button>
    <button @click="handleDecrease">-1</button>
    <button @click="handleIncrementMore">+10</button>
  </div>
</template>
<script>
export default {
  computed:{
    count(){
      return this.$store.state.count;
    }
  },
  methods:{
    handleIncrement(){
      // this.$store.commit('increment');
      this.$store.commit({
        type:'increment',
        count:1
      });      
    },
    handleDecrease(){
      // this.$store.commit('decrease');
      this.$store.commit({
        type:'decrease',
        count:1
      });        
    },
    handleIncrementMore(){
      // this.$store.commit('increment',5);
      this.$store.commit({
        type:'increment',
        count:10
      });
    }
  }
}
</script>