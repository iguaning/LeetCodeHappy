<template>
  <el-table
		  :data="targetTableData"
		  style="width: 100%"
		  table-layout="fixed"
		  height="calc(100vh - 300px)">
    <el-table-column prop="user" label="用户" width="160" header-align="center" align="center" fixed>
      <template #default="scope">
        <el-link type="primary" :underline="false" :href="'https://leetcode.cn/u/' + scope.row.user" target="_blank">{{ scope.row.user }}</el-link>
      </template>
    </el-table-column>
    <el-table-column prop="target_type" label="目标类型" header-align="center" align="center" />
<!--	  <el-table-column prop="target_value" label="目标值"  header-align="center" align="center">-->
<!--		  <template #default="scope">-->
<!--			  <div v-if="scope.row.target_type === '连续打卡天数'">{{ moment(scope.row.dead_line).diff(moment(scope.row.create_date), 'day') }}</div>-->
<!--			  <div v-else-if="scope.row.target_type === '挑战PK'">-->
<!--				  自己:{{ getRate(scope.row.user) }}-->
<!--					<br>-->
<!--				  对手:{{ getRate(scope.row.opponent) }}</div>-->
<!--			  <div v-else>{{ scope.row.target_value }}</div>-->
<!--		  </template>-->
<!--	  </el-table-column>-->
	  <el-table-column label="目标值" header-align="center">
		  <el-table-column label="当前" header-align="center" align="center">
			  <template #default="scope">
				  <div v-if="scope.row.target_type === '总刷题量'">{{ getSolve(scope.row.user) }}</div>
				  <div v-else-if="scope.row.target_type === 'push代码行数'">{{ getCode(scope.row.user) }}</div>
				  <div v-else-if="scope.row.target_type === 'push代码题量'">{{ getProblem(scope.row.user) }}</div>
				  <div v-else-if="scope.row.target_type === '连续打卡天数'">{{ getDays(scope.row.user) }}</div>
				  <div v-else-if="scope.row.target_type === '竞赛分数'">{{ getRate(scope.row.user) }}</div>
				  <div v-else>{{ getRate(scope.row.user) }}</div>
			  </template>
		  </el-table-column>
		  <el-table-column label="预期" header-align="center" align="center">
			  <template #default="scope">
				  <div v-if="scope.row.target_type === '总刷题量'">{{ scope.row.target_value }}</div>
				  <div v-else-if="scope.row.target_type === 'push代码行数'">{{ scope.row.target_value }}</div>
				  <div v-else-if="scope.row.target_type === 'push代码题量'">{{ scope.row.target_value }}</div>
				  <div v-else-if="scope.row.target_type === '连续打卡天数'">{{ Number(getDays(scope.row.user)) + Number(moment(scope.row.dead_line).diff(moment(scope.row.create_date), 'day')) }}</div>
				  <div v-else-if="scope.row.target_type === '竞赛分数'">{{ scope.row.target_value }}</div>
				  <div v-else>{{ getRate(scope.row.opponent) }}</div>
			  </template>
		  </el-table-column>
	  </el-table-column>
    <el-table-column prop="opponent" label="PK对手" min-width="160" header-align="center" align="center">
      <template #default="scope">
        <el-link v-if="scope.row.target_type === '挑战PK'" type="primary" :underline="false" :href="'https://leetcode.cn/u/' + scope.row.opponent" target="_blank">{{ scope.row.opponent }}</el-link>
	      <el-link v-else type="primary" :underline="false" :href="'https://leetcode.cn/u/' + scope.row.user" target="_blank">{{ scope.row.user }}</el-link>
      </template>
    </el-table-column>
	  <el-table-column prop="level" label="难易程度" min-width="135" header-align="center" align="center">
		  <template #default="scope">
			  <el-tag :type="scope.row.level === 'VERY_EASY' || scope.row.level === 'EASY' ? 'success' : (scope.row.level === 'MID' ? '' : (scope.row.level === 'LITTLE_HARD' || scope.row.level === 'VERY_HARD' ? 'warning' : 'danger'))" :underline="false">{{ scope.row.level }}</el-tag>
		  </template>
	  </el-table-column>
    <el-table-column prop="status" label="状态" min-width="135" header-align="center" align="center">
      <template #default="scope">
        <el-tag effect="dark" :type="scope.row.status === '已完成' ? 'success' : (scope.row.status === '进行中' ? 'warning' : 'danger')" :underline="false">{{ scope.row.status }}</el-tag>
      </template>
    </el-table-column>
	  <el-table-column prop="create_date" label="创建日期" min-width="110" header-align="center" align="center">
		  <template #default="scope">
			  <div>{{ moment(scope.row.create_date).format('YYYY-MM-DD') }}</div>
		  </template>
	  </el-table-column>
	  <el-table-column prop="dead_line" label="完成日期" min-width="110" header-align="center" align="center">
		  <template #default="scope">
			  <div>{{ moment(scope.row.dead_line).format('YYYY-MM-DD') }}</div>
		  </template>
	  </el-table-column>
  </el-table>
</template>

<script setup>
import { onMounted } from 'vue'
import { useTable } from '@/stores/table'
import { storeToRefs } from 'pinia'
import moment from 'moment'

const tableStore = useTable()
const { tableData, targetTableData } = storeToRefs(tableStore)
const { getTableInfo, getTargetInfo } = tableStore

const getSolve = (name) => {
	for (let i = 0; i < tableData.value.length; ++i) {
		if (tableData.value[i].user === name){
			return tableData.value[i].total_solve
		}
	}
}

const getCode = (name) => {
	for (let i = 0; i < tableData.value.length; ++i) {
		if (tableData.value[i].user === name){
			return tableData.value[i].code_submit
		}
	}
}

const getProblem = (name) => {
	for (let i = 0; i < tableData.value.length; ++i) {
		if (tableData.value[i].user === name){
			return tableData.value[i].problem_submit
		}
	}
}

const getDays = (name) => {
	for (let i = 0; i < tableData.value.length; ++i) {
		if (tableData.value[i].user === name){
			return tableData.value[i].continue_days
		}
	}
}

const getRate = (name) => {
	for (let i = 0; i < tableData.value.length; ++i) {
		if (tableData.value[i].user === name){
			return tableData.value[i].rating_score
		}
	}
}

onMounted(() => {
	getTableInfo()
	setTimeout(() => {
		getTargetInfo()
	}, 800)
})

</script>
