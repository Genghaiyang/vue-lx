<template>
	<div class="btn-button">
		<span>
			<router-link to="item">
				<img src="../assets/1-4.png" alt="" />
			</router-link>
		</span>
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
