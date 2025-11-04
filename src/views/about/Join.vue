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
    headcount: 10,
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
    title: '美工',
    department: 'XINGJI XJ380 Develop Department',
    requirements: '会设计UI。',
    headcount: 2,
    tags: ['岗位稳定', '急招']
  },
  {
    title: '网页工程师',
    department: 'XINGJI Website Develop Department',
    requirements: '会较为熟练运用基础的Vue+Vite、CSS等，学习能力强。有网页开发经验者（尤其是做过滚动驱动动画的）优先。',
    headcount: 3,
    tags: ['有奖金', '岗位稳定', '急招']
  },
  {
    title: '封面设计',
    department: 'XINGJI Propaganda Department',
    requirements: '知道如何设计封面、标题可以获得最大流量。',
    headcount: 2,
    tags: ['有奖金', '岗位稳定']
  },
  {
    title: '视频结构规划（导演）',
    department: 'XINGJI Propaganda Department',
    requirements: '知道如何规划视频结构及特效可以最大留存关注并激励其互动',
    headcount: 2,
    tags: ['有奖金', '岗位稳定']
  },
  {
    title: '视频制作（剪辑）',
    department: 'XINGJI Propaganda Department',
    requirements: '会较为熟练运用Pr、Ae (达芬奇等也可以) 等专业剪辑工具的基础功能，学习能力强。',
    headcount: 5,
    tags: ['有奖金', '岗位稳定']
  },
  {
    title: '宣传部副部长',
    department: 'XINGJI Propaganda Department',
    requirements: '拥有宣传部其他岗位的能力（可以稍微弱一些但肯定不能不懂），擅长管理与激励成员。',
    headcount: 1,
    tags: ['有奖金', '岗位稳定']
  },
  {
    title: '人力资源部部长/副部长',
    department: 'XINGJI Nigger Resources Department',
    requirements: '会说话会挖人，能精准选取需要或预备需要的人才。',
    headcount: 2,
    tags: ['有奖金', '岗位稳定']
  },
  {
    title: '市场部部长/副部长',
    department: 'XINGJI Marketing Department',
    requirements: '拥有市场部其他岗位的能力，擅长管理与激励成员。',
    headcount: 2,
    tags: ['有奖金', '岗位稳定']
  },
  {
    title: '市场营销/规划',
    department: 'XINGJI Marketing Department',
    requirements: '会分析市场形势、趋势及如何定价、设计、包装并营销。',
    headcount: 3,
    tags: ['有奖金', '岗位稳定']
  },
  {
    title: '纪检部部长/副部长',
    department: 'XINGJI Discipline Inspection Department',
    requirements: '预防、阻止和上报可疑人员、泄密人员和私自挪用公款人员。',
    headcount: 3,
    tags: ['有奖金', '岗位稳定']
  },
  {
    title: '董事/CEO秘书',
    department: 'XINGJI Board Organization',
    requirements: '你觉得要干什么呢',
    headcount: 1,
    tags: ['有奖金', '岗位稳定']
  },
  {
    title: 'XINGJI Games 工作室室长',
    department: 'XINGJI Games',
    requirements: '有较强领导能力，会较为熟练运用基础的C\\C++，学习能力强。',
    headcount: 2,
    tags: ['有奖金', '岗位稳定']
  },
  {
    title: '星际云工作室室长/副室长',
    department: 'XINGJI Cloud',
    requirements: '有较强领导能力，会较为熟练运用基础的C\\C++、Python，熟悉硬件，学习能力强。',
    headcount: 2,
    tags: ['有奖金', '岗位稳定']
  },
  {
    title: '美术',
    department: 'XINGJI Games',
    requirements: '会画画。',
    headcount: 5,
    tags: ['有奖金', '岗位稳定']
  },
])

const benefits = ref([
  {
    title: '成员福利',
    description: '每个XINGJI工作室成员都可以免费申请一台云服务器和邮箱！只要你干的出色，每个项目你都可以拿到奖金！甚至我们可以为你买一台电脑！只要你对该项目做出贡献，我们一定会在下期视频点名表扬！加入我们，享受所有初中生工作室里最好的福利！'
  },
  {
    title: '及其人性的作息',
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
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur"></div>
          <div class="relative bg-gray-800/50 backdrop-blur-md rounded-2xl p-8">
            <h2 class="text-2xl font-bold text-white mb-4">{{ benefit.title }}</h2>
            <p class="text-gray-400">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 
