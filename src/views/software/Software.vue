<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@vueuse/head'
import PageHero from '../../components/PageHero.vue'

useHead({
  title: 'Software | XINGJI Studio',
  meta: [
    {
      name: 'description',
      content: '探索 XINGJI 工作室的软件作品：图形引擎、界面框架、实用工具、游戏与操作系统。',
    },
  ],
})

const categories = ref([
  {
    title: '开发人员',
    description: 'XINGJI工作室 为开发者提供高质量、多样、跨平台的解决方案，',
    items: [
      { name: 'Neutrino（星际玄微）', link: '/software/neutrino' },
      { name: 'BridgeEngine（鹊桥引擎）', link: '/software/bridge-engine' },
      { name: 'StardustUI（星尘UI）', link: '/software/stardust-ui' },
    ]
  },
  {
    title: '实用工具',
    description: 'XINGJI工作室 开发了一系列实用工具，帮助用户解决日常工作中的各种问题。',
    items: [
      { name: 'xPhoton（流光绘界）', link: '/software/xphoton' },
      { name: 'xMuon（新览）', link: '/software/xmuon' },
      { name: 'SpaceTerminal', link: '/software/space-terminal' },
    ]
  },
  {
    title: '娱乐游戏',
    description: 'XINGJI工作室 开发了一系列娱乐游戏，以满足用户的娱乐需求。',
    items: [
      { name: '挖矿模拟器', link: '/software/games/bcms' },
      { name: '挖矿模拟器 Mobile', link: '/software/games/bcms-mobile' },
    ]
  },
  {
    title: '操作系统',
    description: 'XINGJI工作室 开发的一些操作系统，以满足用户的自定义操作系统需求。',
    items: [
      { name: 'XJ380 操作系统', link: '/os/xj380' },
    ]
  }
])
</script>

<template>
  <div class="site-page">
    <PageHero title="软件作品" subtitle="XINGJI Interactive Software" description="我们励志做出优秀的软件。" eyebrow="OUR SOFTWARE" />
    <section id="software-catalog" class="site-container site-section" aria-label="软件分类">
      <div v-for="(category, index) in categories" :key="category.title" class="site-category">
        <div>
          <p class="site-eyebrow">0{{ index + 1 }} / EXPLORE</p>
          <h2>{{ category.title }}</h2>
          <p class="site-copy">{{ category.description }}</p>
        </div>
        <div class="site-resources">
          <router-link v-for="item in category.items" :key="item.name" :to="item.link" class="site-resource">
            <span>{{ item.name }}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
          </router-link>
        </div>
      </div>
    </section>
    <div class="site-endnote"><p class="site-container">敬请期待更多软件产品…</p></div>
  </div>
</template>
