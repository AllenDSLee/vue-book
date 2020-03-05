<template>
  <div>
    <v-title title="Vue組件化"></v-title>
    <v-button @click="handleClick">點擊</v-button>
  </div>
</template>

<script>
import vTitle from './title.vue';
import vButton from './button.vue';

export default {
  components:{
    vTitle,
    vButton
  },
  methods:{
    handleClick(e){
      console.log(e);
    }
  },
  data: function(){
    return {
      name:'Vue.js'
    }
  }
}
</script>
<style scoped>
div {
  color: #f60;
  font-size: 24px;
}
</style>