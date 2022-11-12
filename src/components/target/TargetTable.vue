<template>
  <el-table :data="targetTableData" border style="width: 100%">
    <el-table-column prop="user" label="用户" width="180" fixed>
      <template #default="scope">
        <el-link type="primary" :underline="false" :href="'https://leetcode.cn/u/' + scope.row.user" target="_blank">{{ scope.row.user }}</el-link>
      </template>
    </el-table-column>
    <el-table-column prop="target_type" label="目标类型" />
    <el-table-column prop="target_value" label="目标值" />
    <el-table-column prop="opponent" label="PK对手">
      <template #default="scope">
        <el-link type="primary" :underline="false" :href="'https://leetcode.cn/u/' + scope.row.opponent" target="_blank">{{ scope.row.opponent }}</el-link>
      </template>
    </el-table-column>
    <el-table-column prop="status" label="状态">
      <template #default="scope">
        <el-link :type="scope.row.status === '已完成' ? 'success' : 'warning'" :underline="false">{{ scope.row.status }}</el-link>
      </template>
    </el-table-column>
    <el-table-column prop="create_date" label="创建日期" />
    <el-table-column prop="dead_line" label="完成日期" />
  </el-table>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { UserService } from '@/api/apis'

const getTargetInfo = () => {
  const getTargetParams = {
    pn: 1,
    rn: 50
  }
  UserService.getTargetInfo(getTargetParams).then((res) => {
    // console.log(res.data)
    for (let i = 0; i < res.data.length; ++i) {
      targetTableData.push(res.data[i])
    }
    // console.log(targetTableData)
  })
}

let targetTableData = reactive([])

onMounted(() => {
  getTargetInfo()
})
</script>
