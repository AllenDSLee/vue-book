Vue.directive('clickOutside',{
  bind:function(el,binding,vnode){
    function documentHandler(e){
      if(el.contains(e.target)){
        return;
      }
      if(binding.expression){
        binding.value(e);
      }
    }

    // vue 2.x 不允許使用this指向的變量(var _this = this)
    el.__vueClickOutside__ = documentHandler;
    document.addEventListener('click',documentHandler);
  },
  unbind:function(el,binding){
    document.removeEventListener('click',el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  }
})