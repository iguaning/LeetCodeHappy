<template>
	<ul role="list" class="divide-y divide-gray-200">
		<li v-for="item in formLabelAlign.titleInfoType" :key="item.type" class="px-4 py-4 sm:px-0">
			<div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
				<div class="px-4 py-5 sm:px-6">
					企业：{{ item.company }}
					<br>
					题目：{{ item.content }}
				</div>
				<div class="px-4 py-5 sm:p-6">
					作答区域
				</div>
				<div class="px-4 py-4 sm:px-6">
					{{ item.type }} 提交区域
				</div>
			</div>
		</li>
	</ul>
</template>

<script setup>
import { useInterview } from '@/stores/interview'
import { storeToRefs } from 'pinia'

const interviewStore = useInterview()
const { formLabelAlign } = storeToRefs(interviewStore)
const { getInterviewTitle } = interviewStore

getInterviewTitle()
</script>

<style scoped>

</style>