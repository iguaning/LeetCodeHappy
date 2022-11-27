<template>
	<ul role="list" class="divide-y divide-gray-200">
		<li v-for="item in formLabelAlign.titleInfoType" :key="item.type" class="px-4 py-4 sm:px-0">
			<div class="bg-white overflow-hidden">
				<div class="px-4 py-1 sm:px-6 flex">
					<div>{{ item.content }}</div>
					<el-tag
							type=""
							class="mx-1"
							effect="dark"
							round
					>
						{{ item.company }}
					</el-tag>
					<el-tag
							type="warning"
							class="mx-1"
							effect="dark"
							round
					>
						#{{ item.type }}
					</el-tag>
				</div>
				<div class="px-4 py-5 sm:p-6">
					<!--					<el-input-->
					<!--							v-model="formLabelAlign.textarea"-->
					<!--							:autosize="{ minRows: 10, maxRows: 100 }"-->
					<!--							type="textarea"-->
					<!--							placeholder="作答区域"-->
					<!--					/>-->
					<code-editor></code-editor>
				</div>
				<div class="px-4 py-4 sm:px-6"><!-- --></div>
			</div>
		</li>
	</ul>
</template>

<script setup>
import { onMounted } from 'vue'

// 获取题目数据
import { useInterview } from '@/stores/interview'
import { storeToRefs } from 'pinia'
import CodeEditor from '@/components/codemirror/CodeEditor.vue'

const interviewStore = useInterview()
const { formLabelAlign } = storeToRefs(interviewStore)
const { getInterviewTitle } = interviewStore

onMounted(() => {
	getInterviewTitle()
})
</script>

<style scoped>

</style>