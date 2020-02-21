var app = new Vue({
  el:'#app',
  data:{    
    checkedAll:false,
    list:[
      {
        id:1,
        name:'iPhone 7',
        price:6188,
        count:1,
        checked:false
      },
      {
        id:2,
        name:'iPad Pro',
        price:5888,
        count:1,
        checked:false
      },
      {
        id:3,
        name:'MacBook Pro',
        price:21488,
        count:1,
        checked:false
      },            
    ],    
  },
  computed:{
    totalPrice:function(){
      var total = 0;
      for (var i = 0; i < this.list.length; i++) {
        var item = this.list[i];
        total += item.price * item.count;
      }
      return total;
    }
  },
  methods:{
    handleAdd:function(index){
      this.list[index].count++
    },
    handleReduce:function(index){
      if(this.list[index].count === 1) return;
      this.list[index].count--;
    },
    handleRemove:function(index){
      this.list.splice(index,1);
    },
    handleCheckItem:function(item){
      item.checked = !item.checked;
    },
    handleCheckAll:function(){
      this.checkedAll = !this.checkedAll;
      var _all = this.checkedAll;
      for (var i = 0; i < this.list.length; i++) {
        var element = this.list[i];
        element.checked = _all;
      }
    }
  }
});