import Vue from 'vue'
import Router from 'vue-router'

import search from '@/view/search/search'
import gotoback from '@/components/gotoback/gotoback'  //返回
import rankList from '@/view/rankList/rankList'        //排行榜下的列表页

import { routes } from './route'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		...routes,
		{
			path:'/search',
			name:'search',
			title:'搜索',
			components:{
				gotoback: gotoback,
				default:search
			}
		},
		{
			path:'/rank/info',
			name: 'rankList',
			title: '排行榜',
			components: {
				rankList: rankList
			}
		}
	]
})
