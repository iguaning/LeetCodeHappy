<template>
	<el-input
			v-model="textarea"
			:autosize="{ minRows: 5, maxRows: 10 }"
			type="textarea"
			placeholder="意见反馈"
			class="mb-4"
	/>
	<el-button class="mb-4" type="primary" @click="submitFeedBack">提交意见</el-button>
</template>

<script setup>
import { useFeedBack } from '@/stores/feedback'
import { storeToRefs } from 'pinia'

const feedBackStore = useFeedBack()
const { textarea } = storeToRefs(feedBackStore)
const { submitFeedBack, getFeedBackList } = feedBackStore

const submit = () => {
	submitFeedBack()
	setTimeout(() => {
		getFeedBackList()
	}, 1000)
}
</script>