<template>
	<index-page>
		<template #target_view>
			<TargetForm></TargetForm>
			<TargetTable></TargetTable>
		</template>
	</index-page>
</template>

<script setup>
import IndexPage from '@/components/IndexPage.vue'
import TargetTable from '@/components/target/TargetTable.vue'
import TargetForm from '@/components/target/TargetForm.vue'
</script>
