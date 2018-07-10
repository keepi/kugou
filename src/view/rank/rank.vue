<template>
	<div class="panel-img-list">
		<ul>
			<li v-for="item in list" 
			    :key="item.rankid"
			    @click="gotoRankList(item.rankid)">
				<a href="javascript:;">
					<div class="panel-img-left">
						<img :src="replaceUrl(item.imgurl)"/>
					</div>
					<div class="panel-img-content">
						<p>{{item.rankname}}</p>
					</div>
					<div class="panel-img-right">
						<i class="panel-img-arrow"></i>
					</div>
				</a>
			</li>
		</ul>
		</div>		
	</div>
</template>
<script>
	import {getRankList, getRankListById} from '@/server'

	export default {
		name: 'rank',
		data(){
			return {
				list: []
			}
		},
		async created(){
			let {data} = await getRankList()
			this.list = data.data;
		},
		methods: {
			replaceUrl(url){
				return url.replace(/{size}/g, 400)
			},
			gotoRankList(id){
				this.$router.push('/rank/info/');
				getRankListById(id).then((res) => {
					this.$store.dispatch('getRankList', res.data)
				}).catch((err) => {
					console.log(err)
				})
			}
		}
	}
</script>
<style>
	.panel-img-list li a {
		display: block;
		position: relative;
		margin-left: .7143rem;
		padding: .7143rem 2.14286rem .7143rem 6.4286rem;
		border-bottom: 1px solid #e5e5e5;
	}
	.panel-img-left {
		position:absolute;
		top: .7143rem;
		left: 0;
		width: 5.3751rem;
		height: 5.3751rem;
	}
	.panel-img-left img {
		width: 100%;
	}
	.panel-img-content {
		min-width: 5.3751rem;
		line-height: 5.3751rem;
		display: block;
		font-size: 1.1714rem;
		color: #333;
		text-align: left;
	}
	.panel-img-right {
		position: absolute;
		top:0;
		right: 0;
		width: 2.14286rem;
		height: 100%;
		text-align: center;
		display: block;
	}
	.panel-img-arrow{
		width: .53751rem;
		height: 1rem;
		margin-top: -.5rem;
		position: absolute;
		top: 50%;
		right: .7143rem;
		display: block;
		background: url(http://m.kugou.com/v3/static/images/index/arrow_icon.png) no-repeat;
		background-size: 100%;
	}
</style>