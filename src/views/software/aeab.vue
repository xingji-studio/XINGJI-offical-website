<script setup lang="ts">
import GameLayout from '../../components/software/GameLayout.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: '极端反福瑞行为档案库 | FURRIES - XINGJI工作室旗下组织',
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
    title="极端反福瑞行为档案库（AEAB）"
    subtitle="看清恶意，守护所爱">
    <div class="space-y-8">
      <div class="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8">
        <h2 class="text-2xl font-bold text-white mb-4">产品介绍</h2>
        <p class="text-gray-400">
          您是否经历过被极端反福瑞骚扰的经历？他们自己造谣，大肆炒作，高喊着要打倒自己树立的、根本不存在的、所谓的“敌人”，已经对
          圈内人的安全构成巨大威胁。为此，我们隆重推出极端反福瑞黑名单 —— 永远免费，只为守护兽圈安全。
        </p>
      </div>

      <div class="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8">
        <h2 class="text-2xl font-bold text-white mb-4">开源协议</h2>
        <p class="text-gray-400">已以Apache 2.0协议开源。</p>
      </div>

      <!-- <div class="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8">
        <h2 class="text-2xl font-bold text-white mb-4">下载</h2>
        <p class="text-gray-400 mb-4">最新版本：1.0.0</p>
        <div class="flex flex-col space-y-4">
          <a href="https://bl.furries.com.cn/"
             class="inline-flex items-center px-6 py-3 rounded-xl bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors duration-200 w-fit">
            网页版（推荐）
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a href="https://gitee.com/GuoqiFish/xingji-interactive-software-download-item-storage/releases/download/20260519-1/aeab-release-1.0.0.apk"
             class="inline-flex items-center px-6 py-3 rounded-xl bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors duration-200 w-fit">
            手机版（安卓）
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a href="https://gitee.com/GuoqiFish/xingji-interactive-software-download-item-storage/releases/download/20260519-1/AEAB_1.0.0_x64-setup.exe"
             class="inline-flex items-center px-6 py-3 rounded-xl bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors duration-200 w-fit">
            Windows版（安装包）
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a href="https://gitee.com/GuoqiFish/xingji-interactive-software-download-item-storage/releases/download/20260519-1/AEAB_1.0.0_x64_en-US.msi"
             class="inline-flex items-center px-6 py-3 rounded-xl bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors duration-200 w-fit">
            Windows版（msi安装包）
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a href="https://gitee.com/GuoqiFish/xingji-interactive-software-download-item-storage/releases/download/20260519-1/aeab_1.0.0_x64.exe"
             class="inline-flex items-center px-6 py-3 rounded-xl bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors duration-200 w-fit">
            Windows版（单文件）
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div> -->
    </div>
  </GameLayout>
</template> 