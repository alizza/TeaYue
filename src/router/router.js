import Vue from 'vue';
import VueRouter from 'vue-router';
// 引入组件
import Home from '../components/Home.vue';
import List from '../components/List.vue';
import Detail from '../components/Detail.vue';

// 安装
Vue.use(VueRouter);

// 定义组件
// let Home = { template: '<h1>Home Page</h1>' }
// let List = { template: '<h1>List Page</h1>' }
// let Detail = { template: '<h1>Detail Page</h1>' }

// 定义规则
let routes = [
	{
		path: '/list/type/:id',
		component: List
	},
	{
		path: '/detail/:id',
		component: Detail
	},
	{
		path: '*',
		component: Home
	}
]

// 实例化
let router = new VueRouter({ 
	routes
})
// console.log(123)
// 监听路由变化
// router.afterEach(function() {
// 	console.log(arguments)
// })
// router.beforeEach(function(route, oldRoute, next) {
// 	console.log(arguments)
// 	// next方法必须执行
// 	next();
// })
// 监听路由变化方法,在路由实例化对象中使用beforeEach方法监听路由变化
// router.beforeEach(function(route,oldroute,next) {
// 	console.log(arguments)
// 	next()
// })
// 暴露接口
export default router;