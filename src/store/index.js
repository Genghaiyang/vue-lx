import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const CHANGE_BTN_STYLE = 'CHANGE_BTN_STYLE'
const SET_ITEM_NUM = 'SET_ITEM_NUM'
const SET_ANSWER_ID = 'SET_ANSWER_ID'
const SET_TIME_COUNT = 'SET_TIME_COUNT'
const CLEAR_TIME_COUNT = 'CLEAR_TIME_COUNT'

const state = {
	btnType: 'begin', //按钮类型--begin开始--next下一题--submit提交
    itemNum: 1, //题目序号
    timer:null,//定时器
    timeCount:0,//总共用时
	itemDetail: [
		{
			//题目
			topic_id: 20,
			active_topic_id: 4,
			type: 'ONE',
			topic_name: '题目一',
			active_id: 1,
			active_title: '欢乐星期五标题',
			active_topic_phase: '第一周',
			active_start_time: '1479139200',
			active_end_time: '1482163200',
			topic_answer: [
				{
					topic_answer_id: 1,
					topic_id: 20,
					answer_name: '答案aaaa',
					is_standard_answer: 0,
				},
				{
					topic_answer_id: 2,
					topic_id: 20,
					answer_name: '正确答案',
					is_standard_answer: 0,
				},
				{
					topic_answer_id: 3,
					topic_id: 20,
					answer_name: '答案cccc',
					is_standard_answer: 0,
				},
				{
					topic_answer_id: 4,
					topic_id: 20,
					answer_name: '答案dddd',
					is_standard_answer: 1,
				},
			],
		},
		{
			topic_id: 21,
			active_topic_id: 4,
			type: 'MORE',
			topic_name: '题目二',
			active_id: 1,
			active_title: '欢乐星期五标题',
			active_topic_phase: '第一周',
			active_start_time: '1479139200',
			active_end_time: '1482163200',
			topic_answer: [
				{
					topic_answer_id: 5,
					topic_id: 21,
					answer_name: '答案A',
					is_standard_answer: 1,
				},
				{
					topic_answer_id: 6,
					topic_id: 21,
					answer_name: '答案B',
					is_standard_answer: 0,
				},
				{
					topic_answer_id: 7,
					topic_id: 21,
					answer_name: '正确答案',
					is_standard_answer: 0,
				},
				{
					topic_answer_id: 8,
					topic_id: 21,
					answer_name: '答案D',
					is_standard_answer: 0,
				},
			],
		},
		{
			topic_id: 21,
			active_topic_id: 4,
			type: 'MORE',
			topic_name: '题目三',
			active_id: 1,
			active_title: '欢乐星期五标题',
			active_topic_phase: '第一周',
			active_start_time: '1479139200',
			active_end_time: '1482163200',
			topic_answer: [
				{
					topic_answer_id: 9,
					topic_id: 21,
					answer_name: '测试A',
					is_standard_answer: 1,
				},
				{
					topic_answer_id: 10,
					topic_id: 21,
					answer_name: 'BBBBBB',
					is_standard_answer: 0,
				},
				{
					topic_answer_id: 11,
					topic_id: 21,
					answer_name: 'CCCCCC',
					is_standard_answer: 0,
				},
				{
					topic_answer_id: 12,
					topic_id: 21,
					answer_name: '正确答案',
					is_standard_answer: 0,
				},
			],
		},
		{
			topic_id: 21,
			active_topic_id: 4,
			type: 'MORE',
			topic_name: '题目四',
			active_id: 1,
			active_title: '欢乐星期五标题',
			active_topic_phase: '第一周',
			active_start_time: '1479139200',
			active_end_time: '1482163200',
			topic_answer: [
				{
					topic_answer_id: 13,
					topic_id: 21,
					answer_name: '正确答案',
					is_standard_answer: 1,
				},
				{
					topic_answer_id: 14,
					topic_id: 21,
					answer_name: 'A是错的',
					is_standard_answer: 0,
				},
				{
					topic_answer_id: 15,
					topic_id: 21,
					answer_name: 'D是对的',
					is_standard_answer: 0,
				},
				{
					topic_answer_id: 16,
					topic_id: 21,
					answer_name: 'C说的不对',
					is_standard_answer: 0,
				},
			],
		},
		{
			topic_id: 21,
			active_topic_id: 4,
			type: 'MORE',
			topic_name: '题目五',
			active_id: 1,
			active_title: '欢乐星期五标题',
			active_topic_phase: '第一周',
			active_start_time: '1479139200',
			active_end_time: '1482163200',
			topic_answer: [
				{
					topic_answer_id: 17,
					topic_id: 21,
					answer_name: '错误答案',
					is_standard_answer: 1,
				},
				{
					topic_answer_id: 18,
					topic_id: 21,
					answer_name: '正确答案',
					is_standard_answer: 0,
				},
				{
					topic_answer_id: 19,
					topic_id: 21,
					answer_name: '错误答案',
					is_standard_answer: 0,
				},
				{
					topic_answer_id: 20,
					topic_id: 21,
					answer_name: '错误答案',
					is_standard_answer: 0,
				},
			],
		},
    ],
    answerid: []//选择答案id,
}

const mutations = {
	[CHANGE_BTN_STYLE](state, payload) {
		state.btnType = payload
    },
    [SET_ITEM_NUM](state) {
		state.itemNum += 1
    },
    [SET_ANSWER_ID](state, payload) {
		state.answerid.push(payload)
    },
    [SET_TIME_COUNT](state) {
		state.timer = setInterval(function(){
            state.timeCount += 1
        },1000)
    },
    [CLEAR_TIME_COUNT](state) {
        /* state.timer = null */
        window.clearInterval(state.timer)
	},
}

export default new Vuex.Store({
	state,
	mutations,
	actions: {},
	modules: {},
})
