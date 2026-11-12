<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@vueuse/head'
import PageHero from '../../components/PageHero.vue'

useHead({
  title: 'Download XJ380 | XINGJI Studio',
  meta: [
    {
      name: 'description',
      content: '获取 XJ380 开发者工具、API 文档及编译套件，查看系统版本和配置要求。',
    },
  ],
})

type SystemDownload = { name: string; type: string; url: string }
const versions = ref<{ version: string; downloads?: SystemDownload[] }[]>([
  {
    version: '1.0.0 - 即将上线 Comming Soon',
    // downloads: [
    //   { name: '中文安装介质', type: 'iso文件', url: '#' },
    //   { name: '英文安装介质', type: 'iso文件', url: '#' },
    //   { name: '中文虚拟硬盘', type: 'vhd文件', url: '#' },
    //   { name: '英文虚拟硬盘', type: 'vhd文件', url: '#' }
    // ]
  }
])

const devTools = ref([
  {
    name: 'XJ380 应用程序编译套件（XACT for XJ380）',
    url: 'https://gitee.com/GuoqiFish/xingji-interactive-software-download-item-storage/releases/download/20261105-1/XJ380_XACT_2026v5_xj380.zip',
    // backupUrl: 'https://1824119084.v.123pan.cn/1824119084/34177494',
    githubUrl: 'https://github.com/xingji-studio/XXCC-suite/releases/download/2026v5/XJ380_XACT_2026v5_xj380.zip',
  },
  {
    name: 'XJ380 应用程序编译套件（XACT for Windows）',
    url: 'https://gitee.com/GuoqiFish/xingji-interactive-software-download-item-storage/releases/download/20261105-1/XJ380_XACT_2026v5_windows.zip',
    // backupUrl: 'https://1824119084.v.123pan.cn/1824119084/34237249',
    githubUrl: 'https://github.com/xingji-studio/XXCC-suite/releases/download/2026v5/XJ380_XACT_2026v5_windows.zip',
  },
  {
    name: 'XJ380 应用程序编译套件（XACT for Linux）',
    url: 'https://gitee.com/GuoqiFish/xingji-interactive-software-download-item-storage/releases/download/20261105-1/XJ380_XACT_2026v5_linux.zip',
    // backupUrl: 'https://1824119084.v.123pan.cn/1824119084/34237248',
    githubUrl: 'https://github.com/xingji-studio/XXCC-suite/releases/download/2026v5/XJ380_XACT_2026v5_linux.zip',
  },
  {
    name: 'XJ380 API 标准文档（C/C++）',
    url: 'https://gitee.com/GuoqiFish/xingji-interactive-software-download-item-storage/releases/download/20261105-1/XJ380_API_Spec_CPP_1_4.pdf',
    // backupUrl: 'https://1824119084.v.123pan.cn/1824119084/34237242',
    githubUrl: 'https://github.com/xingji-studio/XXCC-suite/releases/download/2026v5/XJ380_API_Spec_CPP_1_4.pdf',
  },
  {
    name: 'XJ380 API 静态链接库及头文件（C/C++）',
    url: 'https://gitee.com/GuoqiFish/xingji-interactive-software-download-item-storage/releases/download/20261105-1/XJ380_CPP_API_Depend_1_4.zip',
    // backupUrl: 'https://1824119084.v.123pan.cn/1824119084/34237241',
    githubUrl: 'https://github.com/xingji-studio/XXCC-suite/releases/download/2026v5/XJ380_CPP_API_Depend_1_4.zip',
  }
])

const requirements = ref([
  { name: '处理器', spec: 'x86_64 架构的处理器，基准频率 1 GHz 或更高' },
  { name: '内存', spec: '512 MiB（安装程序需要 3 GiB 或更高才能运行）' },
  { name: '硬盘', spec: '5 GiB 或更多' },
  { name: '显示器', spec: '720P 或更高' }
])

const requirements2 = ref([
  { name: '处理器', spec: 'x86_64 架构的处理器，基准频率 2 GHz 或更高' },
  { name: '内存', spec: '4 GiB' },
  { name: '硬盘', spec: '32 GiB 或更多' },
  { name: '显示器', spec: '1080P 或更高' }
])
</script>

<template>
  <div class="site-page">
    <PageHero title="下载 XJ380" subtitle="开启你的「星际」之旅。" description="系统版本、配置要求、开发者工具与文档，一处获取。" image="/os/xj380_screenshot.png" eyebrow="XJ380 / DOWNLOADS" compact>
      <template #actions>
        <a href="#developer-tools" class="site-button site-button--primary">获取开发者工具</a>
        <a href="#system-requirements" class="site-button">查看配置要求</a>
      </template>
    </PageHero>
    <section class="site-container site-section" aria-labelledby="system-downloads-title">
      <div class="site-note site-note--spaced">请务必确认设备 / 虚拟机满足最低配置要求，否则可能会无法正常使用 XJ380 操作系统，最坏情况可能会造成数据丢失等后果。</div>
      <div class="site-panel">
        <p class="site-eyebrow">OPERATING SYSTEM</p>
        <h2 id="system-downloads-title">下载 XJ380 操作系统</h2>
        <div v-for="version in versions" :key="version.version">
          <p class="site-copy">Version {{ version.version }}</p>
          <div v-if="version.downloads?.length" class="site-actions">
            <a v-for="download in version.downloads" :key="download.name" :href="download.url" class="site-button site-button--small">{{ download.name }}（{{ download.type }}）</a>
          </div>
        </div>
        <div class="site-actions"><router-link to="/os/xj380" class="site-link">了解 XJ380 <span aria-hidden="true">→</span></router-link></div>
      </div>
    </section>
    <section id="system-requirements" class="site-container site-section" aria-labelledby="requirements-title">
      <div class="site-section__heading">
        <div><p class="site-eyebrow">BEFORE YOU START</p><h2 id="requirements-title">系统配置要求</h2></div>
      </div>
      <div class="site-grid">
        <article class="site-panel">
          <h3>最低配置要求</h3>
          <dl class="site-specs"><div v-for="req in requirements" :key="req.name"><dt>{{ req.name }}</dt><dd>{{ req.spec }}</dd></div></dl>
        </article>
        <article class="site-panel">
          <h3>推荐配置要求</h3>
          <dl class="site-specs"><div v-for="req in requirements2" :key="req.name"><dt>{{ req.name }}</dt><dd>{{ req.spec }}</dd></div></dl>
        </article>
      </div>
    </section>
    <section id="developer-tools" class="site-container site-section" aria-labelledby="tools-title">
      <div class="site-section__heading">
        <div><p class="site-eyebrow">BUILD FOR XJ380</p><h2 id="tools-title">开发者工具及文档</h2></div>
      </div>
      <p class="site-note site-note--spaced">请注意：XXCC 依赖于 Clang 18.1.8 或更高版本。</p>
      <div class="site-panel">
        <article v-for="tool in devTools" :key="tool.name" class="site-download-row">
          <h3>{{ tool.name }}</h3>
          <div class="site-actions">
            <a :href="tool.url" class="site-button site-button--small">主链接下载 <span aria-hidden="true">↓</span></a>
            <a :href="tool.backupUrl" class="site-button site-button--small">备用链接下载 <span aria-hidden="true">↓</span></a>
            <a :href="tool.githubUrl" class="site-button site-button--small">GitHub 下载 <span aria-hidden="true">↗</span></a>
          </div>
        </article>
      </div>
    </section>
    <section class="site-container site-section" aria-labelledby="platform-title">
      <div class="site-panel">
        <h2 id="platform-title">适用平台</h2>
        <p class="site-copy">使用 x86_64 架构且支持 UEFI 的所有平台。</p>
        <div class="site-actions"><router-link to="/os/xj380/error" class="site-link">查看故障代码与帮助 <span aria-hidden="true">→</span></router-link></div>
      </div>
    </section>
  </div>
</template>
