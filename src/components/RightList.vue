<template>
	<ul role="list" class="divide-y divide-gray-200">
		<li class="relative bg-white py-5 px-4 hover:bg-gray-50">
			<div class="flex justify-between space-x-3">
				<div class="min-w-0 flex-1">
					<a href="https://github.com/qscool1987/leetcode" target="_blank" class="block focus:outline-none">
						<span class="absolute inset-0" aria-hidden="true" />
						<p class="text-sm font-medium text-gray-900 truncate">——🤖项目Github地址——</p>
						<p class="text-sm text-gray-500 truncate">➡️点此访问项目的Github仓库</p>
					</a>
				</div>
			</div>
			<div class="mt-1">
				<p class="line-clamp-2 text-sm text-gray-600">
					记得点个star⭐⭐⭐
				</p>
			</div>
		</li>
		<li class="relative bg-white py-5 px-4 hover:bg-gray-50">
			<div class="flex justify-between space-x-3">
				<div class="min-w-0 flex-1 block focus:outline-none">
					<span class="absolute inset-0" aria-hidden="true" />
					<p class="text-sm font-medium text-gray-900 truncate">——🙌连续打卡天数说明——</p>
				</div>
			</div>
			<div class="mt-1">
				<p class="line-clamp-2 text-sm text-gray-600">
					当天没刷直接归0，刷了就会累加起来。
					<br>
					不积跬步，无以至千里；
					<br>
					不积小流，无以成江海！！！
					<br>
					🏋🏻‍♀️🏋🏻‍♀️🏋🏻‍♀️
				</p>
			</div>
		</li>
		<li class="relative bg-white py-5 px-4 hover:bg-gray-50">
			<div class="flex justify-between space-x-3">
				<div class="min-w-0 flex-1 block focus:outline-none">
					<span class="absolute inset-0" aria-hidden="true" />
					<p class="text-sm font-medium text-gray-900 truncate">——🎢刷题排行榜说明——</p>
				</div>
			</div>
			<div class="mt-1">
				<p class="line-clamp-2 text-sm text-gray-600">
					新人加入排行榜刷题打卡后生效。
					<br>
					排行榜每小时更新一次；
					<br>
					若没有显示你的信息👇🏻
					<br>
					Please press F5 and wait for a while👽👽👽
				</p>
			</div>
		</li>
		<banner-box></banner-box>
	</ul>
</template>

<script setup>
import BannerBox from '@/components/unit/BannerBox.vue'
</script>