<template>
  <el-form
      label-position="left"
      label-width="80px"
      :model="formLabelAlign"
      style="max-width: 279px"
      class="mx-auto"
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
    <el-form-item label="绑定账号">
      <el-input v-model="formLabelAlign.leetcode" placeholder="请输入LeetCode账号"/>
    </el-form-item>
    <el-form-item :label="formLabelAlign.value === '挑战PK' ? 'PK目标' : '目标值'">
      <el-input v-model="formLabelAlign.num" :placeholder="formLabelAlign.value === '挑战PK' ? '请输入PK目标账号' : '请输入目标值'" :disabled="formLabelAlign.value === '连续打卡天数'" />
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
import { useTargetForm } from '@/stores/targetForm'
import { storeToRefs } from 'pinia'

const targetFormStore = useTargetForm()
const { formLabelAlign } = storeToRefs(targetFormStore)
const { submitTarget } = targetFormStore

</script>

<style scoped>
.el-select.m-2 {
  margin: 0;
}
</style>
