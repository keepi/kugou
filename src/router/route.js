import navBar from '@/components/nav/nav'
import singerList from '@/view/singerList/singerList'  //歌手分类下的歌手list
import singerInfo from '@/view/singerInfo/singerInfo'  //歌手分类下的歌手list下的歌单
import plistInfo from '@/view/plistInfo/plistInfo'

let newSong = () => import('@/view/newSong/newSong')   //新歌
let plist = () => import('@/view/plist/plist') 	       //歌单
let rank = () => import('@/view/rank/rank')   	       //排行
let singer = () => import('@/view/singer/singer')      //歌手

export let routes = [
	{
		path: '/',
		title: '新歌',
		name: 'newSong',
		components: {
			navBar: navBar,
			default: newSong
		}
	},
	{
		path: '/rank',
		title: '排行',
		name: 'rank',
		components: {
			navBar: navBar,
			default: rank
		}
	},
	{
		path: '/plist',
		title: '歌单',
		name: 'plist',
		components: {
			navBar: navBar,
			default: plist
		},
		children: [
			{
				path: 'list/:plistInfoId',
				name: 'plistInfo',
				component: plistInfo
			}
		]
	},
	{
		path: '/singer',
		title: '歌手',
		name: 'singer',
		components: {
			navBar: navBar,
			default: singer
		},
		children: [
			{
				path: 'list/:listId',
				name: 'singerList',
				component: singerList
			},
			{
				path: 'info/:infoId',
				name: 'singerInfo',
				component: singerInfo
			}
		]
	}
]
