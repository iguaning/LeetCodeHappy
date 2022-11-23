import { ref } from 'vue'
import { defineStore } from 'pinia'
import { FeedBackService } from '@/api/apis'

export const useFeedBackForm = defineStore('feedback_form', () => {
	const textarea = ref('')

	const submitFeedBack = () => {
		submitFeedBackInfo()
	}

	const submitFeedBackInfo = () => {
		if (textarea.value === '') {
			alert('反馈信息不能为空!')
			return
		}

		const feedBackParams = {
			msg: textarea.value
		}

		FeedBackService.submitFeedBackInfo(feedBackParams).then((res) => {
			console.log(res.data)
			if (res.data[0] === 0) {
				alert("反馈成功!");
			} else {
				alert(res.data[1]);
			}
		})
	}

	return { textarea, submitFeedBack }
})