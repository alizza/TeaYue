// 安装vuex
import Vue from 'vue';
import Vuex, { Store } from 'vuex';
// 引入axios
import axios from 'axios';
// console.log(axios)
// 安装axios
Vue.prototype.$http = axios;
// 安装
Vue.use(Vuex);
// 暴露并初始化store
export default new Store({
	state: {
		num: 0,
		//搜索词
		word: '',
	},
	mutations: {
		changeNum(state,num) {
			state.num += num
		},
		//更新搜索词
		updateWord(state,word) {
			//更新
			state.word = word;
		}
	}
})