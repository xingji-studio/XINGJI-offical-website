<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Software | XINGJI Studio',
  meta: [
    {
      name: 'description',
      content: 'Defautl description',
    },
  ],
})

const categories = ref([
  {
    title: '实用工具',
    description: 'XINGJI工作室 预计开发一系列实用工具，帮助用户解决日常工作中的各种问题。',
    items: [
      { name: 'BridgeEngine', link: '/software/bridge-engine' },
      { name: 'SpaceTerminal', link: '#' },
      { name: 'SpaceCode2026', link: '#' },
      { name: 'SpacePaint2026', link: '#' },
      { name: 'SpaceSheet2026', link: '#' },
      { name: 'SpaceMark2026', link: '#' },
      { name: 'SpaceEditor2026', link: '#' },
    ]
  },
  {
    title: '娱乐游戏',
    description: 'XINGJI工作室 开发了一系列娱乐游戏，以满足用户的娱乐需求。',
    items: [
      { name: '挖矿模拟器', link: '/software/games/bcms' },
      { name: '挖矿模拟器2', link: '#' }
    ]
  },
  {
    title: '操作系统',
    description: 'XINGJI工作室 开发的一些操作系统，以满足用户的自定义操作系统需求。',
    items: [
      { name: 'XJ380操作系统', link: '/os/xj380' }
    ]
  }
])
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16">
    <!-- Hero Section -->
    <section class="relative py-20">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div class="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 backdrop-blur-3xl"></div>
      </div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 text-white">
          XINGJI Interactive Software
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-8">
          我们只编写最优秀的软件。
        </p>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="py-20 px-4 relative">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 gap-8">
          <div v-for="category in categories" 
               :key="category.title"
               class="group relative">
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur"></div>
            <div class="relative bg-gray-800/50 backdrop-blur-md rounded-2xl p-8">
              <h2 class="text-2xl font-bold text-white mb-4">{{ category.title }}</h2>
              <p class="text-gray-400 mb-6 whitespace-pre-line">{{ category.description }}</p>
              <div class="flex flex-wrap gap-4">
                <router-link v-for="item in category.items"
                  :key="item.name"
                  :to="item.link"
                  class="inline-flex items-center px-6 py-3 rounded-xl bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors duration-200">
                  {{ item.name }}
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="py-8 text-center text-white bg-gray-800/50 backdrop-blur-md">
      <p class="text-xl font-semibold">
        敬请期待更多软件产品...
      </p>
    </footer>
  </div>
</template> 