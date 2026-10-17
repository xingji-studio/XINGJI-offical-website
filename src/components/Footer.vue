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
  <footer class="site-footer">
    <div class="site-container site-footer__content">
      <div class="site-footer__brand">
        <router-link to="/">
          <img src="/files/XINGJI_tb.png" alt="" width="600" height="406" />
          <span>XINGJI <small>INTERACTIVE SOFTWARE</small></span>
        </router-link>
        <p>为兴趣而聚，为爱发电。</p>
      </div>
      <div class="site-footer__guides">
        <nav v-for="guide in fastguides" :key="guide.parentdex" :aria-label="guide.parentdex">
          <h2>{{ guide.parentdex }}</h2>
          <ul>
            <li v-for="item in guide.eindexs" :key="item.text">
              <a v-if="item.link.startsWith('http')" :href="item.link" target="_blank" rel="noopener noreferrer">{{ item.text }}</a>
              <router-link v-else :to="item.link">{{ item.text }}</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="site-footer__bottom">
        <p>版权所有 © XINGJI Interactive Software 2017 - 2026 保留所有权利。</p>
        <router-link to="/licenses">用户许可协议</router-link>
      </div>
    </div>
  </footer>
</template>

<style scoped src="../styles/footer.css"></style>
