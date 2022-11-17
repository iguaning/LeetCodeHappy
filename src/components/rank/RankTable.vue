<template>
	<div class="flex">
		🔎<el-input v-model="searchContent" placeholder="搜索" />
	</div>
	<el-table
			ref="searchTable"
			:data="filterData"
			style="width: 100%"
			height="100%"
			v-loading="loading">
		<el-table-column fixed prop="user" label="用户" width="calc(100% / 8)" header-align="left">
			<template #default="scope">
				<div style="display: flex; align-items: center">
					<a :href="'https://leetcode.cn/u/' + scope.row.user" target="_blank" class="text-blue-400 hover:text-blue-300">{{ scope.row.user }}</a>
				</div>
			</template>
		</el-table-column>
		<el-table-column prop="total_solve" label="总刷题量" width="calc(100% / 8)" header-align="center" align="center" />
		<el-table-column prop="code_submit" label="代码行数贡献" width="calc(100% / 8)" header-align="center" align="center" />
		<el-table-column prop="problem_submit" label="代码题量贡献" width="calc(100% / 8)" header-align="center" align="center" />
		<el-table-column prop="rating_score" label="竞赛分数" width="calc(100% / 8)" header-align="center" align="center" />
		<el-table-column prop="continue_days" label="连续打卡天数" width="calc(100% / 8)" header-align="center" align="center" />
		<el-table-column prop="new_solve" label="今日刷题数量" width="calc(100% / 8)" header-align="center" align="center">
			<template #default="scope">
				<div class="text-red-400 hover:text-red-300">{{ scope.row.new_solve }}</div>
			</template>
		</el-table-column>
		<el-table-column prop="lazy_days" label="懒惰称号" width="calc(100% / 8)" header-align="center" align="center">
			<template #default="scope">
				<div :class="[scope.row.lazy_days === '正常' || scope.row.lazy_days === '懒惰萌芽期' || scope.row.lazy_days === '懒惰炼气期' ? 'text-green-500' : (scope.row.lazy_days === '懒惰筑基期' || scope.row.lazy_days === '懒惰结丹期' || scope.row.lazy_days === '懒惰元婴期' ? 'text-yellow-400' : 'text-red-400')]">{{ scope.row.lazy_days }}</div>
			</template>
		</el-table-column>
	</el-table>
</template>

<script setup>
import { onMounted, reactive, ref, computed } from 'vue'
import { UserService } from '@/api/apis'

let tableData = reactive([])
let searchContent = ref()
const loading = ref(true)

const getTableInfo = () => {
	UserService.getTableInfo().then((res) => {
		// console.log(res.data)
		for (let i in res.data) {
			tableData.push(res.data[i])
		}
		// console.log(tableData)
	})
}

getTableInfo()

const filterData = computed(() => {
	let input = searchContent.value
	let items
	if (input) {
		items = tableData.filter(function (item) {
			return Object.keys(item).some(function (key1) {
				return String(item[key1]).toLowerCase().match(input)
			})
		})
	} else {
		items = tableData
	}
	return items
})

onMounted(() => {
	loading.value = false
})
</script>
