import { ref } from 'vue'
import { defineStore } from 'pinia'
import { FeedBackService } from '@/api/apis'

export const useFeedBack = defineStore('feedback', () => {
	//获取反馈信息
	let listData = ref([])

	const getFeedBackList = () => {
		const feedBackParams = {
			pn: 1,
			rn: 1000
		}

		FeedBackService.getList(feedBackParams).then((res) => {
			listData.value = res.data
		})
	}

	//提交反馈信息
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

		FeedBackService.submitInfo(feedBackParams).then((res) => {
			if (res.data[0] === 0) {
				alert("反馈成功!");
			} else {
				alert(res.data[1]);
			}
		})
	}

	return { listData, textarea, getFeedBackList, submitFeedBack }
})