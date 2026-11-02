<script setup lang="ts">
import GameLayout from '../../components/software/GameLayout.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'xMuon 星际新览 | XINGJI Studio',
  meta: [
    {
      name: 'description',
      content: '轻量级全新半自研内核浏览器（“星际新览”）。',
    },
  ],
})
</script>

<template>
  <GameLayout
    eyebrow="XINGJI DEVELOPER TOOLS"
    title="xMuon（星际新览）"
    subtitle="轻量级全新半自研内核浏览器（“星际新览”）">
    <!-- 首屏按钮：在这里直接修改 href 和按钮文字 -->
    <template #actions>
      <a href="https://github.com/xingji-studio/xMuon" class="site-button site-button--primary">前往仓库</a>
      <a href="/software" class="site-button">浏览全部作品</a>
    </template>
    <div class="site-detail-grid">
      <section class="site-panel">
        <h2>产品介绍</h2>
        <p class="site-copy">
          使用借助 litehtml、QuickJS 等开源项目研发的全新 xPion 内核的轻量级浏览器。
        </p>
      </section>

      <section class="site-panel">
        <h2>开源协议</h2>
        <p class="site-copy">使用 Apache 2.0 许可证。</p>
      </section>

      <section class="site-panel" id="product-downloads">
        <h2>下载</h2>
        <p class="site-copy">最新版本：开发中，无正式版</p>
        <div class="site-actions">
          <a href="https://github.com/xingji-studio/xMuon"
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
