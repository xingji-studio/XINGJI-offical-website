<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@vueuse/head'
import PageHero from '../../components/PageHero.vue'

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
  <div class="site-page">
    <PageHero title="关于我们" subtitle="为兴趣而聚，为爱发电。" description="往日概览 / 核心成员 / 我们的过往" image="/about/school.webp" eyebrow="THE STUDIO" />
    <section id="studio-history" class="site-container site-section" aria-labelledby="history-title">
      <div class="site-history">
        <div>
          <p class="site-eyebrow">SINCE 2017</p>
          <h2 id="history-title">辉煌之路（省流）</h2>
          <p class="site-copy">在 2017 年的一个冬天，XINGJI 团队（此时未更名为工作室）在人大附中朝阳学校（212校区）成立。最开始工作室由同级三位同学组建（右图右3右4），从事各种杂活，逐渐吸引了大量成员加入，鼎盛时期拥有高达 17 名同班成员，右图中所有同学都加入过 XINGJI。在 2020 年更名为 XINGJI 工作室。同年，学生群体中模仿我们的其他小团体如雨后春笋般涌出，例如右图右2。</p>
          <div class="site-actions"><router-link to="/join" class="site-link">加入我们的探索 <span aria-hidden="true">→</span></router-link></div>
        </div>
        <figure>
          <div class="site-media"><img src="/about/right1.jpg" alt="XINGJI 早期成员毕业合影" loading="lazy" decoding="async" /></div>
          <figcaption>注：本照片为在小学时拍摄的毕业照。</figcaption>
        </figure>
      </div>
    </section>
    <section id="studio-members" class="site-container site-section" aria-labelledby="members-title">
      <div class="site-section__heading">
        <div><p class="site-eyebrow">THE PEOPLE BEHIND XINGJI</p><h2 id="members-title">核心成员</h2></div>
      </div>
      <div class="site-grid">
        <article v-for="member in memInfo" :key="member.name" class="site-panel site-member">
          <img :src="member.image" :alt="member.name" width="88" height="88" loading="lazy" decoding="async" />
          <div>
            <h3>{{ member.name }}</h3>
            <p class="site-member__role">{{ member.title }}</p>
            <ul><li v-for="achievement in member.achievements" :key="achievement">{{ achievement }}</li></ul>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
