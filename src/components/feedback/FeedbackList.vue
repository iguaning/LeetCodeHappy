<template>
	<ul role="list" class="divide-y divide-gray-200">
		<li v-for="item in listData" :key="item.id" class="px-4 py-8 sm:px-0 flex justify-start">
			<div class="mr-5">
				<el-avatar :size="40" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
			</div>
			<div class="flex flex-col justify-between space-y-1">
				<div class="text-sm">
					<el-link type="primary" :underline="false">访客{{ item.id + 1 }}</el-link>
				</div>
				<div>{{ item.content }}</div>
				<div class="text-sm text-gray-500">{{ moment().year() === moment(item.date_time).year() ? moment(item.date_time).format('MM-DD') : moment(item.date_time).format('YY-MM-DD') }}</div>
				<div v-show="item.answer != ''" class="text-sm flex justify-start">
					<div class="mr-2">
						<el-avatar :size="25" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
					</div>
					<div class="flex flex-col justify-between space-y-1">
						<div>
							<el-link type="primary" :underline="false" class="text-sm">群主大大</el-link>
							<div class="text-sm">{{ item.answer }}</div>
							<div class="text-sm text-gray-500">{{ moment().year() === moment(item.date_time).year() ? moment(item.date_time).format('MM-DD') : moment(item.date_time).format('YY-MM-DD') }}</div>
						</div>
					</div>
				</div>
			</div>
		</li>
	</ul>
</template>

<script setup>
import moment from 'moment'
import { useFeedBack } from '@/stores/feedback'
import { storeToRefs } from 'pinia'

const feedBackStore = useFeedBack()
const { listData } = storeToRefs(feedBackStore)

</script>