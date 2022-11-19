<template>
	<div class="flex items-center">
		<div class="mr-1">🔎</div>
		<el-input v-model="searchContent" placeholder="搜索" />
	</div>
	<el-table
			ref="searchTable"
			:data="filterData"
			style="width: 100%"
			height="99%"
			v-loading="loading">
		<el-table-column fixed prop="user" label="用户" width="180" header-align="left">
			<template #default="scope">
				<div style="display: flex; align-items: center">
					<a :href="'https://leetcode.cn/u/' + scope.row.user" target="_blank" class="text-blue-400 hover:text-blue-300">{{ scope.row.user }}</a>
				</div>
			</template>
		</el-table-column>
		<el-table-column prop="coins" label="能量值" width="calc((100% - 300) / 7)" header-align="center" align="center" :sortable="true" :sort-method="(a,b)=>{return a.coins - b.coins}">
			<template #default="scope">
				<div>🪙{{ scope.row.coins }}</div>
			</template>
		</el-table-column>
		<el-table-column prop="total_solve" label="总刷题量" width="calc((100% - 300) / 7)" header-align="center" align="center" :sortable="true" :sort-method="(a,b)=>{return a.total_solve - b.total_solve}" />
		<el-table-column prop="code_submit" label="代码行数贡献" width="calc((100% - 300) / 7)" header-align="center" align="center" :sortable="true" :sort-method="(a,b)=>{return a.code_submit - b.code_submit}" />
		<el-table-column prop="problem_submit" label="代码题量贡献" width="calc((100% - 300) / 7)" header-align="center" align="center" :sortable="true" :sort-method="(a,b)=>{return a.problem_submit - b.problem_submit}" />
		<el-table-column prop="rating_score" label="竞赛分数" width="calc((100% - 300) / 7)" header-align="center" align="center" :sortable="true" :sort-method="(a,b)=>{return a.rating_score - b.rating_score}" />
		<el-table-column prop="continue_days" label="连续打卡天数" width="calc((100% - 300) / 7)" header-align="center" align="center" :sortable="true" :sort-method="(a,b)=>{return a.continue_days - b.continue_days}" />
		<el-table-column prop="new_solve" label="今日刷题数量" width="calc((100% - 300) / 7)" header-align="center" align="center" :sortable="true" :sort-method="(a,b)=>{return a.new_solve - b.new_solve}">
			<template #default="scope">
				<div class="text-red-400 hover:text-red-300">{{ scope.row.new_solve }}</div>
			</template>
		</el-table-column>
		<el-table-column prop="lazy_days" label="懒惰称号" width="120" header-align="center" align="center">
			<template #default="scope">
				<el-tag :type="scope.row.lazy_days === '正常' || scope.row.lazy_days === '懒惰萌芽期' || scope.row.lazy_days === '懒惰炼气期' ? 'success' : (scope.row.lazy_days === '懒惰筑基期' || scope.row.lazy_days === '懒惰结丹期' || scope.row.lazy_days === '懒惰元婴期' ? 'warning' : 'danger')">{{ scope.row.lazy_days }}</el-tag>
			</template>
		</el-table-column>
	</el-table>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { UserService } from '@/api/apis'

let tableData = ref([])
let loading = ref(true)
let searchContent = ref('')

const getTableInfo = () => {
	UserService.getTableInfo().then((res) => {
		// console.log(res.data)
		tableData.value = res.data
		// console.log(tableData)
	})
}

getTableInfo()

const filterData = computed(() => {
	let input = searchContent.value
	let items
	if (input) {
		items = tableData.value.filter(function (item) {
			return Object.keys(item).some(function (key1) {
				return String(item[key1]).toLowerCase().match(input)
			})
		})
	} else {
		items = tableData.value
	}
	return items
})

onMounted(() => {
	loading.value = false
})
</script>
