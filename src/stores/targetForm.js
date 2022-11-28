import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { UserService } from '@/api/apis'
import moment from 'moment'

export const useTargetForm = defineStore('target_form', () => {
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

	const submitTargetInfo = () => {
		const targetParams = {
			target_type: String(formLabelAlign.value),
			lc_account: String(formLabelAlign.leetcode),
			target_val: String(formLabelAlign.num),
			dead_line: String(formLabelAlign.datepicker)
		}

		UserService.submitTarget(targetParams).then((res) => {
			if (res.data[0] === 0) {
				alert("提交成功!")
			} else {
				alert(res.data[1])
			}
		})
	}

	const submitTarget = () => {
		if (formLabelAlign.leetcode === '') {
			alert('LeetCode账户不能为空!')
			return
		}

		if (moment(formLabelAlign.datepicker).isBefore(moment(), 'day')) {
			alert('日期填写错误!')
			return
		}

		submitTargetInfo()
	}

	return { formLabelAlign, submitTarget }
})