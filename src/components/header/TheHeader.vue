<template>
  <Popover class="relative bg-white z-50">
    <div class="max-w-7xl mx-auto ssm:px-6">
      <div class="flex justify-between items-center border-b-2 border-gray-100 ssm:py-5 md:py-0 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link to="/">
            <span class="text-2xl text-gray-700 hover:text-gray-900">LeetCodeHappy</span>
          </router-link>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
            <span class="sr-only">Open menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden md:flex">
          <router-link v-for="item in nav" :key="item.id" :to="item.url" class="text-base font-medium text-gray-500 md:py-5 md:px-5 hover:text-blue-400 transition-colors">
            {{ item.label }}
          </router-link>
        </PopoverGroup>
      </div>
    </div>

    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel focus class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <span class="text-2xl">LeetCodeHappy</span>
              </div>
              <div class="-mr-2">
                <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <router-link v-for="item in nav" :key="item.id" :to="item.url" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-blue-400" aria-hidden="true" />
                  <span class="ml-3 text-base font-medium text-gray-900">
                    {{ item.label }}
                  </span>
                </router-link>
              </nav>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
    Bars3Icon,
    XMarkIcon,
    ChartBarIcon,
    ViewfinderCircleIcon,
    ChatBubbleBottomCenterTextIcon,
    UserIcon
} from '@heroicons/vue/24/solid'
import { reactive } from 'vue'

const nav = reactive([
  {
    id: 1,
    label: '成绩排名',
    url: '/',
    icon: ChartBarIcon
  },
  {
    id: 2,
    label: '设定目标',
    url: '/target',
    icon: ViewfinderCircleIcon
  },
  {
    id: 3,
    label: '意见反馈',
    url: '/feedback',
    icon: ChatBubbleBottomCenterTextIcon
  },
  {
    id: 4,
    label: '个人信息',
    url: '/user',
    icon: UserIcon
  }
])
</script>