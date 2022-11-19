import { ref } from 'vue'
import { defineStore } from 'pinia'
import moment from 'moment/moment'

export const useRefreshTable = defineStore('refresh', () => {
	let currentTime = ref()
	let preHour = ref()
	let endHour = ref()
	let minute = ref(55)

	function setTime() {
		currentTime.value = moment()
		preHour.value = currentTime.value.hour()
		endHour.value = currentTime.value.hour()
		if (0 <= currentTime.value.minute() < 55) {
			preHour.value--
			endHour.value = currentTime.value.hour()
		} else if (55 <= currentTime.value.minute() <= 59) {
			preHour.value = currentTime.value.hour()
			endHour.value++
		}
		// console.log('一分钟更新')
	}

	function refreshTime() {
		setTime()
	}

	return { preHour, endHour, minute, refreshTime }
})