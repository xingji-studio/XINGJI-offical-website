<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'About | XINGJI Studio',
  meta: [
    {
      name: 'description',
      content: '在 2017 年的一个冬天， XINGJI 团队（此时未更名为工作室）在人大附中朝阳学校（212校区）成立。 \
              最开始工作室由同级三位同学组建（右图右3右4），从事各种杂活，逐渐吸引了大量成员加入， \
              鼎盛时期拥有高达 17 名同班成员，右图中所有同学都加入过 XINGJI 。在2020 \
              年更名为 XINGJI 工作室。同年，学生群体中模仿我们的其他小团体如雨后春笋般涌出，例如右图右2。',
    },
  ],
})

const memInfo = ref([
  {
    name: '@人朝的小郭同学',
    title: '董事长，CEO，XJ380操作系统总工程师等',
    image: '/about/rdfzsg.jpg',
    achievements: [
      'XINGJI工作室创始人、董事长兼CEO',
      '人大附中朝阳学校学生会宣传部部长',
      'XJ380操作系统项目发起人'
    ]
  }, 
  {
    name: '@二律背反^',
    title: '副董事长',
    image: '/about/elbfp.jpg',
    achievements: [
      'XINGJI工作室副董事长',
      '反正很牛逼就对了'
    ]
  }, 
  {
    name: '@魏tree',
    title: '副董事长',
    image: '/about/d90.jpg',
    achievements: [
      'XINGJI工作室创始人、副董事长',
      '还好我是体育生'
    ]
  }, 
  {
    name: '@小严awa',
    title: '副董事长、BridgeEngine总工程师',
    image: '/about/members/rainy101112.jpg',
    achievements: [
      'XINGJI工作室副董事长，ViudiraTech核心成员',
      'BridgeEngine总工程师、XJ380开发者、Uinxed内核项目开发者'
    ]
  }, 
  {
    name: '@VOID2913',
    title: 'XJ380副总工程师',
    image: '/about/members/void.jpg',
    achievements: [
      'XJ380副总工程师',
      '操作系统领域大佬，曾一周内速通现代操作系统，B站同名可以去看看'
    ]
  }, 
  {
    name: '@XIAOYI80386',
    title: 'XJ380开发者',
    image: '/about/members/xiaoyi.jpg',
    achievements: [
      'XJ380开发者',
      'CoolPotOS开发者'
    ]
  }, 
  {
    name: '@min0911',
    title: 'XJ380副总工程师',
    image: '/about/members/void.jpg',
    achievements: [
      'XJ380副总工程师',
      'PlantOS开发者'
    ]
  }, 
  {
    name: '@code-cube',
    title: 'XJ380开发者',
    image: '/about/members/codecube.jpg',
    achievements: [
      'XJ380开发组核心成员',
      '清华附郑州期末前八、郑东新区三好学生',
      //'IRO擂台赛金奖'
    ]
  }, 
  {
    name: '@XSlime',
    title: 'XJ380开发者、前端工程师',
    image: '/about/members/xslime.jpg',
    achievements: [
      'XJ380开发组核心成员、网页开发组前端工程师',
      'Uinxed内核项目开发者',
      '好像什么都会点'
    ]
  }, 
  {
    name: '@BugDuck-15-',
    title: '前端工程师',
    image: '/about/members/bugduck.jpg',
    achievements: [
      'XINGJI工作室网页开发组前端工程师',
      'BugDuck团队创始人',
      '前端及人工智能领域大佬'
    ]
  }, 
])

</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 class="text-4xl font-bold text-white mb-4 text-center">关于我们</h1>
      <h2 class="text-1xl text-white mb-10 text-center">往日概览 / 核心成员 / 我们的过往</h2>

      <!-- History Introduction with Image -->
      <div class="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 mb-12">
        <div class="flex flex-col lg:flex-row gap-8">
          <div class="lg:w-2/3">
            <h1 class="text-4xl font-blod text-white mb-4 text-left">辉煌之路（省流）</h1>
            <p class="text-gray-400 leading-relaxed">
              在 2017 年的一个冬天， XINGJI 团队（此时未更名为工作室）在人大附中朝阳学校（212校区）成立。
              最开始工作室由同级三位同学组建（右图右3右4），从事各种杂活，逐渐吸引了大量成员加入，
              鼎盛时期拥有高达 17 名同班成员，右图中所有同学都加入过 XINGJI 。在2020
              年更名为 XINGJI 工作室。同年，学生群体中模仿我们的其他小团体如雨后春笋般涌出，例如右图右2。
            </p>
            <br>
            <p class="text-gray-400 leading-relaxed">
              注：本照片为在小学时拍摄的毕业照。
            </p>
          </div>
          <div class="lg:w-1/3">
            <img 
              src="/about/right1.jpg" 
              alt="XINGJI 早期成员"
              class="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      <h1 class="text-4xl font-blod text-white mb-12 text-left">核心成员</h1>

      <!-- Member Info -->
      <div class="space-y-8">
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 flex space-x-4">
          <div v-for="member in memInfo" 
            :key="member.name"
            class="group relative">
            <div class="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 mb-12">
              <div class="flex flex-col md:flex-row gap-8">
                <img :src="member.image" alt="CEO" class="w-24 h-24 rounded-xl object-cover" />
                <div>
                  <h2 class="text-2xl font-bold text-white mb-2">{{ member.name }}</h2>
                  <h3 class="text-xl text-gray-400 mb-4">{{ member.title }}</h3>
                  <ul class="space-y-2">
                    <li v-for="achievement in member.achievements" 
                      :key="achievement"
                      class="text-gray-400">
                      {{ achievement }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      
    </div>
  </div>
</template> 