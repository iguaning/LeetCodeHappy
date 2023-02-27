<template>
	<div class="flex items-center mb-4">
		<div class="mr-2">
			<MagnifyingGlassIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
		</div>
		<el-input v-model="searchContent" placeholder="搜索" />
	</div>
	<el-table
			:data="filterData"
			style="width: 100%"
			table-layout="fixed"
			height="calc(100vh - 90px)">
		<el-table-column fixed prop="user" label="用户" min-width="160" header-align="center" align="center" :sortable="true" :sort-method="(a, b)=>{ return a.user.toUpperCase().charCodeAt(0) - b.user.toUpperCase().charCodeAt(0) }">
			<template #default="scope">
				<div style="display: flex; align-items: center">
					<a :href="'https://leetcode.cn/u/' + scope.row.user" target="_blank" class="text-blue-400 hover:text-blue-300">{{ scope.row.user }}</a>
				</div>
			</template>
		</el-table-column>
    <el-table-column prop="honer_level" label="英雄称号" min-width="100" header-align="center" align="center">
      <template #default="scope">
				<el-tag type="" effect="light">{{ scope.row.honer_level }}</el-tag>
			</template>
    </el-table-column>
		<el-table-column prop="coins" label="能量值" header-align="center" align="center" :sortable="true" :sort-method="(a, b)=>{ return a.coins - b.coins }">
			<template #default="scope">
				<div>{{ scope.row.coins }}</div>
			</template>
		</el-table-column>
		<el-table-column prop="total_solve" label="总刷题量" header-align="center" align="center" :sortable="true" :sort-method="(a, b)=>{ return a.total_solve - b.total_solve }" />
		<el-table-column prop="rating_score" label="竞赛分数" header-align="center" align="center" :sortable="true" :sort-method="(a, b)=>{ return a.rating_score - b.rating_score }" />
		<el-table-column prop="continue_days" label="连续打卡天数" header-align="center" align="center" :sortable="true" :sort-method="(a,b)=>{ return a.continue_days - b.continue_days }" />
    <el-table-column prop="total_days" label="累计打卡天数" header-align="center" align="center" :sortable="true" :sort-method="(a,b)=>{ return a.total_days - b.total_days }" />
    <el-table-column label="今日刷题数量" header-align="center">
			<el-table-column prop="easy_num" label="EASY" header-align="center" align="center" :sortable="true" :sort-method="(a, b)=>{ return a.code_submit - b.code_submit }" />
			<el-table-column prop="mid_num" label="MID" header-align="center" align="center" :sortable="true" :sort-method="(a, b)=>{ return a.problem_submit - b.problem_submit }" />
      <el-table-column prop="hard_num" label="HARD" header-align="center" align="center" :sortable="true" :sort-method="(a, b)=>{ return a.problem_submit - b.problem_submit }" />
		</el-table-column>
		<el-table-column prop="new_solve" label="今日刷题得分" header-align="center" align="center" :sortable="true" :sort-method="(a, b)=>{ return a.new_solve - b.new_solve }">
			<template #default="scope">
				<div class="text-red-400 hover:text-red-300">{{ scope.row.new_solve }}</div>
			</template>
		</el-table-column>
		<el-table-column prop="lazy_days" label="懒惰称号" min-width="110" header-align="center" align="center">
			<template #default="scope">
				<el-tag :type="lazyDays(scope.row.lazy_days)">{{ scope.row.lazy_days }}</el-tag>
			</template>
		</el-table-column>
	</el-table>
</template>

<script setup>
import { computed } from 'vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
import { useTable } from '@/stores/table'
import { storeToRefs } from 'pinia'

const tableStore = useTable()
const { rankTable, searchContent } = storeToRefs(tableStore)

const filterData = computed(() => {
	let input = searchContent.value
	let items
	if (input) {
		items = rankTable.value.filter(function (item) {
			return Object.keys(item).some(function (key1) {
				return String(item[key1]).toLowerCase().match(input)
			})
		})
	} else {
		items = rankTable.value
	}
	return items
})

const lazyDays = (lazy) => {
	return lazy === '正常' || lazy === '懒惰萌芽期' || lazy === '懒惰炼气期' ? 'success' :
			(lazy === '懒惰筑基期' || lazy === '懒惰结丹期' || lazy === '懒惰元婴期' ? 'warning' : 'danger')
}
</script>
