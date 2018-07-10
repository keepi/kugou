<template>
	<div>
		{{getDetail}}
		<!-- top -->
		<div class="top-goback top-goback-bg" id="top-goback"> 
			<p class="page-title">{{info.specialname}}</p>
			<router-link class="goback"
						 to="/plist" >
				         <i></i>
			</router-link>
		</div>
		<!-- body -->
		<div class="bd bd-top">
			<div class="plist-info-hd">
				<img :src="replaceUrl(info.imgurl)"/>
			</div>
			<ul class="panel-songslist">
				<li class="panel-songslist-item" 
					v-for="item in list">
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
	import {getPlistInfo} from '@/server'
	import * as base from '@/js/base'
	export default {
		name: 'plistInfo',
		data(){
			return {
				info: [],
				list: []
			}
		},
		computed: {
			getDetail() {
				getPlistInfo(this.$route.params.plistInfoId)
					.then((res) => {
						this.info = res.info.list;
						this.list = res.list.list.info;
						console.log(res)
					})
					.catch((error) => {
						console.log(error)
					})
			},
			replaceUrl(){
				return base.replaceUrl
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
	.plist-info-hd{
		width: 100%;
		height: 12.5rem;
		position: relative;
		overflow: hidden;
		margin-top: -100px;
		z-index: 2;
	}
	.plist-info-hd img{
		width: 100%;
		margin-top: -75px;
	}
	.plist-info-hd span {
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
</style>