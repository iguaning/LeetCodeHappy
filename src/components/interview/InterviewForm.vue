<template>
	<el-form
			label-position="left"
			:model="formLabelAlign"
	>
		<el-form-item label="题型选择">
			<el-select v-model="formLabelAlign.value"
			           :value-key="formLabelAlign.value"
			           class="m-2"
			           placeholder="请选择题型"
			           @change="selectOne(formLabelAlign.value)">
				<el-option
						v-for="item in formLabelAlign.typeInfo"
						:key="item.type"
						:label="item.name"
						:value="item.name"
				/>
			</el-select>
		</el-form-item>
	</el-form>
</template>

<script setup>
import { useInterview } from '@/stores/interview'
import { storeToRefs } from 'pinia'

const typeStore = useInterview()
const { formLabelAlign } = storeToRefs(typeStore)
const { getInterviewType, selectOne } = typeStore

getInterviewType()
</script>

<style scoped>
.el-select.m-2 {
	margin: 0;
}
</style>