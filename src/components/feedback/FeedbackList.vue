<template>
	<ul role="list" class="divide-y divide-gray-200">
		<li v-for="item in listData" :key="item.id" class="px-4 py-4 sm:px-0 flex flex-col justify-between">
			<div class="mb-4">{{ item.content }}</div>
			<div class="text-right">{{ moment(item.date_time).format('MM-DD') }}</div>
		</li>
	</ul>
</template>

<script setup>
import moment from 'moment'
import { useFeedBackList } from '@/stores/feedBackList'
import { storeToRefs } from 'pinia'

const feedBackListStore = useFeedBackList()
const { listData } = storeToRefs(feedBackListStore)
const { getFeedBackList } = feedBackListStore

getFeedBackList()
</script>

<style scoped>

</style>