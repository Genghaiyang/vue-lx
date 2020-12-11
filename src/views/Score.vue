<template>
	<div class="scorePage">
		<div class="scorebanner">
			<p class="score">{{score}}分！</p>
			<p class="result_tip">{{scoreTips}}共计用时{{timeCount}}秒！</p>
		</div>
		<div class="sharetips" @click="showCover"><img src="../assets/4-3.png" alt="" /></div>
		<div class="info">关注微信，获取答案</div>
		<div class="ewm"><img src="../assets/demo.png" alt="" /></div>
		<div class="share_cover" v-show="showHide" @click="showCover">
			<img src="../assets/5-2.png" class="share_img" />
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import {mapState,mapMutations} from 'vuex'
export default {
	name: 'Score',
	data() {
		return {
			showHide: false, //是否显示提示
			score: 0, //分数
			scoreTips: '', //分数提示
			rightAnswer: [2, 7, 12, 13, 18], //正确答案
			scoreTipsArr: [
				'你说，是不是把知识都还给小学老师了？',
				'还不错，但还需要继续加油哦！',
				'不要嘚瑟还有进步的空间！',
				'智商离爆表只差一步了！',
				'你也太聪明啦，葡萄之家欢迎你！',
			],
		}
	},
	computed: mapState(['answerid','timeCount']),
	methods: {
        ...mapMutations(['CLEAR_TIME_COUNT']),
		/* showCover: () => (this.showHide = !this.showHide), */
        showCover:function(){
            this.showHide = !this.showHide
        },
		computedScore: function() {
			this.answerid.forEach((item, index) => {
				if (item == this.rightAnswer[index]) {
					this.score += 20
				}
			})
		},

		getScoreTips: function() {
			let index = Math.ceil(this.score / 20) - 1
			this.scoreTips = this.scoreTipsArr[index]
		},
	},
	created: function() {
		this.computedScore();
        this.getScoreTips();
        this.CLEAR_TIME_COUNT();
	},
}
</script>
<style scoped>
.scorePage {
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;
	background: url(../assets/4-1.jpg) no-repeat center top;
	background-size: 100% 100%;
}
.scorebanner {
	width: 4.6rem;
	height: 4.31rem;
	overflow: hidden;
	background: url(../assets/4-2.png) no-repeat center top;
	background-size: 100% 100%;
	margin: 0.8rem auto 0;
}
.scorebanner .score {
	font-size: 0.7rem;
	font-weight: 900;
	-webkit-text-stroke: 0.05rem #412318;
	font-family: Tahoma, Helvetica, Arial;
	color: #a51d31;
	margin-top: 2rem;
	margin-bottom: 0;
}
.result_tip {
	color: #3e2415;
	font-size: 0.28rem;
	text-align: center;
	width: 90%;
	margin: 0.4rem auto 0;
}
.sharetips {
	width: 40%;
	margin: 0.4rem auto 0;
}
.sharetips img,
.ewm img {
	width: 100%;
}
.info {
	text-align: center;
	font-size: 0.3rem;
}
.ewm {
	width: 40%;
	margin: 0.4rem auto 0;
}
.share_cover {
	position: fixed;
	bottom: 0;
	right: 0;
	top: 0;
	left: 0;
	background: url(../assets/5-1.png) no-repeat;
	background-size: 100% 100%;
	opacity: 0.92;
}
.share_cover img {
	width: 80%;
	margin-top: 0.2rem;
}</style
>>
