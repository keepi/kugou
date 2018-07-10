import axios from 'axios'
import store from '@/store'

let oneLeve = axios.create({
	responseType: 'json',
	transformRequest(data){
		// 发送请求
		store.commit('updatedIsLoading', true)
		return data;
	},
	transformResponse(data){
		store.commit('updatedIsLoading', false)
		let o = {}
		if(data.list){
			o.data = data.list
			o.origin = 'singer'
		}else if(data.banner){
			o.data = data.data;
			o.banner = data.banner;
			o.origin = 'newSong'
		}else if(data.rank){
			o.data = data.rank.list;
			o.origin = 'rank'
		}else if(data.plist){
			o.data = data.plist.list.info;
			o.origin = 'plist'
		}else if(data.singers){
			o.data = data.singers.list.info;
			o.origin = 'singers-list'
		}else if(data.songs){
			o.data = data.songs.list;
			o.origin = 'singers-info'
		}
		return o;
	}
})

// 获取banner和新歌
export const getNewSongs = (newSongs) => {
	return oneLeve('/proxy/?json=true', {data: newSongs})
}

// 获取排行数据
export const getRankList = () => {
	return oneLeve('/proxy/rank/list?json=true')
}

// 获取歌单数据
export const getPList = () => {
	return oneLeve('/proxy/plist/index?json=true')
}

// 获取歌手数据
export const getSingers = () => {
	return oneLeve('/proxy/singer/class?json=true')
}

// 获取搜索数据
export const getSearch = (newSearch) => {
	return oneLeve('/proxy/?json=true', {data: newSearch})
}

// 根据排行榜id获取指定排行榜列表
export const getRankListById = (params) => {
	return axios.post('/proxy/rank/info/'+params+'?json=true').then(res => res)
}
// 点击新歌列表页,选择播放的歌曲
export const getPlayMusic = (params) => { 
	return axios.get('/mapi/api/v1/singer_header/get_by_hash?hash='+params+'&size=200&format=jsonp').then( res => res.data); 
};

// 歌手列表下，根据classId获取下级列表页
export const getSubSingerList = (params) => {
	return axios.get(`/proxy/singer/list/${params}?json=true`).then(res =>  res.data ) 
}

// 歌手分类列表下的 列表 的 详情页
export const getLastSingerInfo = (params) => {
	return axios.get(`/proxy/singer/info/${params}?json=true`).then(res => res.data )
}

// 歌单分类里列表下的 详情页
export const getPlistInfo = (params) => {
	return axios.get(`/proxy/plist/list/${params}?json=true`).then(res => res.data )
}

// 搜索歌曲
export const getSearchSongs = (params) => {
	return axios.get(`/search/api/v3/search/song?format=jsonp&keyword=${params}&page=1&pagesize=30&showtype=1&callbakc=kgJSONP406629604`)
}