<template>
  <el-form
      :inline="true"
      label-position="right"
      label-width="110px"
      :model="formLabelAlign"
      style="max-width: 100%"
      class="demo-form-inline"
  >
    <el-form-item label="目标选择">
      <el-select v-model="formLabelAlign.value" class="m-2" placeholder="Select">
        <el-option
            v-for="item in formLabelAlign.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="LeetCode账号">
      <el-input v-model="formLabelAlign.leetcode" placeholder="请输入LeetCode账号"/>
    </el-form-item>
    <el-form-item :label="formLabelAlign.value === '挑战PK' ? 'PK目标' : '目标值'">
      <el-input v-model="formLabelAlign.num" :placeholder="formLabelAlign.value === '挑战PK' ? '请输入PK目标账号' : '请输入目标值'"/>
    </el-form-item>
    <el-form-item label="完成日期">
      <el-date-picker
          v-model="formLabelAlign.datepicker"
          type="date"
          placeholder="Pick a Date"
          format="YYYY/MM/DD"
          value-format="YYYY-MM-DD"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitTarget">提交目标</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { UserService } from '@/api/apis'
import {reactive} from "vue";

const submitTarget = () => {
  submitTargetInfo()
  console.log(formLabelAlign.value, formLabelAlign.leetcode, formLabelAlign.num, formLabelAlign.datepicker)
}

const submitTargetInfo = () => {
  if (formLabelAlign.leetcode === '') {
    alert('LeetCode账户不能为空!')
    return
  }

  const targetParams = {
    target_type: String(formLabelAlign.value),
    lc_account: String(formLabelAlign.leetcode),
    target_val: String(formLabelAlign.num),
    dead_line: String(formLabelAlign.datepicker)
  }

  UserService.submitTargetInfo(targetParams).then((res) => {
    console.log(res.data)
    if (res.data[0] === 0) {
      alert("提交成功!");
    } else {
      alert(res.data[1]);
    }
  })
}

const formLabelAlign = reactive({
  options: [
    {
      value: '总刷题量',
      label: '总刷题量'
    },
    {
      value: 'push代码行数',
      label: 'push代码行数'
    },
    {
      value: 'push代码题量',
      label: 'push代码题量'
    },
    {
      value: '连续打卡天数',
      label: '连续打卡天数'
    },
    {
      value: '竞赛分数',
      label: '竞赛分数'
    },
    {
      value: '挑战PK',
      label: '挑战PK'
    }
  ],
  leetcode: '',
  num: '',
  datepicker: '',
  value: ''
})
</script>

<style scoped>
.el-select.m-2 {
  margin: 0;
}
</style>
