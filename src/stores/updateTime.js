import { ref } from 'vue'
import { defineStore } from 'pinia'
import moment from 'moment/moment'

export const useRefreshTable = defineStore('refresh', () => {
	let preTime = ref()
	let currentTime = ref(moment())
	let endTime = ref()

	function refreshTable() {
		if (0 <= currentTime.value.minute() < 55) {
			preTime.value = moment({hour: currentTime.value.hour() - 1, minute: 55})
			endTime.value = moment({hour: currentTime.value.hour(), minute: 55})
		} else {
			preTime.value = moment({hour: currentTime.value.hour(), minute: 55})
			endTime.value = moment({hour: currentTime.value.hour() + 1, minute: 55})
		}
	}

	return { preTime, endTime, refreshTable }
})