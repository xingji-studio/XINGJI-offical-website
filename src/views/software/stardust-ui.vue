<script setup lang="ts">
import GameLayout from '../../components/software/GameLayout.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: '星尘UI | XINGJI Studio',
  meta: [
    {
      name: 'description',
      content: 'Defautl description',
    },
  ],
})
</script>

<template>
  <GameLayout 
    title="星尘UI（StardustUI）"
    subtitle="更加现代、方便、高效、跨平台的UI框架">
    <div class="space-y-8">
      <div class="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8">
        <h2 class="text-2xl font-bold text-white mb-4">产品介绍</h2>
        <p class="text-gray-400">
          星尘UI（StardustUI）是我们开发的一个现代化的跨平台 UI 库，支持Windows、Linux等主流操作系统（macOS暂未稳定支持），同时也支持XJ380、LeonOS等自制操作系统。通过星尘UI，你可以快速地编写出
          你心目中的GUI程序！
        </p>
      </div>

      <div class="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8">
        <h2 class="text-2xl font-bold text-white mb-4">开源协议</h2>
        <p class="text-gray-400">使用MIT许可证。</p>
      </div>

      <div class="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8">
        <h2 class="text-2xl font-bold text-white mb-4">下载</h2>
        <p class="text-gray-400 mb-4">最新版本：开发中，无正式版</p>
        <div class="flex flex-col space-y-4">
          <a href="https://github.com/xingji-studio/StardustUI"
             class="inline-flex items-center px-6 py-3 rounded-xl bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors duration-200 w-fit">
            Github下载（源代码）
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </GameLayout>
</template> 