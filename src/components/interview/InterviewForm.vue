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
				>
					<span style="float: left">{{ item.name }}</span>
					<span
							style="
          float: right;
          color: var(--el-text-color-secondary);
          font-size: 13px;
        "
					>
						{{ titleNum(item.name) }}
					</span>
				</el-option>
			</el-select>
		</el-form-item>
	</el-form>
</template>

<script setup>
import { onMounted } from 'vue'
import { useInterview } from '@/stores/interview'
import { storeToRefs } from 'pinia'

const typeStore = useInterview()
const { formLabelAlign } = storeToRefs(typeStore)
const { getInterviewTitle, getInterviewType, selectOne, titleNum } = typeStore

onMounted(() => {
	getInterviewType()
})
</script>

<style scoped>
.el-select.m-2 {
	margin: 0;
}
</style>