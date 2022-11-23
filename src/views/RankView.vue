<template>
	<index-page>
		<template #rank_view>
			<RankTable></RankTable>
		</template>
	</index-page>
</template>
<script setup>
import IndexPage from '@/components/IndexPage.vue'
import RankTable from '@/components/rank/RankTable.vue'
</script>