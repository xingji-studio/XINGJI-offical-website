<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@vueuse/head'
import PageHero from '../components/PageHero.vue'

useHead({
  title: 'Open Source | XINGJI Studio',
  meta: [
    {
      name: 'description',
      content: '开源软件 | 世界因开源而美好，我们因开源而奉献。',
    },
  ],
})

const projects = ref([
  {
    name: 'OpenXJ380',
    description: `XJ380 的开源版本，移除了GUI环境。（但你可以在历史记录中找到相关源代码）`,
    links: [
      {
        text: '仓库链接',
        url: 'https://github.com/xingji-studio/OpenXJ380'
      },
      {
        text: 'OSDev 链接',
        url: 'https://wiki.osdev.org/Projects#X'
      }
    ]
  },
  {
    name: 'BridgeEngine',
    description: `一个跨平台图形 & 2.5D 游戏引擎。`,
    links: [
      {
        text: '仓库链接',
        url: 'https://github.com/xingji-studio/BridgeEngine'
      }
    ]
  },
  {
    name: 'Neutrino',
    description: `新一代强兼容性 Agent。`,
    links: [
      {
        text: '仓库链接',
        url: 'https://github.com/xingji-studio/neutrino'
      }
    ]
  },
  {
    name: 'Neutrino-HLG',
    description: `专为使用手机远控电脑而生的远控方案，由 Neutrino Oscillation 引擎强力驱动。`,
    links: [
      {
        text: '仓库链接',
        url: 'https://github.com/xingji-studio/neutrino-HLG'
      }
    ]
  },
  {
    name: 'StardustUI',
    description: `一个跨平台 GUI 框架。`,
    links: [
      {
        text: '仓库链接',
        url: 'https://github.com/xingji-studio/StardustUI'
      }
    ]
  },
  {
    name: 'OpenXSKernel',
    description: `一个 UEFI 64 位操作系统纯内核。
由 OpenXJ380 拆分，OpenXSKernel 现已被 OSDev 收录。`,
    links: [
      {
        text: '仓库链接',
        url: 'https://github.com/xingji-studio/OpenXSKernel'
      },
      {
        text: 'OSDev 链接',
        url: 'https://wiki.osdev.org/Projects#O'
      }
    ]
  },
  {
    name: 'xPhoton',
    description: `绘图软件。`,
    links: [
      {
        text: '仓库链接',
        url: 'https://github.com/xingji-studio/xPhoton'
      }
    ]
  },
  {
    name: 'xMuon',
    description: `使用半自研浏览器内核 xPion 制作的轻量级浏览器。`,
    links: [
      {
        text: '仓库链接',
        url: 'https://github.com/xingji-studio/xMuon'
      }
    ]
  },
  {
    name: 'HE3D-Cpp',
    description: `一个由 Bnear8273 开发的适用于 XJ380 的 3D 引擎。`,
    links: [
      {
        text: '仓库链接',
        url: 'https://github.com/xingji-studio/he3d-cpp'
      }
    ]
  },
  {
    name: '挖矿模拟器',
    description: `一个用 C++ 写的没啥用的小游戏`,
    links: [
      {
        text: '仓库链接',
        url: 'https://github.com/xingji-studio/BitCoinMiningSimulator'
      }
    ]
  }
])
</script>

<template>
  <div class="site-page">
    <PageHero title="我们的开源软件" subtitle="世界因开源而美好，我们因开源而奉献。" image="/files/openxj380.png" eyebrow="OPEN SOURCE" />
    <section id="open-projects" class="site-container site-section" aria-labelledby="projects-title">
      <div class="site-section__heading">
        <div><p class="site-eyebrow">BUILT TO SHARE</p><h2 id="projects-title">开放的代码，共同的探索</h2></div>
      </div>
      <div class="site-grid site-grid--three">
        <article v-for="(project, index) in projects" :key="project.name" class="site-panel site-panel--stretch">
          <p class="site-eyebrow">0{{ index + 1 }} / OPEN SOURCE</p>
          <h3>{{ project.name }}</h3>
          <p class="site-copy site-pre-line">{{ project.description }}</p>
          <div class="site-actions">
            <a v-for="link in project.links" :key="link.url" :href="link.url" target="_blank" rel="noopener noreferrer" class="site-button site-button--small">
              {{ link.text }}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" /></svg>
            </a>
          </div>
        </article>
      </div>
    </section>
    <div class="site-endnote"><p class="site-container">开源无处不在，XINGJI 工作室将持续推进开源软件的发展。</p></div>
  </div>
</template>
