<template>
	<div class="list-line-box">
		<div class="list-content">
			<p class="title">{{ listdata.topic_name }}</p>
			<ul>
				<li
					v-for="(list, index) in listdata.topic_answer"
					:key="list.topic_answer_id"
                    @click="SetItemAnswer(index,list.topic_answer_id)"
				>
					<b :class="{'active':slectNum==index}">{{ ChooseType(index) }}</b
					><span>{{ list.answer_name }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
    name: 'ListItem',
    
	props: ['listdata','SetItemAnswer','slectNum'],
	methods: {
		ChooseType:function(type){
            let Ahtml = ''
			switch (type) {
				case 0:
					Ahtml = 'A'
					break
				case 1:
					Ahtml = 'B'
					break
				case 2:
					Ahtml = 'C'
					break
				case 3:
					Ahtml = 'D'
					break
            }
            return Ahtml
        },
        
        
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-line-box {
	width: 5.28rem;
	height: 4.66rem;
	background: url(../assets/2-1.png) no-repeat center center;
	background-size: 100% 100%;
	margin: 2.6rem auto 0;
	overflow: hidden;
}
.list-content {
	width: 80%;
	margin: 1rem auto 0;
	font-size: 0.2rem;
	color: #fff;
}
.list-content .title {
	line-height: 0.3rem;
	text-align: left;
}
.list-content ul {
	list-style-type: none;
	padding: 0;
}
.list-content ul li {
	line-height: 0.5rem;
	text-align: left;
	margin: 0.2rem 0;
}
.list-content ul li b {
	display: inline-block;
	border-radius: 50%;
	border: 1px solid #fff;
	width: 0.4rem;
	height: 0.4rem;
	text-align: center;
	line-height: 0.4rem;
	margin-right: 0.2rem;
}
.list-content ul li b.active {
	background: #fff;
	color: #000;
}
</style>
