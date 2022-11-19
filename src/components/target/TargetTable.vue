<template>
  <el-table :data="targetTableData" style="width: 100%" height="auto" v-loading="loading">
    <el-table-column prop="user" label="用户" width="calc(100% / 8)" fixed>
      <template #default="scope">
        <el-link type="primary" :underline="false" :href="'https://leetcode.cn/u/' + scope.row.user" target="_blank">{{ scope.row.user }}</el-link>
      </template>
    </el-table-column>
    <el-table-column prop="target_type" label="目标类型" width="calc(100% / 8)" header-align="center" align="center" />
    <el-table-column prop="target_value" label="目标值" width="calc(100% / 8)"  header-align="center" align="center"/>
    <el-table-column prop="opponent" label="PK对手" width="calc(100% / 8)" header-align="center" align="center">
      <template #default="scope">
        <el-link type="primary" :underline="false" :href="'https://leetcode.cn/u/' + scope.row.opponent" target="_blank">{{ scope.row.opponent }}</el-link>
      </template>
    </el-table-column>
	  <el-table-column prop="level" label="难易程度" width="calc(100% / 8)" header-align="center" align="center">
		  <template #default="scope">
			  <el-tag :type="scope.row.level === 'VERY_EASY' ? 'success' : (scope.row.level === 'MID' ? '' : (scope.row.level === 'LITTLE_HARD' ? 'info' : (scope.row.level === 'VERY_HARD' ? 'warning' : 'danger')))" :underline="false">{{ scope.row.level }}</el-tag>
		  </template>
	  </el-table-column>
    <el-table-column prop="status" label="状态" width="calc(100% / 8)" header-align="center" align="center">
      <template #default="scope">
        <el-tag :type="scope.row.status === '已完成' ? 'success' : (scope.row.status === '进行中' ? 'warning' : 'danger')" :underline="false">{{ scope.row.status }}</el-tag>
      </template>
    </el-table-column>
	  <el-table-column prop="create_date" label="创建日期" width="calc(100% / 8)" header-align="center" align="center">
		  <template #default="scope">
			  <div>{{ moment(scope.row.create_date).format('YYYY-MM-DD') }}</div>
		  </template>
	  </el-table-column>
	  <el-table-column prop="dead_line" label="完成日期" width="calc(100% / 8)" header-align="center" align="center">
		  <template #default="scope">
			  <div>{{ moment(scope.row.dead_line).format('YYYY-MM-DD') }}</div>
		  </template>
	  </el-table-column>
  </el-table>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useTargetTable } from '@/stores/targetTable'
import { storeToRefs } from 'pinia'
import moment from 'moment'

const targetTableStore = useTargetTable()
const { targetTableData } = storeToRefs(targetTableStore)
const { getTargetInfo } = targetTableStore

const loading = ref(true)

getTargetInfo()

onMounted(() => {
	loading.value = false
})
</script>
