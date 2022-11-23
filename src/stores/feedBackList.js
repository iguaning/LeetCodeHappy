import { ref } from 'vue'
import { defineStore } from 'pinia'
import { FeedBackService } from '@/api/apis'

export const useFeedBackList = defineStore('feedback_list', () => {
	let listData = ref([])

	const getFeedBackList = () => {
		const feedBackParams = {
			pn: 1,
			rn: 20
		}

		FeedBackService.getFeedBackList(feedBackParams).then((res) => {
			listData.value = res.data
		})
	}

	return { listData, getFeedBackList }
})