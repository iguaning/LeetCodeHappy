<template>
	<index-page>
		<template #feed_view>
			<feed-back></feed-back>
			<feedback-list></feedback-list>
		</template>
	</index-page>
</template>

<script setup>
import IndexPage from '@/components/IndexPage.vue'
import FeedBack from '@/components/feedback/FeedBack.vue'
import FeedbackList from '@/components/feedback/FeedbackList.vue'
</script>