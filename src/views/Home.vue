<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@vueuse/head'
import { ArrowRightIcon, ArrowUpRightIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'

useHead({
  title: '星际工作室 | XINGJI Studio',
  meta: [
    {
      name: 'description',
      content: 'XINGJI 工作室是一群中小学生组成的科技类兴趣组织，我们为兴趣而聚，为爱发电，共筑新一代未来！ \
                上至人工智能，下至操作系统，左至游戏引擎，右至日常工具，我们均有作品和相关经验。 \
                欢迎关注 B 站 @人朝的小郭同学 获取相关动态。',
    },
  ],
})

const products = ref([
  {
    title: '操作系统',
    description: 'XJ380操作系统，完全自主研发，采用 UEFI 引导方式，安全、可靠',
    image: '/files/os.png',
    link: '/os/xj380'
  },
  {
    title: '人工智能',
    description: 'XINGJI 大模型助力日常生活 AI 化',
    image: '/files/ai.png',
    link: null
  },
  {
    title: '软件作品',
    description: '高质量的软件解决方案',
    image: '/files/software.png',
    link: '/software'
  },
  {
    title: '网络服务',
    description: '互联网的组成，组织的门面',
    image: '/files/web.png',
    link: null
  }
])

const news_posts = ref([
  {
    title: 'XINGJI 工作室公布本年度经济报告',
    image: '/files/XBO.png',
    description: '今年工作室收入和亏损均创新高，亏损相比去年增长 14297.54%。',
    more_text: '立刻查看',
    link: '/resources/XINGJI_Interactive_Software_2026_经济情况年报.pdf'
  },
  {
    title: 'XJ380 开源',
    image: '/primage.png',
    description: '耗时四年，XJ380 正式开源。',
    more_text: '立刻查看',
    link: '/open-source'
  },
  {
    title: 'XJ380 API 编译套件现已公布',
    image: '/LOGO带底.png',
    description: '适用于 XJ380 操作系统的 XJ380 API 编译套件现已公布。欢迎各位开发者为 XJ380 的生态注入一份自己的力量！',
    more_text: '立刻开始“星际”之旅',
    link: '/os/xj380/download'
  },
]);

const partners = ref([
  {
    name: '德沃洛普工作室',
    logo: '/files/develop_studio.png',
    link: 'http://pbhmjfsk.e.cn.vc/zh'
  },
  {
    name: '福瑞同萌',
    logo: '/files/furries.png',
    link: 'https://furries.com.cn/'
  },
  {
    name: 'PCC工作室',
    logo: '/files/pcc.png',
    link: 'https://pcc.xingjisoft.com/'
  },
  {
    name: 'HGSpace',
    logo: '/files/HGSpace.png',
    link: 'https://www.hgspace.work'
  }
])

const news = ref({
  title: 'XJ380API',
  headline: '标准发布',
  subtitle: 'XINGJI XJ380 Operating System',
  description: 'XJ380API 1.4 版本正式发布！数百条新函数，携手开启原生软件新纪元！',
  link: '/os/xj380/download#developer-tools',
  image: {
    src: '/primage.png',
  },
});

</script>

<template>
  <div class="home-page">
    <section class="home-hero" aria-labelledby="home-title">
      <div class="home-hero__background" aria-hidden="true">
        <img :src="news.image.src" alt="" fetchpriority="high" />
      </div>
      <div class="home-container home-hero__content">
        <div class="home-hero__intro">
          <p class="home-eyebrow">XINGJI INTERACTIVE SOFTWARE</p>
          <h1 id="home-title" class="home-hero__title">{{ news.title }} {{ news.headline }}</h1>
          <p class="home-hero__subtitle">{{ news.subtitle }}</p>
          <p class="home-hero__description">{{ news.description }}</p>
          <div class="home-actions">
            <a :href="news.link" target="_blank" rel="noopener noreferrer" class="home-button home-button--primary">
              立刻下载工具&文档
              <ArrowUpRightIcon aria-hidden="true" />
            </a>
            <router-link to="/os/xj380" class="home-button">探索 XJ380</router-link>
          </div>
        </div>
      </div>
      <div class="home-container home-hero__bottom">
        <a href="#home-products" class="home-hero__explore">
          探索我们的作品
          <ChevronDownIcon aria-hidden="true" />
        </a>
        <span class="home-hero__caption">自主研发 · 开放探索</span>
      </div>
    </section>

    <section id="home-products" class="home-section home-container" aria-labelledby="products-title">
      <div class="home-section__heading">
        <div>
          <p class="home-eyebrow">OUR WORK</p>
          <h2 id="products-title">我们的作品及服务</h2>
        </div>
        <p class="home-section__description">从操作系统到人工智能，从软件工具到网络服务，<br class="home-desktop-break" />把兴趣变成看得见的作品。</p>
      </div>
      <div class="home-products">
        <article v-for="product in products" :key="product.title" class="home-product">
          <router-link v-if="product.link" :to="product.link" class="home-product__image-link" :aria-label="`了解${product.title}`">
            <div class="home-product__media">
              <img :src="product.image" :alt="product.title" loading="lazy" decoding="async" />
            </div>
          </router-link>
          <div v-else class="home-product__media">
            <img :src="product.image" :alt="product.title" loading="lazy" decoding="async" />
          </div>
          <div class="home-product__body">
            <div>
              <h3>{{ product.title }}</h3>
              <p>{{ product.description }}</p>
            </div>
            <router-link v-if="product.link" :to="product.link" class="home-text-link">
              了解更多 <ArrowRightIcon aria-hidden="true" />
            </router-link>
            <span v-else class="home-product__category">探索领域</span>
          </div>
        </article>
      </div>
    </section>

    <section class="home-news-section" aria-labelledby="news-title">
      <div class="home-section home-container">
        <div class="home-section__heading">
          <div>
            <p class="home-eyebrow">LATEST FROM XINGJI</p>
            <h2 id="news-title">近期新闻</h2>
          </div>
          <span class="home-section__description">记录每一步探索与进展。</span>
        </div>
        <div class="home-news">
          <article v-for="post in news_posts" :key="post.title" class="home-news-card">
            <a :href="post.link" class="home-news-card__image-link" :aria-label="post.title">
              <div class="home-news-card__media" :class="{ 'home-news-card__media--poster': post.image === '/primage.png' }">
                <img :src="post.image" :alt="post.title" loading="lazy" decoding="async" />
              </div>
            </a>
            <div class="home-news-card__body">
              <h3>{{ post.title }}</h3>
              <p>{{ post.description }}</p>
              <a :href="post.link" class="home-text-link">
                {{ post.more_text }} <ArrowUpRightIcon aria-hidden="true" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="home-section home-container" aria-labelledby="studio-title">
      <div class="home-studio">
        <div class="home-studio__intro">
          <p class="home-eyebrow">THE STUDIO</p>
          <h2 id="studio-title">为兴趣而聚，<br />为爱发电。</h2>
          <p class="home-studio__description">我们是一群中小学生组成的科技类兴趣组织。从一个想法到一件作品，在共同探索中不断成长，共筑新一代未来。</p>
          <div class="home-actions">
            <router-link to="/about" class="home-button">了解工作室</router-link>
            <router-link to="/join" class="home-text-link">加入我们 <ArrowRightIcon aria-hidden="true" /></router-link>
          </div>
        </div>
        <div class="home-studio__highlights">
          <div class="home-highlight">
            <span class="home-highlight__index" aria-hidden="true">01</span>
            <h3>学生团队，共同进步</h3>
            <p>团队中的每个成员为共同的目标贡献自己的力量，在协作的过程中不断提升自我的能力和素质。</p>
          </div>
          <div class="home-highlight">
            <span class="home-highlight__index" aria-hidden="true">02</span>
            <h3>涉猎广泛</h3>
            <p>我们的各个作品项目涉及多个领域，全方位扩展我们的探索范围。</p>
          </div>
          <div class="home-highlight">
            <span class="home-highlight__index" aria-hidden="true">03</span>
            <h3>先进技术</h3>
            <p>我们的作品积极跟进当今前沿技术，积极拥抱新知识、新方案、新模式。</p>
          </div>
          <div class="home-highlight">
            <span class="home-highlight__index" aria-hidden="true">04</span>
            <h3>XJ380 操作系统</h3>
            <p>自主研发的 XSK2.1 内核，历经三次版本迭代，使用 UEFI 引导。普通版本可免费体验。</p>
          </div>
        </div>
      </div>
      <p class="home-studio__note">关于 XJ380：ULTRA 为抢先体验版本，通常比普通版本新 1～2 个版本，由于工作室日常开销超出我们学生能负担的范围，需提供合理范围内的赞助获取。我们提倡合理消费，赞助款将全部投入项目开发。</p>
    </section>

    <section class="home-partners-section" aria-labelledby="partners-title">
      <div class="home-section home-container">
        <div class="home-section__heading">
          <div>
            <p class="home-eyebrow">OUR PARTNERS</p>
            <h2 id="partners-title">我们的伙伴</h2>
          </div>
        </div>
        <div class="home-partners">
          <a v-for="partner in partners" :key="partner.name" :href="partner.link" target="_blank" rel="noopener noreferrer" class="home-partner">
            <div class="home-partner__logo">
              <img :src="partner.logo" :alt="partner.name" loading="lazy" decoding="async" />
            </div>
            <span>{{ partner.name }} <ArrowUpRightIcon aria-hidden="true" /></span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped src="../styles/home.css"></style>
