<template>
  <div>
    <h1>首頁</h1>
    <p>計數:{{count}}</p>    
    <router-link to="/about">跳轉到About</router-link>
    <br>
    <button @click="handleIncrement">+1</button>
    <button @click="handleDecrease">-1</button>
    <button @click="handleIncrementMore">+10</button>
    <div>
      <div>{{list}}</div>
      <div>{{listCount}}</div>
    </div>
    <br>
    <div>
      {{count}}
      <button @click="handleAsycIncrement">action +1</button>
    </div>
  </div>
</template>
<script>
export default {
  computed:{
    count(){
      return this.$store.state.count;
    },
    list(){
      return this.$store.getters.filteredList;
    },
    listCount(){
      return this.$store.getters.listCount;
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
    },
    handleActionIncrement(){
      this.$store.dispatch('increment');
    },
    handleAsycIncrement(){
      this.$store.dispatch('asyncIncrement').then((result) => {
        console.log(this.$store.state.count);
      }).catch((err) => {
        
      });
    }
  }
}
</script>