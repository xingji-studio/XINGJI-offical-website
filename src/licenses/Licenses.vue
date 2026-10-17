<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@vueuse/head'
import PageHero from '../components/PageHero.vue'

useHead({
  title: 'Licenses | XINGJI Studio',
  meta: [
    {
      name: 'description',
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
  <div class="site-page">
    <PageHero title="用户许可协议" subtitle="XINGJI 工作室" description="查看 XJ380 用户许可协议与交流群群聊规定。" eyebrow="LICENSES & GUIDELINES" compact />
    <section class="site-container site-section" aria-labelledby="licenses-title">
      <div class="site-section__heading">
        <div><p class="site-eyebrow">DOCUMENTS</p><h2 id="licenses-title">协议与规定</h2></div>
      </div>
      <div class="site-stack">
        <a v-for="(document, index) in licenses_tabs" :key="document.title" :href="document.link" class="site-panel site-document">
          <div>
            <p class="site-eyebrow">0{{ index + 1 }} / XJ380</p>
            <h3>{{ document.title }}</h3>
            <span class="site-link">阅读文档</span>
          </div>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" /></svg>
        </a>
      </div>
    </section>
  </div>
</template>
