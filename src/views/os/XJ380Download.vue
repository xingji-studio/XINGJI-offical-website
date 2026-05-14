<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Download XJ380 | XINGJI Studio',
  meta: [
    {
      name: 'description',
      content: 'Defautl description',
    },
  ],
})

const versions = ref([
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
    url: 'https://xjf.cn-nb1.rains3.com/XJ380_XACT_2026v4_xj380.zip',
    backupUrl: '#',
    origin_url: './temp/XJ380_XACT_2026v4_xj380.zip',
  },
  {
    name: 'XJ380 应用程序编译套件（XACT for Windows）',
    url: 'https://xjf.cn-nb1.rains3.com/XJ380_XACT_2026v4_windows.zip',
    backupUrl: '#',
    origin_url: './temp/XJ380_XACT_2026v4_windows.zip',
  },
  {
    name: 'XJ380 应用程序编译套件（XACT for Linux）',
    url: 'https://xjf.cn-nb1.rains3.com/XJ380_XACT_2026v4_linux.zip',
    backupUrl: '#',
    origin_url: './temp/XJ380_XACT_2026v4_linux.zip',
  },
  {
    name: 'XJ380 API 标准文档（C/C++）',
    url: 'https://xjf.cn-nb1.rains3.com/XJ380_API_Spec_CPP_1_3.pdf',
    backupUrl: '#',
    origin_url: './temp/XJ380_API_Spec_CPP_1_3.pdf',
  },
  {
    name: 'XJ380 API 静态链接库及头文件（C/C++）',
    url: 'https://xjf.cn-nb1.rains3.com/XJ380_CPP_API_Depend_1_3.zip',
    backupUrl: '#',
    origin_url: './temp/XJ380_CPP_API_Depend_1_3.zip',
  }
])

const requirements = ref([
  { name: '处理器', spec: 'x64 架构的 64 位处理器，基准频率 1 GHz 或更高' },
  { name: 'RAM', spec: '1 GB' },
  { name: '硬盘', spec: '至少 256 MB 或更大' },
  { name: '显示器', spec: '800 x 600 或更高' }
])

const requirements2 = ref([
  { name: '处理器', spec: 'x64 架构的 64 位处理器，基准频率 2 GHz 或更高' },
  { name: 'RAM', spec: '4 GB' },
  { name: '硬盘', spec: '至少 10 GB 或更大' },
  { name: '显示器', spec: '1920 x 1080 或更高' }
])
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 class="text-4xl font-bold text-white mb-8">下载XJ380</h1>
      <p class="text-gray-400 mb-8">
        请务必确认设备\虚拟机满足最低配置要求，否则可能会无法使用甚至损坏您的设备。
      </p>

      <!-- Download Section -->
      <div class="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 mb-8">
        <h2 class="text-2xl font-bold text-white mb-6">下载XJ380操作系统</h2>
        <div v-for="version in versions" :key="version.version" class="space-y-4">
          <h3 class="text-xl font-semibold text-white">Version {{ version.version }}</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a v-for="download in version.downloads" 
               :key="download.name"
               :href="download.url"
               class="inline-flex items-center px-6 py-3 rounded-xl bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors duration-200">
              {{ download.name }}（{{ download.type }}）
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- System Requirements -->
      <div class="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 mb-8">
        <h2 class="text-2xl font-bold text-white mb-6">最低配置要求</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="req in requirements" 
               :key="req.name"
               class="flex items-start space-x-4 p-4 rounded-xl bg-gray-700/30">
            <div class="font-semibold text-white min-w-[80px]">{{ req.name }}</div>
            <div class="text-gray-400">{{ req.spec }}</div>
          </div>
        </div>
      </div>

      <div class="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 mb-8">
        <h2 class="text-2xl font-bold text-white mb-6">推荐配置要求</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="req in requirements2" 
               :key="req.name"
               class="flex items-start space-x-4 p-4 rounded-xl bg-gray-700/30">
            <div class="font-semibold text-white min-w-[80px]">{{ req.name }}</div>
            <div class="text-gray-400">{{ req.spec }}</div>
          </div>
        </div>
      </div>

      <!-- Developer Tools -->
      <div class="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 mb-8">
        <h2 class="text-2xl font-bold text-white mb-6">开发者工具及文档</h2>
        <p class="text-gray-400 mb-8">
          请注意：XXCC 依赖于 Clang 18.1.8 或更高版本。
        </p>
        <div class="grid grid-cols-1 gap-4">
          <div v-for="tool in devTools"
               :key="tool.name"
               class="p-4 rounded-xl bg-gray-700/30">
            <div class="text-gray-300 mb-3 font-medium">{{ tool.name }}</div>
            <div class="flex flex-wrap gap-3">
              <a :href="tool.url"
                 class="inline-flex items-center px-4 py-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors duration-200 text-sm">
                主链接下载
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
              <a :href="tool.backupUrl"
                 class="inline-flex items-center px-4 py-2 rounded-lg bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-colors duration-200 text-sm">
                备用链接下载
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
              <a :href="tool.origin_url"
                 class="inline-flex items-center px-4 py-2 rounded-lg bg-gray-500/20 text-gray-400 hover:bg-gray-500/30 transition-colors duration-200 text-sm">
                官网链接下载（稳定但慢，优先用前俩）
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Platform Support -->
      <div class="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8">
        <h2 class="text-2xl font-bold text-white mb-4">适用平台</h2>
        <p class="text-gray-400">
          使用 x64 架构且支持 UEFI 的所有平台。
        </p>
      </div>
    </div>
  </div>

</template> 
