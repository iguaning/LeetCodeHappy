import { ref } from 'vue'
import { defineStore } from 'pinia'
import moment from 'moment/moment'

export const useRefreshTable = defineStore('refresh', () => {
	let preTime = ref()
	let currentTime = ref()
	let endTime = ref()

	function setTime() {
		currentTime = moment()
		if (0 <= currentTime.minute() < 55) {
			preTime.value = moment({hour: currentTime.hour() - 1, minute: 55})
			endTime.value = moment({hour: currentTime.hour(), minute: 55})
		} else {
			preTime.value = moment({hour: currentTime.hour(), minute: 55})
			endTime.value = moment({hour: currentTime.hour() + 1, minute: 55})
		}
	}

	function refreshTable() {
		setTime()
	}

	return { preTime, currentTime, endTime, refreshTable }
})