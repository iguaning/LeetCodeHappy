import { ref } from 'vue'
import { defineStore } from 'pinia'
import moment from 'moment/moment'

export const useRefreshTable = defineStore('refresh', () => {
	let preHour = ref(0)
	let endHour = ref(0)
	let minute = ref(55)

	function setTime() {
		if (0 <= moment().minute() < 55) {
			preHour.value = moment().hour() - 1
			endHour.value = moment().hour()
		} else if (55 <= moment().minute() < 59) {
			preHour.value = moment().hour()
			endHour.value = moment().hour() + 1
		}
		// console.log('一分钟更新')
	}

	return { preHour, endHour, minute, setTime }
})