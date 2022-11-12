<template>
  <el-form
      label-position="top"
      label-width="110px"
      :model="formLabelAlign"
      style="max-width: 460px"
  >
    <el-form-item label="LeetCode账号">
      <el-input v-model="formLabelAlign.leetcode" />
    </el-form-item>
    <el-form-item label="Github账号">
      <el-input v-model="formLabelAlign.github">
        <template #prepend>Https://github.com/</template>
      </el-input>
    </el-form-item>
    <el-form-item label="邮箱账号">
      <el-input type="email" v-model="formLabelAlign.email" />
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
    git_account: 'https://github.com/' + formLabelAlign.github,
    email_account: formLabelAlign.email
  }

  UserService.submitUserInfo(userParams).then((res) => {
    console.log(res.data)
    if (res.data[0] === 0) {
      alert("添加成功!")
    } else {
      alert(res.data[1])
    }
  })
}
</script>
