<template>
	<div>
		{{getDetail}}
		<!-- top -->
		<div class="top-goback top-goback-bg" id="top-goback"> 
			<p class="page-title">{{className}}</p>
			<router-link class="goback" to="/singer" ><i></i></router-link>
		</div>
		<!-- body -->
		<div class="bd">
			<ul class="panel-img-list singer-img-list">
				<li v-for="item in list.info">
					<a :href="'/singer/info/'+item.singerid">
						<div class="panel-img-left">
							<img  v-bind:src="replaceUrl(item.imgurl)"/>
						</div>
						<div class="panel-img-content">
							<p class="panel-img-conten-first">{{item.singername}}</p>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import {getSubSingerList} from '@/server'
	export default {
		name: 'singerList',
		data(){
			return {
				list: [],
				className: ''
			}
		},
		methods: {
			replaceUrl(url) {
				return url.replace(/{size}/g, 400)
			},
			handleScroll() {
				var bar = document.getElementById('top-goback')
				if(window.scrollY >= 58){
					bar.style.cssText = `
						position:fixed;
						top: 3.2rem;
						left: 0;
						z-index: 3;
						background: rgba(255, 255, 255, 1);
					`
				}else{
					bar.style.cssText = ` `
				}
			}
		},
		computed: {
			getDetailById(){
				return this.$route.params.listId
			},
			getDetail(){
				getSubSingerList(this.$route.params.listId)
					.then((res) => {
						this.className = res.classname;
						this.list = res.singers.list
						console.log(res)
					})
					.catch((error) => {
						console.log(error)
					})
			},
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll)
		},

	}
</script>
<style>
	.top-goback{
		width: 100%;
		line-height: 3rem;
		background: -webkit-linear-gradient(top,rgba(0,0,0,.6),transparent);
		padding: 0 2.1429rem;
		position: relative;
		text-align: center;
		color: #fff;
		box-sizing: border-box;
	}
	.top-goback-bg {
		box-shadow: 0 0.1785rem 0.1785rem 0 #f4f4f4;
		color: #333;
		background: #fff;
	}
	.page-title {
		height: 3rem;
		line-height: 3rem;
		font-size: 1rem;
	}
	.goback {
		width: 2.1429rem;
		height: 2.8031rem;
		position: absolute;
		left: 0;
		top: 0;
		text-align: center;
		cursor: pointer;
	}
	.goback i {
		width: .85714rem;
		height: 1.42857rem;
		margin-top: .687265rem;
		display: inline-block;
		background: url(http://m.kugou.com/v3/static/images/index/goback.png) no-repeat;
		background-size: 100%;
	}
	.bd {
		width: 100%;
		padding-top: 0.4286rem;
	}
	.singer-img-list li a {
		padding-left: 4.35rem;
	}
	.panel-img-list li a {
		display: block;
		position: relative;
		margin-left: .7143rem;
		padding: .7143rem 2.14286rem .7143rem 6.4286rem;
		border-bottom: 1px solid #e5e5e5;
	}
	.singer-img-list .panel-img-left {
		width: 3.3929rem;
		height: 3.3929rem;
	}
	.panel-img-left {
		position: absolute;
		top: .7143rem;
		left: 0;
	}
	.panel-img-left img{
		width: 100%;
	}
	.singer-img-list .panel-img-content{
		min-height: 3.3929rem;
		line-height: 3.3929rem;
		display: block;
		font-size: 1.0714rem;
		color: #333;
	}

</style>