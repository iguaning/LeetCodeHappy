<template>
  <el-form
      label-position="left"
      label-width="80px"
      :model="formLabelAlign"
      style="max-width: 279px"
      class="mx-auto"
  >
    <el-form-item label="目标选择" :required="true">
      <el-select v-model="formLabelAlign.value" class="m-2" placeholder="请选择目标">
        <el-option
            v-for="item in formLabelAlign.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="绑定账号" :required="true">
	    <el-autocomplete
			    v-model="formLabelAlign.leetcode"
			    placeholder="请输入LeetCode账号"
			    :fetch-suggestions="querySearch"
			    :trigger-on-focus="false"
			    class="inline w-52"
			    @select="handleSelect"
	    />
    </el-form-item>
    <el-form-item :label="formLabelAlign.value === '挑战PK' ? 'PK目标' : '目标值'" :required="true">
      <el-autocomplete
		      v-model="formLabelAlign.num"
		      :placeholder="formLabelAlign.value === '挑战PK' ? '请输入PK目标账号' : '请输入目标值'"
		      :disabled="formLabelAlign.value === '连续打卡天数'"
		      :fetch-suggestions="querySearch"
		      :trigger-on-focus="false"
		      class="inline w-52"
		      @select="handleSelect"
		      v-if="formLabelAlign.value === '挑战PK'"
      />
	    <el-input
			    v-model="formLabelAlign.num"
			    :placeholder="formLabelAlign.value === '挑战PK' ? '请输入PK目标账号' : '请输入目标值'"
			    :disabled="formLabelAlign.value === '连续打卡天数'"
			    v-else
	    />
    </el-form-item>
    <el-form-item label="完成日期" :required="true">
      <el-date-picker
          v-model="formLabelAlign.datepicker"
          type="date"
          placeholder="Pick a Date"
          format="YYYY/MM/DD"
          value-format="YYYY-MM-DD"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">提交目标</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { storeToRefs } from 'pinia'

// 目标表单提交
import { useTargetForm } from '@/stores/targetForm'
const targetFormStore = useTargetForm()
const { formLabelAlign } = storeToRefs(targetFormStore)
const { submitTarget } = targetFormStore

// 表格数据
import { useTable } from '@/stores/table'
const tableStore = useTable()
const { rankTable } = storeToRefs(tableStore)
const { getTargetTable } = tableStore

//自动补全
const restaurants = ref([])

const querySearch = (queryString, cb) => {
	const results = queryString
			? restaurants.value.filter(createFilter(queryString))
			: restaurants.value
	cb(results)
}

const createFilter = (queryString) => {
	return (restaurant) => {
		return (
				restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
		)
	}
}

let newArr = ref(rankTable.value.map(o => {
	return Object.assign(o, { value: o.user })
}))

const handleSelect = (item) => {
	console.log(item)
}

onMounted(() => {
	restaurants.value = newArr.value
})

// 提交表单
const submit = () => {
	submitTarget()
	//更新表格数据
	setTimeout(() => {
		getTargetTable()
	}, 1000)
}
</script>

<style scoped>
.el-select.m-2 {
  margin: 0;
}
</style>
