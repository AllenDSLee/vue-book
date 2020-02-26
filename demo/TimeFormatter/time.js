var Time = {
  getUnix:function(){
    var date = new Date();
    return date.getTime();
  },
  getTodayUnix:function(){
    var date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date.getTime();
  },
  getYearUnix:function(){
    var date = new Date();
    date.setMonth(0);
    date.setDate(1);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date.getTime();    
  },
  getLastDate:function(time){
    var date = new Date(time);
    var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return date.getFullYear() + '-' + month + '-' + day;
  },
  getFormatTime:function(timestamp){
    var now = this.getUnix();
    var today = this.getTodayUnix();
    var year = this.getYearUnix();
    var timer = (now - timestamp) / 1000;
    var tip = '';
    if(timer <= 0){
      tip = '剛剛';
    }else if(timer < 3600){
      tip = Math.floor(timer/60) + '分鐘前';
    }else if(timer >= 3600 && (timestamp - today >=0)){
      tip = Math.floor(timer/3600) + '小時前';
    }else if(timer / 86400 <= 31){
      tip = Math.floor(timer/86400) + '天前';
    }else{
      tip = this.getLastDate(timestamp);
    }
    return tip;
  }
}

Vue.directive('time',{
  bind:function(el,binding){
    el.innerHTML = Time.getFormatTime(binding.value);
    // vue 2.x 不允許使用this指向的變量(var _this = this)
    el.__timeout__ = setInterval(function(){
      console.log(binding.value);
      el.innerHTML = Time.getFormatTime(binding.value);      
    },60000);    
  },
  unbind:function(el){
    clearInterval(el.__timeout__);
    delete el.__timeout__;
  }
})