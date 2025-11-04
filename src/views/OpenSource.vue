<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Open Source | XINGJI Studio',
  meta: [
    {
      name: 'description',
      content: 'XINGJI工作室开发的开源软件 | 世界因开源而美好，我们因开源而奉献。',
    },
  ],
})

const projects = ref([
  {
    name: 'OpenXSKernel',
    description: `一个由XINGJI工作室开发的 UEFI 64位操作系统引导程序。
注意：该程序由XSK2.0改造而来，与XJ380所使用的XSK2.0有细微的差别。
OpenXSKernel现已被OSDev收录。`,
    links: [
      {
        text: '仓库链接',
        url: 'https://github.com/xingji-studio/OpenXSKernel'
      },
      {
        text: 'OSDev链接',
        url: 'https://wiki.osdev.org/Projects#O'
      }
    ]
  },
  {
    name: 'OpenXJ380',
    description: `一个由XINGJI工作室开发的32位操作系统。
注意：该程序由XJ380(Code Whisty)改造而来，不是XJ380最新版。这个破烂与XJ380 Singularity八竿子打不着。
OpenXJ380现已被OSDev收录，并于2025/11/3归档。`,
    links: [
      {
        text: '仓库链接',
        url: 'https://github.com/xingji-studio/OpenXJ380'
      },
      {
        text: 'OSDev链接',
        url: 'https://wiki.osdev.org/Projects#O'
      }
    ]
  }
])
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16">
    <!-- Hero Section -->
    <section class="relative py-20">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div class="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 backdrop-blur-3xl"></div>
      </div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 text-white">
          我们的开源软件
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          世界因<span class="font-bold italic text-blue-400">开源</span>而美好，
          我们因<span class="font-bold italic text-blue-400">开源</span>而奉献。
        </p>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="py-20 px-4 relative">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="project in projects" 
               :key="project.name"
               class="group relative">
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur"></div>
            <div class="relative bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 hover:transform hover:scale-[1.02] transition-all duration-300">
              <h2 class="text-2xl font-bold text-white mb-4">{{ project.name }}</h2>
              <p class="text-gray-400 mb-6 whitespace-pre-line">{{ project.description }}</p>
              <div class="flex flex-wrap gap-4">
                <a v-for="link in project.links" 
                   :key="link.url"
                   :href="link.url"
                   target="_blank"
                   class="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors duration-200">
                  {{ link.text }}
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="py-8 text-center text-white bg-gray-800/50 backdrop-blur-md">
      <p class="text-xl font-semibold">
        开源无处不在，XINGJI工作室将持续推进开源软件的发展。
      </p>
    </footer>
  </div>
</template> 