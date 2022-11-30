<template>
  <el-form
      label-position="top"
      label-width="110px"
      :model="formLabelAlign"
      style="max-width: 300px"
      class="mx-auto"
  >
    <el-form-item label="LeetCode账号" :required="true">
      <el-input v-model="formLabelAlign.leetcode" placeholder="请输入LeetCode账号" clearable />
    </el-form-item>
    <el-form-item label="Github账号">
      <el-input v-model="formLabelAlign.github" placeholder="请输入Github用户名" clearable />
    </el-form-item>
    <el-form-item label="邮箱账号">
      <el-input type="email" v-model="formLabelAlign.email" placeholder="Email" clearable />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitBinding">提交绑定</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive } from 'vue'
import { UserService } from '@/api/apis'

const formLabelAlign = reactive({
  leetcode: '',
  github: '',
  email: '',
})

const submitBinding = () => {
  submitUserInfo()
}

const submitUserInfo = () => {
  if (formLabelAlign.leetcode === '') {
    alert('LeetCode账户不能为空!')
    return
  }

  const userParams = {
    lc_account: formLabelAlign.leetcode,
    git_account: formLabelAlign.github,
    email_account: formLabelAlign.email
  }

  UserService.submitUser(userParams).then((res) => {
    if (res.data[0] === 0) {
      alert("添加成功!")
    } else {
      alert(res.data[1])
    }
  })
}
</script>
