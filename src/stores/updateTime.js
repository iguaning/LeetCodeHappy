import { ref } from 'vue'
import { defineStore } from 'pinia'
import moment from 'moment/moment'

export const useRefreshTable = defineStore('refresh', () => {
	let preHour = ref(moment().hour())
	let endHour = ref(moment().hour())
	let minute = ref(55)

	const setTime = () => {
		if (0 <= moment().minute() < 55) {
			preHour.value--
		} else if (55 <= moment().minute() < 59) {
			endHour.value++
		}
	}

	return { preHour, endHour, minute, setTime }
})