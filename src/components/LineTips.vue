<template>
	<div class="tips">
		<span><slot></slot></span>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		msg: String,
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tips{
      width: 1.48rem;
      height: 2.96rem;
      background: url(../assets/w.png) no-repeat center top;
      background-size: 100% auto;
      position: absolute;
      top: 0;
      right: 12%;
      z-index: 99;
  }
  .tips span{
      font-size: 0.04rem;
      color: #a57c50;
      font-weight: bold;
      display: inline-block;
      margin: 2.24rem auto 0;
  }
</style>
