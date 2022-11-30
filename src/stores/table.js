import { ref } from 'vue'
import { defineStore } from 'pinia'
import { UserService } from '@/api/apis'

export const useTable = defineStore('table', () => {
	let rankTable = ref([])
	let searchContent = ref('')
	let targetTable = ref([])

	const getRankTable = () => {
    UserService.getTable().then((res) => {
	    rankTable.value = res.data
		})
	}

	const getTargetTable = () => {
		const params = {
			pn: 1,
			rn: 1000
		}
	  UserService.getTarget(params).then((res) => {
		  targetTable.value = res.data
		})
	}

	return { rankTable, searchContent, targetTable, getRankTable, getTargetTable }
})