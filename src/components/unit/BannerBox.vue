<template>
	<el-alert type="success" effect="dark" title="挑战PK榜🎉">
		<el-carousel indicator-position="none" autoplay arrow="never" height="30px" :interval=2000 direction="vertical" :pause-on-hover=false>
			<el-carousel-item v-for="(item, index) in user_name" :key="item">
				<div class="text-sm">
					{{ item }} PK {{ user_opponent[index] }}
				</div>
			</el-carousel-item>
		</el-carousel>
	</el-alert>
</template>

<script setup>
import { ref , onMounted } from 'vue'
import { useTable } from '@/stores/table'
import { storeToRefs } from 'pinia'

let user_name = ref([])
let user_opponent = ref([])

const tableStore = useTable()
const { targetTable } = storeToRefs(tableStore)

onMounted(() => {
	setTimeout(() => {
		for (let i = 0; i < targetTable.value.length; ++i) {
			if (targetTable.value[i].target_type === '挑战PK' && targetTable.value[i].status === '进行中'){
				user_name.value.push(targetTable.value[i].user)
				user_opponent.value.push(targetTable.value[i].opponent)
			}
		}
	},800)
})


</script>

<style scoped>
.el-alert--success.is-dark {
	background-color: #409EFF;
}

.el-carousel {
	width: 900px;
}
</style>