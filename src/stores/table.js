import { ref } from 'vue'
import { defineStore } from 'pinia'
import { UserService } from '@/api/apis'

export const useTable = defineStore('table', () => {
	let tableData = ref([])
	let loading = ref(true)
	let searchContent = ref('')

	let targetTableData = ref([])

	const getTableInfo = () => {
    UserService.getTableInfo().then((res) => {
			tableData.value = res.data
		})
	}

	const getTargetInfo = () => {
		const params = {
			pn: 1,
			rn: 1000
		}
	  UserService.getTargetInfo(params).then((res) => {
			targetTableData.value = res.data
		})
	}

	return { tableData, loading, searchContent, targetTableData, getTableInfo, getTargetInfo }
})