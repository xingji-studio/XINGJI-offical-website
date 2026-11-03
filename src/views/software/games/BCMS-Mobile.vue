<script setup lang="ts">
import GameLayout from '../../../components/software/GameLayout.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: '挖矿模拟器Mobile | XINGJI Studio',
  meta: [
    {
      name: 'description',
      content: '更轻简、更便携的挖矿模拟器手机版，让你随时随地加入矿工的行列。',
    },
  ],
})
</script>

<template>
  <GameLayout
    eyebrow="XINGJI GAMES / MOBILE"
    title="挖矿模拟器Mobile"
    subtitle="XINGJI工作室远古之作的全新移植版">
    <!-- 首屏背景：修改 src 可换图，也可以在此编写自定义 HTML/Vue；删除此插槽则使用默认背景。 -->
    <template #background>
      <img src="/software/bcms.png" alt="" fetchpriority="high" />
    </template>
    <!-- 首屏按钮：在这里直接修改 href 和按钮文字 -->
    <template #actions>
      <a href="#product-downloads" class="site-button site-button--primary">查看下载信息</a>
      <a href="/software" class="site-button">浏览全部作品</a>
    </template>
    <div class="site-detail-grid">
      <section class="site-panel">
        <h2>内容说明</h2>
        <p class="site-copy">
          更轻简，更便携的挖矿模拟器，让你随时随地加入矿工的行列，在比特币中遨游！挖矿模拟器手机版现已推出。
        </p>
      </section>

      <section class="site-panel">
        <h2>开源协议或分级</h2>
        <p class="site-copy">已以MIT协议开源。XRB分级：3+</p>
      </section>

      <section class="site-panel" id="product-downloads">
        <h2>下载</h2>
        <p class="site-copy">最新版本：1.8.0</p>
        <div class="site-actions">
          <a href="/resources/bcms-mobile/bcms-mobile.apk"
             class="site-button site-button--small">
            官网下载
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a href="https://github.com/xingji-studio/BitCoinMiningSimulator"
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
