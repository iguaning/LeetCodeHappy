import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { UserService } from '@/api/apis'

export const useTargetTable = defineStore('target', () => {
	let targetTableData = reactive([])

	function getTargetInfo() {
		const getTargetParams = {
			pn: 1,
			rn: 50
		}
		UserService.getTargetInfo(getTargetParams).then((res) => {
			// console.log(res.data)
			for (let i = 0; i < res.data.length; ++i) {
				targetTableData.push(res.data[i])
			}
			// console.log(targetTableData)
		})
	}

	return { targetTableData, getTargetInfo }
})