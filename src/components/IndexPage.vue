<template>
	<div class="h-screen flex">
		<TransitionRoot as="template" :show="sidebarOpen">
			<Dialog as="div" class="fixed inset-0 flex z-40 lg:hidden" @close="sidebarOpen = false">
				<TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
					<DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
				</TransitionChild>
				<TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
					<div class="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
						<TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
							<div class="absolute top-0 right-0 -mr-12 pt-2">
								<button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none" @click="sidebarOpen = false">
									<span class="sr-only">Close sidebar</span>
									<XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
								</button>
							</div>
						</TransitionChild>
						<div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
							<div class="flex justify-center">
								<router-link to="/">
									<span class="text-2xl px-8 py-6 text-gray-600 hover:text-blue-400">LeetCodeHappy</span>
								</router-link>
							</div>
							<nav aria-label="Sidebar" class="mt-5">
								<div class="px-2 space-y-1">
									<router-link v-for="item in nav" :key="item.id" :to="item.url" :class="['text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']" active-class="active">
										<component :is="item.icon" :class="['mr-3 flex-shrink-0 h-6 w-6']" active-class="active" aria-hidden="true" />
										{{ item.label }}
									</router-link>
								</div>
							</nav>
						</div>
						<div class="items-center flex border-t border-gray-200 p-4">
							<a href="#" class="flex-shrink-0 group block">
								<div class="flex items-center">
									<p class="text-gray-600 text-sm">Theme&nbsp;By&nbsp;<a href="https://github.com/iguaning/LeetCodeHappy" target="_blank" class="no-underline hover:text-blue-400">Guaning</a></p>
								</div>
							</a>
						</div>
					</div>
				</TransitionChild>
				<div class="flex-shrink-0 w-14 aria-hidden:true">
					<!-- Force sidebar to shrink to fit close icon -->
				</div>
			</Dialog>
		</TransitionRoot>

		<!-- Static sidebar for desktop -->
		<div class="hidden lg:flex lg:flex-shrink-0">
			<div class="flex flex-col w-64">
				<!-- Sidebar component, swap this element with another sidebar if you like -->
				<div class="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100">
					<div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
						<div class="flex justify-center">
							<router-link to="/">
								<span class="text-2xl px-8 py-6 text-gray-600 hover:text-blue-400">LeetCodeHappy</span>
							</router-link>
						</div>
						<nav aria-label="Sidebar" class="mt-5 flex-1">
							<div class="px-2 space-y-1">
								<router-link v-for="(item, index) in nav" :key="index" :to="item.url" :class="['text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']" active-class="active">
									<component :is="item.icon" :class="['mr-3 flex-shrink-0 h-6 w-6']" active-class="active" aria-hidden="true" />
									{{ item.label }}
								</router-link>
							</div>
						</nav>
					</div>
					<div class="justify-center items-center flex border-t border-gray-200 p-4">
						<p class="text-gray-600 text-sm">Theme&nbsp;By&nbsp;<a href="https://github.com/iguaning/LeetCodeHappy" target="_blank" class="no-underline hover:text-blue-400">Guaning</a></p>
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-col min-w-0 flex-1 overflow-hidden">
			<div class="lg:hidden">
				<div class="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
					<div>
						<span class="text-xl text-gray-600">LeetCodeHappy</span>
					</div>
					<div>
						<button type="button" class="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900" @click="sidebarOpen = true">
							<span class="sr-only">Open sidebar</span>
							<Bars3Icon class="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
				</div>
			</div>
			<div class="flex-1 relative z-0 flex overflow-hidden">
				<main class="flex-1 relative z-0 overflow-y-auto focus:outline-none">
					<!-- Start main area-->
					<div class="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
						<slot name="rank_table"></slot>
						<slot name="target_form"></slot>
						<slot name="target_table"></slot>
						<slot name="feed_back"></slot>
						<slot name="bind_form"></slot>
					</div>
					<!-- End main area -->
				</main>
				<aside class="hidden relative xl:flex xl:flex-col flex-shrink-0 w-96 border-l border-gray-200 overflow-y-auto">
					<right-list></right-list>
				</aside>
			</div>
		</div>
	</div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from '@headlessui/vue'
import {
	Bars3Icon,
	XMarkIcon,
	ChartBarIcon,
	ViewfinderCircleIcon,
	ChatBubbleBottomCenterTextIcon,
	UserIcon
} from '@heroicons/vue/24/solid'
import RightList from '@/components/RightList.vue'

let sidebarOpen = ref(false)

const nav = reactive([
	{
		id: 1,
		label: '成绩排名',
		url: '/',
		icon: ChartBarIcon,
		current: true
	},
	{
		id: 2,
		label: '设定目标',
		url: '/target',
		icon: ViewfinderCircleIcon,
		current: false
	},
	{
		id: 3,
		label: '意见反馈',
		url: '/feedback',
		icon: ChatBubbleBottomCenterTextIcon,
		current: false
	},
	{
		id: 4,
		label: '账号绑定',
		url: '/user',
		icon: UserIcon,
		current: false
	}
])
</script>

<style scoped>
.active {
	background-color: #F3F4F6;
	color: #60A5FA;
}
</style>