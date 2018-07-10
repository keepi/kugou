const KG_KEY = 'classId';
export default {
	save(data) {
		window.localStorage.setItem(KG_KEY, JSON.stringify(data))
	},

	fetch() {
		return JSON.parse(window.localStorage.getItem(KG_KEY) || '[]')
	}
}