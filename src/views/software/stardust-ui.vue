<script setup lang="ts">
import GameLayout from '../../components/software/GameLayout.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: '鹊桥引擎 | XINGJI Studio',
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
    subtitle="更加现代、方便、高级、跨平台的UI框架">
    <div class="space-y-8">
      <div class="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8">
        <h2 class="text-2xl font-bold text-white mb-4">产品介绍</h2>
        <p class="text-gray-400">
          您是否还在因为只会写黑框框而苦恼？您是否还在因为Win32API过于繁杂而崩溃？您是否还在因为不同平台需要写不同代码而烦闷？
          我们隆重推出星尘UI。星尘UI拥有美观的用户界面和极强的兼容性，除Windows、Linux等主流操作系统外，还兼容XJ380、CLeonOS等小众操作系统，
          真正做到一份代码、到处运行的壮举。
        </p>
      </div>

      <div class="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8">
        <h2 class="text-2xl font-bold text-white mb-4">开源协议</h2>
        <p class="text-gray-400">已以MIT协议开源。</p>
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