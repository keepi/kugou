import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
	state: {
		isLoading: true,
		fetchRankList: [],
		showSubList: false,
	},
	mutations: {
		updatedIsLoading(state, loading){
			state.isLoading = loading;
		},
		updatedShowSubList(state, bool){
			state.showSubList = bool;
		},
		
	},
	actions: {
		getRankList(store, rankObj){
			this.state.fetchRankList = rankObj;
		}
	}
})

export default store;