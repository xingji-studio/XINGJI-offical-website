<script setup lang="ts">
import GameLayout from '../../components/software/GameLayout.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Neutrino | XINGJI Studio',
  meta: [
    {
      name: 'description',
      content: '专为使用手机远控电脑而生的远控方案，由 Neutrino 强力驱动。',
    },
  ],
})
</script>

<template>
  <GameLayout
    eyebrow="XINGJI DEVELOPER TOOLS"
    title="Neutrino-HLG（星际玄微 HLG）"
    subtitle="专为使用手机远控电脑而生的远控方案">
    <!-- 首屏背景：修改 src 可换图，也可以在此编写自定义 HTML/Vue；删除此插槽则使用默认背景。 -->
    <template #background>
      <img src="/software/neutrino/neutrinohlg-screencut-all.png" alt="" fetchpriority="high" />
    </template>
    <!-- 首屏按钮：在这里直接修改 href 和按钮文字 -->
    <template #actions>
      <a href="https://www.npmjs.com/package/@xingjisoft/neutrino-hlg" class="site-button site-button--primary">立刻安装</a>
      <a href="https://github.com/xingji-studio/neutrino-HLG" class="site-button">前往仓库</a>
    </template>
    <div class="site-detail-grid">
      <section class="site-panel">
        <h2>产品介绍</h2>
        <p class="site-copy">
          Neutrino Hyper Link Gopher / Huilongguan 是专为使用手机远控电脑而生的远控方案，由 Neutrino 强力驱动，让你远在异地也可以只用手机便可链接电脑进行开发。
        </p>
      </section>

      <section class="site-panel">
        <h2>开源协议</h2>
        <p class="site-copy">使用 Apache 2.0 许可证。</p>
      </section>

      <section class="site-panel" id="product-downloads">
        <h2>下载</h2>
        <p class="site-copy">最新版本：0.1.0（仅适用于 Windows）</p>
        <div class="site-actions">
          <a href="https://github.com/xingji-studio/neutrino-HLG"
             class="site-button site-button--small">
            Github下载（源代码）
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a href="https://www.npmjs.com/package/@xingjisoft/neutrino-hlg"
             class="site-button site-button--small">
            npm 安装
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  </GameLayout>
</template>
