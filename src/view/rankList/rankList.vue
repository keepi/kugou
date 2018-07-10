<template>
	<div v-on:scroll="onscroll()">
		<div class="top-goback">
			<p class="page-title">
				{{getRankList.info.rankname}}
			</p>
			<div class="goback"><a href="/rank"><i></i></a></div>
		</div>
		<div class="bd bd-top">
			<div class="rank-info-hd">
				<img :src="replaceUrl(getRankList.info.banner7url)" />
				<div class="rank-info-time">
					<span>上次更新时间：{{getRankList.songs.timestamp | formatDate}}</span>
				</div>
			</div>
			<ul class="panel-songslist">
				<li class="panel-songslist-item"
					v-for="item,i in getRankList.songs.list">
					<span :class="['panel-songs-item-num',i+1==1 ? 'one': i+1==2 ? 'two' : i+1==3 ? 'three' : '']">
						{{i+1}}
					</span>
					<div class="panel-songs-item-name">
						<span>{{item.filename}}</span>
					</div>
					<div class="panel-songs-item-download"><i></i></div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import {formatDate} from '@/js/formatDate.js'
	export default {
		name: 'rankList',
		data(){
			return {
			}
		},
		methods: {
			replaceUrl(url){
				return url.replace(/{size}/g, 400)
			},
		},
		computed: {
			getRankList() {
				return this.$store.state.fetchRankList
			}
		},
		filters: {
			formatDate(time){
				let data = new Date(time*1000)
				return formatDate(data, 'yyyy-MM-dd')
			}
		}
	}
</script>
<style>
	.top-goback{
		width:100%;
		line-height:3rem;
		background:-webkit-linear-gradient(top,rgba(0,0,0,.6),transparent);
		padding:0 2.1429rem;
		position:relative;
		text-align:center;
		color:#fff;
		box-sizing:border-box;
		z-index: 3;
	}
	.page-title{
		height:3rem;
		line-height:3rem;
		font-size:1rem
	}
	.goback {
		width:2.1429rem;
		height:2.8031rem;
		position:absolute;
		top:0;
		left:0;
		text-align:center;
		cursor:pointer
	}
	.goback i {
		width:.85714rem;
		height:1.42857rem;
		margin-top:.687265rem;
		display:inline-block;
		background:url(http://m.kugou.com/v3/static/images/index/goback_1.png) no-repeat;
		background-size:100%
	}
	.bd-top {
		padding-top: 3.2143rem;
	}
	.bd {
		width: 100%;
	}
	.rank-info-time {
		width: 100%;
		height: 2.8rem;
		background: -webkit-linear-gradient(bottom,rgba(0,0,0,.6),transparent);
		position: absolute;
		bottom: 0;
		left: 0;
	}
	.rank-info-hd{
		width: 100%;
		height: 12.5rem;
		position: relative;
		overflow: hidden;
		margin-top: -100px;
		z-index: 2;
	}
	.rank-info-hd img{
		width: 100%;
		margin-top: -75px;
	}
	.rank-info-hd span {
		position: absolute;
		bottom: 1.25rem;
		left: 1.07143rem;
		color: #fafff2;
		font-size: .85714rem;
	}
	.panel-songslist {
		padding-left: .7143rem;
	}
	.panel-songslist-item{
		width: 100%;
		height: 4.0714rem;
		border-bottom: 1px solid #e5e5e5;
		position: relative;
		display: table;
	}
	.panel-songs-item-name {
		width: 100%;
		padding-right: 2.657rem;
		padding-left: 2.0674rem;
		display: table-cell;
		vertical-align: middle;
		cursor: pointer;
		font-size: 1rem;
		box-sizing: border-box;
		text-align: left;
	}
	.panel-songs-item-download {
		position: absolute;
		top: 0;
		right: 0;
		width: 2.5rem;
		height: 100%;
		cursor: pointer;
		text-align: center;
	}
	.panel-songs-item-download i {
		width: 1.0357rem;
		height: 1.0814rem;
		margin-top: 1.5rem;
		display: inline-block;
		background: url(http://m.kugou.com/v3/static/images/index/download_icon_2.png) no-repeat;
		background-size: 100%;
	}
	.panel-songs-item-num {
		padding: 0 .5rem;
		height: 1.0714rem;
		line-height: 1.0714rem;
		border-radius: .5rem;
		position: absolute;
		top: 50%;
		left: 0;
		margin-top: -.5357rem;
		text-align: center;
		font-size: .7143rem;
		display: inline-block;
		color: #999;
	}
	.panel-songs-item-num.one {
		background: #e80000;
		color: #fff;
	}
	.panel-songs-item-num.two {
		background: #ff7200;
		color: #fff;
	}
	.panel-songs-item-num.three {
		background: #f8b300;
		color: #fff;
	}
</style>