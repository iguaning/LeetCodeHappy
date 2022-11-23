<template>
	<index-page>
		<template #user_view>
			<bind-form></bind-form>
		</template>
	</index-page>
</template>

<script setup>
import IndexPage from '@/components/IndexPage.vue'
import BindForm from '@/components/user/BindForm.vue'
</script>
