<template>
	<mt-header class="search" id="search-bar" title="搜索">
		<router-link to="/" slot="left">
		  	<mt-button icon="back"></mt-button>
		</router-link>
	</mt-header>
</template>
<script type="text/javascript">
	export default {
		name: 'gotoback',
		mounted() {
			window.addEventListener('scroll', this.handleScroll)
		},
		methods: {
			handleScroll() {
				var bar = document.getElementById('search-bar');
				if(window.scrollY >= 58){
					bar.style.cssText = `
						position:fixed;
						top: 3.2rem;
						left: 0;
						z-index: 3;
						width: 100%;
						height: 42px;
						background: rgba(255, 255, 255, 1);
					`
				}else{
					bar.style.cssText = ` `
				}
			}
		}
		
	}
</script>

<style>
	.search{
		width: 100%;
		background: #fff;
		color:#666;
	}
</style>