<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Licenses | XINGJI Studio',
  meta: [
    {
      name: 'Licenses',
      content: 'XINGJI工作室许可协议 | Licenses',
    },
  ],
})

const licenses_tabs = ref([
  {
    title: 'XJ380OS 交流群群聊规定',
    link: 'https://docs.xingjisoft.com/licenses/XJ380OS_Group_Chat_Licenses.txt'
  },
  {
    title: 'XJ380 用户许可协议',
    link: 'https://docs.xingjisoft.com/licenses/XJ380_EULA.html'
  },
])

</script>
<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20">
    <section class="py-12 px-4 relative">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-4xl font-bold text-white mb-8">XINGJI 工作室用户许可协议</h1>
      </div>
    </section>

    <!-- 这里需要使用GBK编码的文本文件 -->
    <section class="px-4 relative">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-1 gap-8">
          <a v-for="licenses_tab in licenses_tabs" 
            :key="licenses_tab.title"
            :href="licenses_tab.link"
            class="group relative">
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur"></div>
            <div class="relative bg-[#222e40] backdrop-blur-md rounded-2xl p-6 group h-full flex flex-col justify-between shadow-lg">
              <div class="flex items-center space-x-4">
                <h2 class="text-2xl font-bold text-white">{{ licenses_tab.title }}</h2> 
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>