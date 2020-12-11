<template>
  <div class="itemPage">
    <line-tips>题目{{itemNum}}</line-tips>
    <list-item v-bind:listdata="itemDetail[itemNum-1]" :SetItemAnswer="SetItemAnswer" :slectNum="slectNum"></list-item>
    <btn-click-button :slectNumId="slectNumId" :SetItemAnswer="SetItemAnswer"></btn-click-button>
  </div>
</template>

<script>
// @ is an alias to /src
import LineTips from '../components/LineTips'
import BtnClickButton from '../components/BtnClickButton'
import ListItem from '../components/ListItem'
import {mapState,mapMutations} from 'vuex'
export default {
  name: 'Item',
  data(){
        return {
            slectNumId:null,//选择题目ID
            slectNum:null,//选择题目索引
        }
    },
  computed: mapState([
      'itemNum',
      'itemDetail',
  ]),
  components: {
    LineTips,
    BtnClickButton,
    ListItem
  },
  methods:{
      ...mapMutations(['CHANGE_BTN_STYLE','SET_TIME_COUNT']),
      SetItemAnswer:function(index,id){
          this.slectNumId = id
          this.slectNum = index
      },
  },
  watch: {
    // 如果 `itemNum` 发生改变，这个函数就会运行
    itemNum: function () {
      if(this.itemNum===this.itemDetail.length){this.CHANGE_BTN_STYLE('submit')}
    }
  },
  created:function(){
      this.CHANGE_BTN_STYLE('next')
      this.SET_TIME_COUNT()
  },
}
</script>
<style scoped>
 .itemPage{
     width: 100%;
     height: 100%;  
     position: relative;  
     overflow: hidden;
 }
  
</style>>


