<template>
  <el-table :data="tableData" border style="width: 100%" height="80vh">
    <el-table-column fixed prop="user" label="用户" width="180">
      <template #default="scope">
        <el-link type="primary" :underline="false" :href="'https://leetcode.cn/u/' + scope.row.user" target="_blank">{{ scope.row.user }}</el-link>
      </template>
    </el-table-column>
    <el-table-column prop="total_solve" label="总刷题量" />
    <el-table-column prop="code_submit" label="代码行数贡献" />
    <el-table-column prop="problem_submit" label="代码题量贡献" />
    <el-table-column prop="rating_score" label="竞赛分数" />
    <el-table-column prop="continue_days" label="连续打卡天数" />
    <el-table-column prop="new_solve" label="今日刷题数量">
      <template #default="scope">
        <el-link type="danger" :underline="false">{{ scope.row.new_solve}}</el-link>
      </template>
    </el-table-column>
    <el-table-column prop="lazy_days" label="懒惰称号" />
    <el-table-column prop="date_time" label="日期" width="160" />
  </el-table>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { UserService } from '@/api/apis'

const getTableInfo = () => {
  UserService.getTableInfo().then((res) => {
    // console.log(res.data)
    for (let i = 0; i < res.data.length; ++i) {
      tableData.push(res.data[i])
    }
    // console.log(tableData)
  })
}

let tableData = reactive([])

onMounted(() => {
  getTableInfo()
})
</script>
