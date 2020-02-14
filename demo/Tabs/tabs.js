Vue.component('tabs',{
  template:'\
    <div class="tabs">\
      <div class="tabs-bar">\
        <!-- tab label,用v-for -->\
        <div :class="tabCls(item)" v-for="(item, index) in navList" @click="handleChange(index)">\
          {{item.label}}\
        </div>\
      </div>\
      <div class="tabs-content">\
        <!-- 這裡的slot要嵌套pane -->\
        <slot></slot>\
      </div>\
    </div>\
  ',
  props:{
    // 這裡的value是為了可以使用v-model
    value:{
      type:[String, Number]
    }
  },
  data:function(){
    return{
      // 用於渲染tabs的標題
      navList:[],
      // 因為不能修改value, 所以復製一份自己維護
      currentValue:this.value
    }
  },
  methods:{
    tabCls:function(item){
      return[
        'tabs-tab',
        {
          // 給當前選中的tab加一個class
          'tabs-tab-active':item.name===this.currentValue
        }
      ]
    },
    // 點擊tab label時觸發
    handleChange:function(index){
      var nav = this.navList[index];
      var name = nav.name;
      // 改變當前選中的tab, 並觸發下面的watch
      this.currentValue = name;
      // 更新value
      this.$emit('input',name);
      // 觸發一個自定義的事件
      this.$emit('on-click',name);
    },
    getTabs(){
      // 通過歷遍子組件, 得到所有的pane組件
      return this.$children.filter(function(item){
        return item.$options.name === 'pane';
      });
    },
    updateNav(){
      this.navList = [];
      // 設置對this的引用, 在function回調裡, this指向的並不是Vue的實例
      var _this = this;

      this.getTabs().forEach(function(pane,index){
        _this.navList.push({
          label:pane.label,
          name:pane.name || index
        });    
        // 如果沒有給pane設置name, 默認設置成索引    
        if(!pane.name) pane.name = index;
        // 設置當前選中的tab索引
        if(index === 0){
          if(!_this.currentValue){
            _this.currentValue = pane.name || index;
          }
        }
      });

      this.updateStatus();
    },
    updateStatus(){
      var tabs = this.getTabs();
      var _this = this;
      //顯示當前選中tab對應的pane組件, hide沒選中的
      tabs.forEach(function(tab){
        return tab.show=tab.name===_this.currentValue;
      });
    }
  },
  watch:{
    value:function(val){
      this.currentValue = val;
    },
    currentValue:function(){
      // 在當前選中的tab發生變化時, 更新pane的顯示狀態
      this.updateStatus();
    }
  }
});