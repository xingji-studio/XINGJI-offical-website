<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'

useHead({
  title: 'XJ380 | XINGJI Studio',
  meta: [
    {
      name: 'description',
      content: 'Defautl description',
    },
  ],
})

const router = useRouter()

const handleDownload = () => {
  router.push('/os/xj380/download')
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16">
    <!-- Hero Section -->
    <section class="relative py-20">
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]">
        </div>
        <div
          class="absolute inset-0 bg-gradient-to-br from-cyan-500/25 via-sky-500/25 to-blue-600/25 backdrop-blur-3xl">
        </div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 text-white">
          XJ380 操作系统 — 64位操作系统
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-8">
          低资源占用、高性能、生态兼容
        </p>
        <button @click="handleDownload"
          class="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25">
          下载 XJ380 操作系统
        </button>
      </div>
    </section>

    <!-- Logo Section -->
    <section class="max-h-64 p-4 flex justify-center">
      <div class="max-w-7xl flex justify-center gap-2">
        <img src="/LOGO带底.png" alt="XJ380" class="overflow-hidden object-contain" />
        <img src="/ultra版LOGO带底.png" alt="XJ380 ULTRA" class="overflow-hidden object-contain" />
      </div>
    </section>

    <!-- Features Section -->
    <section class="p-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-white mb-4">XJ380有什么特别？</h3>
            <p class="text-gray-400">
              XJ380 采用完全由我们自主开发的 XSK2.1 内核，技术先进。64位架构，符合主流设备需求。支持 GUI 原生操作，拥有友好的界面。
            </p>
          </div>
          <div class="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-white mb-4">XJ380与前两个测试版有什么区别？</h3>
            <p class="text-gray-400">
              XJ380 最新版本采用 UEFI 进行引导，抛弃了以往使用的 Legacy Boot ；适用于x86_64架构，保障通用性；拥有FAT系列文件系统支持。
            </p>
          </div>
          <div class="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-white mb-4">XJ380有怎样的生态？</h3>
            <p class="text-gray-400">
              XJ380 提供了 XAPI 作为标准用户程序接口，同时支持 POSIX ，既拥有多方面兼容的同时又有我们自己的独创，为第三方软件开发者提供便利。
            </p>
          </div>
          <div class="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-white mb-4">XJ380的交互怎么样？</h3>
            <p class="text-gray-400">
              XJ380 支持图形化桌面及命令行，为拥有不同需求的用户提供多样化的操作环境。桌面已实现 GlassUI ，尽可能地提供美妙的视觉体验。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Version Info -->
    <section class="py-10 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8">
          <h3 class="text-2xl font-bold text-white mb-4"> XJ380 的各个版本有什么区别？又如何获取？</h3>
          <p class="text-gray-400">
            注：ULTRA版为抢先体验版本，普通版为ULTRA版的内容下放。关注B站@人朝的小郭同学可获取 XJ380 相关的福利资讯！
          </p>
        </div>
      </div>
    </section>
  </div>
</template>