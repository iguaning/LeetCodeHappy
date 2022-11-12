<template>
  <el-input
      v-model="textarea"
      :autosize="{ minRows: 5, maxRows: 10 }"
      type="textarea"
      placeholder="意见反馈"
  />
  <el-form-item>
    <el-button type="primary" @click="submitFeedBack">提交意见</el-button>
  </el-form-item>
</template>

<script setup>
import { ref } from 'vue'
import { FeedBackService } from '@/api/apis'

const textarea = ref('')

const submitFeedBack = () => {
  submitFeedBackInfo()
}

const submitFeedBackInfo = () => {
  if (textarea.value === '') {
    alert('反馈信息不能为空!')
    return
  }

  const feedBackParams = {
    msg: textarea.value
  }

  FeedBackService.submitFeedBackInfo(feedBackParams).then((res) => {
    console.log(res.data)
    if (res.data[0] === 0) {
      alert("反馈成功!");
    } else {
      alert(res.data[1]);
    }
  })
}
</script>

<style scoped>
.el-textarea {
  margin-bottom: 18px;
}

.el-form-item {
  text-align: left;
}
</style>