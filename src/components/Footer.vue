<script setup lang="ts">
const fastguides = [
  {
    parentdex: '解决方案',
    eindexs: [
      { text: 'XJ380 操作系统', link: '/os/xj380' },
      { text: '鹊桥引擎 (BridgeEngine)', link: '/software/bridge-engine' },
      { text: 'XINGJI Space 系列软件', link: '/software' },
      { text: '浏览 XINGJI 的全部软件作品', link: '/software' },
    ],
  },
  {
    parentdex: '开源大道',
    eindexs: [
      { text: 'OpenXJ380', link: 'https://github.com/xingji-studio/OpenXJ380' },
      { text: 'OpenXSKernel', link: 'https://github.com/xingji-studio/OpenXSKernel' },
      { text: '鹊桥引擎 (BridgeEngine)', link: 'https://github.com/xingji-studio/BridgeEngine' },
      { text: 'SimpleML', link: 'https://github.com/xingji-studio/SimpleML' },
    ],
  },
  {
    parentdex: '娱乐互动',
    eindexs: [
      { text: '挖矿模拟器', link: '/software/games/bcms' },
    ],
  },
  {
    parentdex: '开发人员',
    eindexs: [
      { text: 'XDC2025', link: 'https://www.bilibili.com/video/BV1y1HKzaEPJ/' },
      { text: '适用于 XJ380 的应用程序开发', link: '/os/xj380/download' },
      { text: '成员招募', link: '/join' },
    ],
  },
]
</script>

<template>
  <footer class="text-left text-white bg-gray-800/50 backdrop-blur-md">
    <section class="px-4 relative">
      <div class="max-w-7xl mx-auto px-4 py-12">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="fastguide in fastguides" :key="fastguide.parentdex" class="relative rounded-2xl">
            <p class="text-xl font-semibold text-gray-200 py-2">
              {{ fastguide.parentdex }}
            </p>
            <a v-for="eindex in fastguide.eindexs" :key="eindex.text" :href="eindex.link">
              <p class="text-gray-400 py-1">
                {{ eindex.text }}
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>

    <div class="py-8 text-center">
      <p>版权所有© XINGJI Interactive Software 2017 - 2026 保留所有权利。</p>
    </div>
  </footer>
</template>
