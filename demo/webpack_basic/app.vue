<template>
  <div>
    <v-title title="Vue組件化"></v-title>
    <v-button @click="handleClick">點擊</v-button>
    <p>
      <img src="./images/image.png" style="width: 200px;">
    </p>
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