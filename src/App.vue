<template>
<div id="app">
	<div class="app-header">
		<div class="goback" @click="back">
			<span class="arrow">
				<span class="arrow green"></span>
			</span>
		</div>
		<h1>拼少少团购网站</h1>
		<div class="login">登陆</div>
	</div>
	<div class="app-search">
		<input type="text" placeholder="请输入搜索关键字" v-model="msg" @keyup.enter="goSearch">
	</div>
	<!-- 路由渲染位置 -->
	<router-view></router-view>
</div>
</template>

<script>
export default {
	// 绑定的数据
	data() {
		return {
			msg: ''
		}
	},
	// 方法
	methods: {
		back() {
			this.$router.go(-1)
		},
		goSearch() {
			//回车时将搜索栏的内容提交给store进行组件间的通信
			this.$store.commit('updateWord', this.msg);
			//同时清空msg
			this.msg = []
		}
	}
}
</script>
<style lang="scss">
@import './base.scss';
* {
	padding: 0;
	margin: 0;
	list-style: none;
}
body, html {
	background: #efefef;
}
.app-header {
	background-color: $navColor;
	height: 60px;
	line-height: 60px;
	display: flex;
	text-align: center;
	color: #fff;
	.goback {
		width: 50px;
		position: relative;
		.arrow {
			@include arrow(10px, #fff, right);
			position: absolute;
			top: 22px;
			left: 2px;
			.green {
				border-right-color: $navColor;
				top: -10px;
				left: -7px;
			}
		}
	}
	h1 {
		flex: 1;
		font-size: 24px;
		text-indent: -0.5em;
	}
	.login {
		width: 50px;
	}
}
.app-search {
	display: flex;
	padding: 10px 20px;
	background-color: #fff;
	input {
		display: block;
		flex: 1;
		padding: 10px 20px;
		border: none;
		font-size: 14px;
		border-radius: 18px;
		background-color: #efefef;
		outline: none;
	}
}

</style>

