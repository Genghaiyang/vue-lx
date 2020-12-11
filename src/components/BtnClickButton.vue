<template>
	<div class="btn-button">
		<span>
			
				<img v-if="btnType==='begin'"  @click="GoToUrl" src="../assets/1-4.png" alt="" />
                <img v-else-if="btnType==='next'" @click="GoNext" src="../assets/2-2.png" alt="" />
                <img v-else-if="btnType==='submit'" @click="GoSubmit" src="../assets/3-1.png" alt="" />
		
		</span>
	</div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
	props: ['slectNumId','SetItemAnswer'],
	computed: mapState({
		btnType: (state) => state.btnType,
    }),
    methods:{
      ...mapMutations(['SET_ITEM_NUM','SET_ANSWER_ID']),
      GoToUrl:function(){
          this.$router.push({path:'item'})
      },
      
      GoNext:function(){
          if(this.slectNumId){
              this.SET_ANSWER_ID(this.slectNumId)//保存答案ID
              this.SetItemAnswer(null,null)//清空状态
              this.SET_ITEM_NUM()//切换下一题
               
               
          }else{
              alert('请选择答案！')
          }
         
      },
      GoSubmit:function(){
          if(this.slectNumId){
              this.SET_ANSWER_ID(this.slectNumId)//保存答案ID
              this.SetItemAnswer(null,null)//清空状态
              this.$router.push({path:'score'})            
          }else{
              alert('请选择答案！')
          }
      },
      
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-button {
	width: 100%;
	text-align: center;
}
.btn-button span {
	width: 2rem;
	display: inline-block;
}
.btn-button span img {
	width: 100%;
}
</style>
