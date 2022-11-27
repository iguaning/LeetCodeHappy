import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import { InterviewService } from '@/api/apis'

export const useInterview = defineStore('interview', () => {
	const formLabelAlign = reactive({
		username: '',

		typeInfo: [],
		value: '',

		titleInfo: [],
		titleInfoType: [],
		textarea: '',
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

	const titleNum = (tp) => {
		let number = 0
		for (let i = 0; i < formLabelAlign.titleInfo.length; ++i) {
			if (formLabelAlign.titleInfo[i].type === tp) {
				number += 1
			}
		}
		return number
	}

	return { formLabelAlign, getInterviewTitle, getInterviewType, selectOne, titleNum }
})