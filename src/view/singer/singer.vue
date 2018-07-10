<template>
	<div class="singer-list">
		<div class="parentList" v-show="!getShowSubList">
			<div v-for="item in list">
			<router-link :to="{ path:'/singer/list/'+item.classid}">
				<!--  -->
				<div @click="storeClassId(item.classid)" >
					<mt-cell
					    :title="item.classname"
					    :key="item.classid" 
					    is-link>
					    
					    <img slot="icon" :src="item.imgurl" width="100" height="100">
					</mt-cell>
				</div>
				
			</router-link>
			</div>
		</div>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import {getSingers, getSubSingerList} from '@/server'
	import store from '@/store'
	import localStorage from '@/js/localStorage'

	export default {
		name: 'singer',
		data(){
			return {
				list: [],
			}
		},
		async created(){
			let {data} = await getSingers()
			this.list = data.data
		},
		computed: {
			getShowSubList(){
		      return this.$store.state.showSubList
		    }
		},
		methods: {
			storeClassId(id) {
				localStorage.save(id)
			}
		}
	}
</script>
<style type="text/css">
	a{
		color:#666;
	}
	.singer-list{
		text-align: left;
	}
	.mint-cell{
		padding:0.723rem;
	}
</style>