<template>
<div class="list">
	<ul class="orders">
		<li v-for="item in order" :key="item.id" @click="sortList(item.id)">
			<span>{{item.text}}</span>
			<span class="arrow"></span>
		</li>
	</ul>
	<ul class="items">
		<router-link tag="li" v-for="item in dealList" :key="item.id" :to="'/detail/' + item.id">
			<img :src="'img/list/' + item.img" alt="">
			<div class="content">
				<h3>{{item.title}}</h3>
				<p>
					<span class="price">{{item.price}}元</span>
					<span class="origin">门市价:{{item.originPrice}}元</span>
					<span class="sales">销量{{item.sales}}</span>
				</p>
			</div>
		</router-link>
	</ul>
	<div class="load-more" @click="showList" v-show="others.length">
		<span class="text">查看其它{{others.length}}条团购</span>
		<span class="arrow">
			<span class="arrow white"></span>
		</span>
	</div>
</div>
</template>
<style type="text/css" lang="scss" scoped>
@import '../base.scss';
.orders {
	display: flex;
	li {
		border-bottom: 1px solid #ccc;
		border-right: 1px solid #ccc;
		flex: 1;
		text-align: center;
		line-height: 30px;
		height: 30px;
		background: #fff;
		font-size: 12px;
		&:last-child {
			border-right: none;
		}
		.arrow {
			@include arrow(4px);
			position: relative;
			top: -2px;
			right: -4px;
		}
	}
}
.items {
	@extend %items;
}
.load-more {
	height: 40px;
	line-height: 40px;
	border-bottom: 1px solid #ccc;
	font-size: 16px;
	color: $navColor;
	text-align: center;
	background: #fff;
	.arrow {
		@include arrow(10px, $navColor);
		position: relative;
		top: 2px;
		left: 5px;
		.white {
			position: absolute;
			top: -12px;
			left: -10px;
			border-top-color: #fff;
		}
	}
}
</style>
<script type="text/javascript">
export default {
	// 静态数据
	data() {
		return {
			order: [
				{ id: 'price', text: '价格排序' },
				{ id: 'sales', text: '销量排序' },
				{ id: 'evaluate', text: '好评排序' },
				{ id: 'count', text: '优惠排序' }
			],
			// 商品列表数据
			list: [],
			// 存储剩余的商品
			others: []
		}
	},
	//动态数据绑定
	computed: {
		// 渲染列表数据
		dealList() {
			//返回过滤后的数组
			return this.list.filter(item => item.title.indexOf(this.$store.state.word) >= 0)
		}
	},
	methods: {
		//点击加载更多列表信息
		showList() {
			//list将剩余内容拼接上
			this.list = this.list.concat(this.others)
			//同时清空others的数据
			this.others = []
		},
		sortList(id) {
			if(id === 'count') {
				return this.list.sort((a,b) => (b.originPrice - b.price) - (a.originPrice - a.price))
			}
			this.list.sort((a,b) => b[id] - a[id])
			console.log(id)
		}
	},
	created() {
		this.$http.get(`data/list.json?id=${this.$route.params.id}`)
			// 监听数据返回
			.then(({ data }) => {
				// 存储前三个
				this.list = data.slice(0, 3);
				// others存储剩余的
				this.others = data.slice(3);
			})
	}
}
</script>