<template>
	<mt-navbar v-model="selected">
			<mt-tab-item
		  		v-for="item in routes"
		  		:id="item.path"
		  		:key="item.path">
		  		
		  			<router-link
			  			tag="div" 
			  			:to="{path:item.path}">
			  			{{item.title}}
			  		</router-link>
		  		
		  		
		  	</mt-tab-item>
	</mt-navbar>
	
</template>

<script>
import {routes} from '@/router/route'

export default {
	data(){
		return {
			selected: '/',
			routes,
			
		}
	},
	created(){
		this.selected = this.$route.path;
	},
	methods: {
		
	},

}

</script>

<style>
	
</style>