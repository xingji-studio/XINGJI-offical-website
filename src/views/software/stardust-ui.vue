<script setup lang="ts">
import GameLayout from '../../components/software/GameLayout.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: '星尘UI | XINGJI Studio',
  meta: [
    {
      name: 'description',
      content: '星尘 UI（StardustUI）是 XINGJI 开发的现代化跨平台界面框架。',
    },
  ],
})
</script>

<template>
  <GameLayout
    eyebrow="XINGJI DEVELOPER TOOLS"
    title="星尘UI（StardustUI）"
    subtitle="更加现代、方便、高效、跨平台的UI框架">
    <!-- 首屏背景：修改 src 可换图，也可以在此编写自定义 HTML/Vue；删除此插槽则使用默认背景。 -->
    <template #background>
      <img src="/bg1.png" alt="" fetchpriority="high" />
    </template>
    <!-- 首屏按钮：在这里直接修改 href 和按钮文字 -->
    <template #actions>
      <a href="https://github.com/xingji-studio/StardustUI" class="site-button site-button--primary">前往仓库</a>
      <a href="/software" class="site-button">浏览全部作品</a>
    </template>
    <div class="site-detail-grid">
      <section class="site-panel">
        <h2>产品介绍</h2>
        <p class="site-copy">
          星尘UI（StardustUI）是我们开发的一个现代化的跨平台 UI 库，支持Windows、Linux等主流操作系统（macOS暂未稳定支持），同时也支持XJ380、LeonOS等自制操作系统。通过星尘UI，你可以快速地编写出
          你心目中的GUI程序！
        </p>
      </section>

      <section class="site-panel">
        <h2>开源协议</h2>
        <p class="site-copy">使用 MIT 许可证。</p>
      </section>

      <section class="site-panel" id="product-downloads">
        <h2>下载</h2>
        <p class="site-copy">最新版本：开发中，无正式版</p>
        <div class="site-actions">
          <a href="https://github.com/xingji-studio/StardustUI"
             class="site-button site-button--small">
            Github下载（源代码）
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  </GameLayout>
</template>
