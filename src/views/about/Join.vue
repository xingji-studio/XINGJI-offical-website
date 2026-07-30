<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Join Us | XINGJI Studio',
  meta: [
    {
      name: 'description',
      content: '加入我们，一起为我们共同的目标贡献力量，同时享受我们提供的海量资源。',
    },
  ],
})

const positions = ref([
  {
    title: 'C/C++ 图形软件开发者',
    department: 'XINGJI Interactive Software',
    requirements: '会较为熟练运用基础的C\\C++，学习能力强。有SDL开发经验或计算机图形学经验者优先。',
    headcount: 3,
    tags: ['微偿', '稳定', '急招']
  },
  {
    title: 'XJ380 C/C++ 开发者',
    department: 'XINGJI XJ380 Develop Department',
    requirements: '了解一定的操作系统底层原理，有 C/C++ 开发经验。',
    headcount: 5,
    tags: ['微偿', '稳定', '急招']
  },
  {
    title: "AI 开发者",
    department: "XINGJI AI Department",
    requirements: "熟练掌握Python，了解大模型底层原理，会使用PyTorch/TensorFlow等深度学习框架。",
    headcount: 1,
    tags: ["微偿", "稳定", "急招"]
    
  },
  {
    title: '美工',
    department: 'XINGJI XJ380 Develop Department',
    requirements: '有 UI 设计经验，会使用专业设计工具。',
    headcount: 2,
    tags: ['微偿', '稳定', '急招']
  },
  {
    title: '编剧',
    department: 'XINGJI Animation Department',
    requirements: '有一定文学功底，了解一定的动画制作相关知识。',
    headcount: 3,
    tags: ['微偿', '稳定']
  },
  {
    title: '提示词工程师',
    department: 'XINGJI Animation Department',
    requirements: '会使用 AI 工具，能够编写提示词，对动画分镜拥有一定了解。',
    headcount: 3,
    tags: ['微偿', '稳定']
  },
])

const benefits = ref([
  {
    title: '资源赋能',
    description: '海量免费大模型 Token ，提供全方位的 AI 支持。项目期间产生的所有必要开支均由工作室承担，若项目产出优质成果，核心成员还将获得额外的心意酬谢！'
  },
  {
    title: '协作节奏',
    description: '每个成员可根据自己的课业和生活节奏，灵活安排协作时间。我们只设置少量关键里程碑（如发布日期），在节点前自由冲刺，节点后安心休息。'
  },
  {
    title: '优秀的学生工作室',
    description: 'XINGJI工作室创立于2017年，到今天已经走了很远。工作室包括创始人在内的成员大部分为在读学生。过去的成就，未来的目标，都由我们共同呈现！'
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
              <p class="text-gray-400">招募人数：{{ position.headcount }}</p>
              <a href="https://shorturl.at/J1VE9?uid=1559689519"
                target="_blank"
                class="inline-flex items-center px-6 py-3 rounded-xl bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors duration-200">
                联系我们
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



