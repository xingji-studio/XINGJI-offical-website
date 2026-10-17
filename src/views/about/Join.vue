<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@vueuse/head'
import PageHero from '../../components/PageHero.vue'

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
  }
])

const benefits = ref([
  {
    title: '资源赋能',
    description: '海量免费大模型 Token ，提供全方位的 AI 支持。项目期间产生的所有必要开支均由工作室承担，若项目产出优质成果，核心成员还将获得额外的心意酬谢！'
  },
  {
    title: '协作节奏',
    description: '每个成员可根据自己的课业和生活节奏，灵活安排协作时间。我们只设置少量关键里程碑（如发布日期），想写就写，不想写就玩！'
  },
  {
    title: '优秀的学生工作室',
    description: 'XINGJI工作室创立于2017年，到今天已经走了很远。工作室包括创始人在内的成员大部分为在读学生。过去的成就，未来的目标，都由我们共同呈现！'
  }
])
</script>

<template>
  <div class="site-page">
    <PageHero title="欢迎加入 XINGJI" subtitle="为兴趣而聚，为爱发电。" description="加入我们，一起为我们共同的目标贡献力量，同时享受我们提供的海量资源。" eyebrow="JOIN THE STUDIO" />
    <section id="open-positions" class="site-container site-section" aria-labelledby="positions-title">
      <div class="site-section__heading">
        <div><p class="site-eyebrow">CREATE WITH US</p><h2 id="positions-title">一起创造下一件作品</h2></div>
      </div>
      <div class="site-grid">
        <article v-for="position in positions" :key="position.title" class="site-panel site-panel--stretch">
          <div class="site-job__header">
            <div><h3>{{ position.title }}</h3><p class="site-job__department">{{ position.department }}</p></div>
            <div class="site-job__tags"><span v-for="tag in position.tags" :key="tag" class="site-badge">{{ tag }}</span></div>
          </div>
          <p class="site-copy">{{ position.requirements }}</p>
          <div class="site-job__footer">
            <p class="site-muted">招募人数：{{ position.headcount }}</p>
            <a href="https://shorturl.at/J1VE9?uid=1559689519" target="_blank" rel="noopener noreferrer" class="site-button site-button--small">联系我们 <span aria-hidden="true">↗</span></a>
          </div>
        </article>
      </div>
    </section>
    <section id="member-benefits" class="site-container site-section" aria-labelledby="benefits-title">
      <div class="site-section__heading">
        <div><p class="site-eyebrow">GROW TOGETHER</p><h2 id="benefits-title">协作、支持与成长</h2></div>
      </div>
      <div class="site-grid site-grid--three">
        <article v-for="benefit in benefits" :key="benefit.title" class="site-panel">
          <h3>{{ benefit.title }}</h3><p class="site-copy">{{ benefit.description }}</p>
        </article>
      </div>
    </section>
  </div>
</template>
