<script setup lang="ts">
import GameLayout from '../../components/software/GameLayout.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'SpaceTerminal | XINGJI Studios',
  meta: [
    {
      name: 'description',
      content: 'XINGJI SpaceTerminal，新一代命令行工具。',
    },
  ],
})
</script>

<template>
  <GameLayout
    eyebrow="XINGJI SPACE"
    title="SpaceTerminal"
    subtitle="新一代命令行">
    <!-- 首屏按钮：在这里直接修改 href 和按钮文字 -->
    <template #actions>
      <!-- <a href="#product-downloads" class="site-button site-button--primary">查看下载信息</a>
      <a href="/software" class="site-button">浏览全部作品</a> -->
    </template>
    <div class="site-detail-grid">
      <section class="site-panel">
        <h2>产品介绍</h2>
        <p class="site-copy">
          史。
        </p>
      </section>

      <section class="site-panel" id="product-downloads">
        <h2>下载</h2>
        <p class="site-copy">最新版本：暂无</p>
        <div class="site-actions">
          <a href="https://github.com/xingji-studio/StardustUI"
             class="site-button site-button--small">
            待定。
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  </GameLayout>
</template>
