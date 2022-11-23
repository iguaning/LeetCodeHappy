import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { InterviewService } from '@/api/apis'

export const useInterview = defineStore('interview', () => {
	const formLabelAlign = reactive({
		username: '',

		typeInfo: [],
		value: '',

		titleInfo: [],
		titleInfoType: []
	})

	const getInterviewType = () => {
		InterviewService.getInterviewType().then((res) => {
			formLabelAlign.typeInfo = res.data
			// console.log(formLabelAlign.typeInfo)
		})
	}

	const getInterviewTitle = () => {
		const params = {
			pn: 1,
			rn: 1000
		}
		InterviewService.getInterviewTitle(params).then((res) => {
			formLabelAlign.titleInfo = res.data
			// console.log(formLabelAlign.titleInfo)
		})
	}

	const selectOne = (val) => {
		formLabelAlign.titleInfoType = formLabelAlign.titleInfo.filter(item => item.type === val)
	}

	return { formLabelAlign, getInterviewTitle, getInterviewType, selectOne }
})