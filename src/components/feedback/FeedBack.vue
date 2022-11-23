<template>
	<el-input
			v-model="textarea"
			:autosize="{ minRows: 5, maxRows: 10 }"
			type="textarea"
			placeholder="意见反馈"
			class="mb-4"
	/>
	<el-form-item class="mb-4 text-right">
		<el-button type="primary" @click="submitFeedBack">提交意见</el-button>
	</el-form-item>
</template>

<script setup>
import { useFeedBackForm } from '@/stores/feedBackForm'
import { storeToRefs } from 'pinia'

const feedBackFormStore = useFeedBackForm()
const { textarea } = storeToRefs(feedBackFormStore)
const { submitFeedBack } = feedBackFormStore
</script>