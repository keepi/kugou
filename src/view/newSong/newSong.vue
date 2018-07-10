<template>
	<div class="new-song-list">
		<!-- banner -->
		<div class="new-song-banner">
			<mt-swipe :auto="5000">
				<mt-swipe-item v-for="item in banner" 
				               :key="item.id">
					<img :src="item.imgurl" />
				</mt-swipe-item>
			</mt-swipe>
		</div>

		<!-- songList -->
		<div class="new-song">
			<div v-for="item,i in list"
			     @click="play(item.filename, item.hash, i)" 
			     class="cell">
		    	<p :key="item.hash"
		    	   class="cell-text">
		    		{{item.filename}}
		    	</p>
		    	<div class="download"><i></i></div>
	    	</div>
		</div>

		<!-- radio -->
		<div class="radio-bar" v-show="playMusic">
			<a href="javascript" class="goInfo">
				<div class="fl-img">
					<img :src="playMusicImg"/>
				</div>
				<div class="center">
					<p class="songName">{{playSongName}}</p>
					<p class="singerName">{{playSingerName}}</p>
				</div>
			</a>	
			<div class="rt-icon" >
				<i :class="['btnPause', {'btnPlay': isPlaying}]" 
				   @click="isPlay()"></i>
				<i class="btnNext" @click="playNext(index)"></i>
				<i class="btnDownLoad"></i>
			</div>
			
		</div>
	</div>
</template>

<script>
	import {getNewSongs, getPlayMusic} from '@/server'
	export default {
		name: 'newSong',
		data(){
			return {
				banner: [],
				list: [],
				playMusic: false,
				playMusicImg: '',
				playSongName: '',
				playSingerName: '',
				isPlaying: false,
				index: ''
			}
		},
		methods: {
			play(songsItemName, hash, i){
				getPlayMusic(hash).then((res) => {
					if(res.status == 1){
						this.playMusicImg = res.url;
						this.playMusic = true
						this.index = i						
						var arr = songsItemName.split(' - ')
						this.playSongName = arr[1];
						this.playSingerName = arr[0];
					}else{
						this.playMusicImg = ''
						this.playMusic = false
						this.index = ''
					}
				}).catch((err) => {
					console.log(err)
				})
			},
			isPlay(){
				this.isPlaying = !this.isPlaying
			},
			playNext(i){
				if( i < this.list.length-1 ){
					this.play(this.list[i+1].filename, this.list[i+1].hash, i+1)
				}else{
					this.play(this.list[0].filename, this.list[0].hash, 0)
				}
			}
		},
		async created(){
			let {data} = await getNewSongs({loading: 2})
			this.banner = data.banner;
			this.list = data.data;
		}
	}

</script>

<style scoped>
	.new-song-banner {
	    height: 8.54rem;
	  }
  	.new-song-banner img {
    	width: 100%;
  	}
	.new-song,
	.cell {
		text-align: left;
	}
	.cell {
		border-bottom: 1px solid #d9d9d9;
		position: relative;
	}
	.cell .cell-text{
		padding:1rem 2.657rem 1rem .375rem;
		width: 100%;
		height: 3rem;
		display: table-cell;
		vertical-align: middle;
		margin: 0;
		font-size: 1.0143rem;
	}
	.download {
		width: 2.54rem;
		height: 100%;
		position: absolute;
		top: 0;
		right: 0;
		text-align: center;
	}
	.download i {
		width: 1.0357rem;
		height: 1.0814rem;
		margin-top: 1.9rem;
		display: inline-block;
		background: url(http://m.kugou.com/v3/static/images/index/download_icon_2.png) no-repeat;
		background-size: 100%;
	}
	.goInfo {
		width: 65%;
		display: block;
	}
	.fl-img,
	.center,
	.rt-icon {
		display: inline-block;
		vertical-align:middle;
	}
	.radio-bar {
		width: 100%;
		height: 4.2143rem;
		position: fixed;
		left: 0;
		bottom: 0;
		background: rgba(0,0,0, .9);
		color:#fff;
	}

	.fl-img {
		width: 3.75rem;
		height: 3.75rem;
		margin: .2143rem .535rem .2143rem .2143rem;
	}
	.fl-img img {
		width: 100%;
		height: 100%;
		border-radius: 5px;
	}
	.center {
		width: 65%;
	}
	.center p {
		margin:0;
		text-align: left;
	}
	.songName {
		width:100%;
		line-height: 1.7;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: .8571rem;
		color:#fff;
	}
	.singerName {
		line-height: 1.3rem;
		font-size: .7143rem;
		color:#888;
	}
	.rt-icon {
		position: absolute;
		top:1.0714rem;
		right:.7143rem;
	}

	.btnPause,
	.btnPlay,
	.btnNext,
	.btnDownLoad {
		width: 1.786rem;
		height: 1.786rem;
		margin-left: 1rem;
		display: inline-block;
		vertical-align: middle;
		cursor: pointer;
	}
	.btnPause {
		background: url(http://m.kugou.com/v3/static/images/index/pause_icon.png) no-repeat;
		background-size: 100%;
	}
	.btnPlay {
		background: url(http://m.kugou.com/v3/static/images/index/play_icon.png) no-repeat;
		background-size: 100%;
	}
	.btnNext {
		background: url(http://m.kugou.com/v3/static/images/index/next_icon.png) no-repeat;
		background-size: 100%;
	}
	.btnDownLoad {
		background: url(http://m.kugou.com/v3/static/images/index/download_icon.png) no-repeat;
		background-size: 100%;
	}
</style>