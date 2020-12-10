<template>
  <div class="itemPage">
    <line-tips>题目1</line-tips>
    
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
  }
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


