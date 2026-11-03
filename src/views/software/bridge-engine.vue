<script setup lang="ts">
import GameLayout from '../../components/software/GameLayout.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: '鹊桥引擎 | XINGJI Studio',
  meta: [
    {
      name: 'description',
      content: '鹊桥引擎（BridgeEngine）是使用 C++、基于 SDL3 的跨平台 2.5D 图形引擎。',
    },
  ],
})
</script>

<template>
  <GameLayout
    eyebrow="XINGJI DEVELOPER TOOLS"
    title="鹊桥引擎（BridgeEngine）"
    subtitle="更加现代、方便、高效、跨平台的图形库兼2.5D图形引擎">
    <!-- 首屏背景：修改 src 可换图，也可以在此编写自定义 HTML/Vue；删除此插槽则使用默认背景。 -->
    <template #background>
      <img src="/bg1.png" alt="" fetchpriority="high" />
    </template>
    <!-- 首屏按钮：在这里直接修改 href 和按钮文字 -->
    <template #actions>
      <a href="https://github.com/xingji-studio/BridgeEngine" class="site-button site-button--primary">前往仓库</a>
      <a href="/software" class="site-button">浏览全部作品</a>
    </template>
    <div class="site-detail-grid">
      <section class="site-panel">
        <h2>作品介绍</h2>
        <p class="site-copy">
          鹊桥引擎（BridgeEngine）是我们开发的一个跨平台的2.5D图形引擎，基于SDL3，使用C++编写。鹊桥引擎通过引入各项方便的接口，为开发者提供良好的跨平台互动图形编程支持。
          长期的维护使得鹊桥引擎拥有可观的稳定性和兼容性，以保证开发者拥有舒适的开发体验、使用者拥有安心的使用体验。我们正在开发的《谣言工厂（FakeFact）》、《挖矿模拟器2（BCMS2）》等游戏项目
          正是基于鹊桥引擎的。多个实用场景为鹊桥引擎体现价值。
        </p>
      </section>

      <section class="site-panel">
        <h2>开源协议</h2>
        <p class="site-copy">以 XOSL 协议开源。</p>
      </section>

      <section class="site-panel" id="product-downloads">
        <h2>下载</h2>
        <p class="site-copy">最新版本：开发中，无正式版</p>
        <div class="site-actions">
          <a href="https://github.com/xingji-studio/BridgeEngine"
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
