<template>
  <div>
    隨機增加：
    <Counter :number="number"></Counter>
  </div>
</template>
<script>
import Counter from './counter.vue';

export default{
  components:{
    Counter
  },
  data(){
    return {
      number:0
    }
  },
  methods:{
    handleAddRandom (num) {
      this.number += num;
    }
  },
  created(){
    this.$bus.on('add', this.handleAddRandom);
  },
  beforeDestroy(){
    this.$bus.off('add',this.handleAddRandom);
  }
}
</script>