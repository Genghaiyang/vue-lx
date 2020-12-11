<template>
  <div class="home">
    <line-tips>第一周</line-tips>
    <div class="homebanner"><img src="../assets/1-2.png" alt=""></div>  
    <btn-click-button></btn-click-button>
  </div>
</template>

<script>
// @ is an alias to /src
import LineTips from '../components/LineTips'
import BtnClickButton from '../components/BtnClickButton'

export default {
  name: 'Home',
  components: {
    LineTips,
    BtnClickButton
  },
  methods:{
      
  },
  
}
</script>
<style scoped>
 .home{
     width: 100%;
     height: 100%;  
     position: relative;  
     overflow: hidden;
 }
 .homebanner{
     width: 75%;
     margin: 2.2rem auto 0;
 }
  .homebanner img{
      width: 100%;
  }
  
</style>>


