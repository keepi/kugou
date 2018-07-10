<template>
	<div class="plist-list">
		<div v-show="!getShowSubList">
			<div v-for="item,i in list"
			     @click="getPlistList(item.specialid)">	
			     <router-link :to="{ path:'/plist/list/'+item.specialid}">
					<mt-cell 
						:key="i"
						:title="item.specialname" :label="num2string(item.playcount)" is-link>
						<img slot="icon" :src="replaceUrl(item.imgurl)" width="100" height="100">
					</mt-cell>
				</router-link>
			</div>
		</div>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import {getPList} from '@/server'
	import store from '@/store'

	export default{
		name: 'plist',
		data() {
			return {
				list: []
			}
		},
		async created(){
			let {data} = await getPList();
			this.list = data.data;
		},
		methods: {
			replaceUrl(url){
				return url.replace(/{size}/g, 400)
			},
			num2string(num){
				return num.toString()
			},
			getPlistList(id){
				console.log(id)
			},
		},
		computed: {
			getShowSubList(){
		      	return this.$store.state.showSubList
		    }
		}
	}

</script>


<style>
	.plist-list .mint-cell-wrapper{
		padding:12px 0;
	}
	.plist-list .mint-cell-wrapper,{
		position: relative;
	}
	.plist-list .mint-cell-wrapper .mint-cell-text,
	.plist-list .mint-cell-wrapper .mint-cell-label{
		position: absolute;
	}
	.plist-list .mint-cell-wrapper img{
		float:left;
	}
	.plist-list .mint-cell-wrapper .mint-cell-text{
		left:115px;
		top:30px;
		width:55%;
		text-align: left;
		line-height: 27px;
		word-break: break-all;       
      	word-wrap: break-word;   
      	white-space: pre-wrap;
	}
	.plist-list .mint-cell-wrapper .mint-cell-label{
		left:115px;
		top:85px;
	}
</style>