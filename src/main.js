import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router/router.js';
// 引入store
import store from './store/store.js';

Vue.config.productionTip = false

new Vue({
	// 注册路由
	router,
	// 注册store
	store,
	render: h => h(App)
}).$mount('#app')
