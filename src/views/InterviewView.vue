<template>
	<index-page>
		<template #interview_view>
			<interview-form></interview-form>
			<interview-title></interview-title>
		</template>
	</index-page>
</template>

<script setup>
import IndexPage from '@/components/IndexPage.vue'
import InterviewForm from '@/components/interview/InterviewForm.vue'
import InterviewTitle from '@/components/interview/InterviewTitle.vue'
</script>