<template>
	<div>
		<mt-search
			v-model="value"
			@keyup.enter.native="searchSongs(value)"
			cancel-text="取消"
			placeholder="搜索">
		</mt-search>
		<mt-cell class="song-cell"
		         v-show="!isSearch" 
				 v-for="item in list" 
				 :title="item.filename"
			     :key="item.hash" is-link>
		</mt-cell>
		<mt-cell class="song-cell" 
				 v-show="isSearch"
				 v-for="item in result" 
				 :title="item.filename"
				 :key="item.hash" is-link>
		</mt-cell>
	</div>
</template>

<script>
	import {getNewSongs, getSearchSongs} from '@/server'
	export default {
		name: 'search',
		data(){
			return {
				list: [],
				value: '',
				result: [],
				isSearch: false
			}
		},
		async created(){
			let {data} = await getNewSongs({loading: 2});
			this.list = data.data;
		},
		methods: {
			searchSongs(value){
				var url = `http://mobilecdn.kugou.com/api/v3/search/song?format=jsonp`;

				this.$http.jsonp(url,{
					params: {keyword: value},
					jsonp: 'callback'
				}).then( function(res){
					this.isSearch = true
					this.result = res.body.data.info
					console.log(this.result)
				}, function(err){
					console.log(err)
				})
			},
		},
		
	}
</script> 

<style>
	.mint-search{
		height:100%;
		margin-bottom: 10px;
	}
	.song-cell{
		text-align: left;
	}
</style>