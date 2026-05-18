<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Join Us | XINGJI Studio',
  meta: [
    {
      name: 'description',
      content: '成员福利：每个XINGJI工作室成员都可以免费申请一台云服务器！只要你干的出色，每个项目你都可以拿到奖金！甚至我们可以为你买一台电脑！\
只要你对该项目做出贡献，我们一定会在下期视频点名表扬！加入我们，享受所有初中生工作室里最好的福利！\n\
及其人性的作息：从不强迫你干活！如果你有所耳闻XJ380的开发速度，你就知道有多宽松了。（但似乎最近要严抓了？）\n\
全国顶尖的初中生工作室：XINGJI工作室创立于2017年，历史悠久。目前创始人在读初中，工作室也已取得卓越成就。加入我们，你也可以！\n\
丰富的资源：XINGJI工作室拥有丰富的资源，包括但不限于：C/C++、汇编、图形化、游戏开发、美术、服务器等。',
    },
  ],
})

const positions = ref([
  {
    title: 'C/C++ 图形化工程师',
    department: 'XINGJI Interactive Software',
    requirements: '会较为熟练运用基础的C\\C++，学习能力强。有SDL开发经验或计算机图形学经验者优先。',
    headcount: 3,
    tags: ['有奖金', '岗位稳定', '急招']
  },
  {
    title: 'XJ380 C/C++ 工程师',
    department: 'XINGJI XJ380 Develop Department',
    requirements: '会较为熟练运用基础的C\\C++，学习能力强。有操作系统开发经验者优先。',
    headcount: 5,
    tags: ['有奖金', '岗位稳定', '急招']
  },
  {
    title: "AI工程师",
    department: "XINGJI AI Department",
    requirements: "熟练掌握Python，了解大模型底层原理，会使用PyTorch/TensorFlow等深度学习框架。",
    headcount: 0.5,
    tags: ["有奖金", "岗位稳定", "急招"]
    
  },
  {
    title: '美工',
    department: 'XINGJI XJ380 Develop Department',
    requirements: '会设计UI。',
    headcount: 2,
    tags: ['岗位稳定', '急招']
  },
  {
    title: '编剧',
    department: 'XINGJI Animation Department',
    requirements: '-',
    headcount: 3,
    tags: ['有奖金', '岗位稳定']
  },
  {
    title: '提示词工程师',
    department: 'XINGJI Animation Department',
    requirements: '-',
    headcount: 3,
    tags: ['有奖金', '岗位稳定']
  },
])

const benefits = ref([
  {
    title: '成员福利',
    description: '每个XINGJI工作室成员都可以免费申请一台云服务器和邮箱！只要你干的出色，每个项目你都可以拿到奖金！甚至我们可以为你买一台电脑！只要你对该项目做出贡献，我们一定会在下期视频点名表扬！加入我们，享受所有初中生工作室里最好的福利！'
  },
  {
    title: '极其人性的作息',
    description: 'GOOOOOOOO WORRRRRRRRRRRRKKKKKKK!!!!!!!!!!!!!!!!!!'
  },
  {
    title: '全国顶尖的初中生工作室',
    description: 'XINGJI工作室创立于2017年，历史悠久。目前创始人在读初中，工作室也已取得卓越成就。加入我们，你也可以！'
  },
  {
    title: '丰富的资源',
    description: 'XINGJI工作室已与全国 4 家其他工作室达成合作！来这里，你可以体验到最丰富的资源！'
  }
])
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 class="text-4xl font-bold text-white mb-12 text-center">XINGJI工作室，欢迎您的加入！</h1> <!-- 这里mb原来是12 -->
      <!-- Job Positions -->

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div v-for="position in positions" 
          :key="position.title"
          class="group relative">
          <div class="relative bg-gray-800/50 backdrop-blur-md rounded-2xl p-8">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h2 class="text-2xl font-bold text-white">{{ position.title }}</h2>
                <p class="text-gray-400">{{ position.department }}</p>
              </div>
              <div class="flex gap-2">
                <span v-for="tag in position.tags"
                  :key="tag"
                  class="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                  {{ tag }}
                </span>
              </div>
            </div>
            <p class="text-gray-400 mb-4">{{ position.requirements }}</p>
            <div class="flex justify-between items-center">
              <p class="text-gray-400">招聘人数：{{ position.headcount }}</p>
              <a href="https://shorturl.at/J1VE9?uid=1559689519"
                target="_blank"
                class="inline-flex items-center px-6 py-3 rounded-xl bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors duration-200">
                立即联系我们
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Benefits -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="benefit in benefits" 
          :key="benefit.title"
          class="group relative">
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur"></div>
          <div class="relative bg-gray-800/50 backdrop-blur-md rounded-2xl p-8">
            <h2 class="text-2xl font-bold text-white mb-4">{{ benefit.title }}</h2>
            <p class="text-gray-400">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 



