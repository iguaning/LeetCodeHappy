import { ref } from 'vue'
import { defineStore } from 'pinia'
import { UserService } from '@/api/apis'

export const useTargetTable = defineStore('target_table', () => {
	let targetTableData = ref([])

	function getTargetInfo() {
		const getTargetParams = {
			pn: 1,
			rn: 50
		}
		UserService.getTargetInfo(getTargetParams).then((res) => {
			// console.log(res.data)
			targetTableData.value = res.data
			// console.log(targetTableData)
		})
	}

	return { targetTableData, getTargetInfo }
})