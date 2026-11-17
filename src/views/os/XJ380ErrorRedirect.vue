<script setup lang="ts">
import { onMounted } from 'vue'
import { useHead } from '@vueuse/head'

const docsUrl = 'https://docs.xingjisoft.com/manual/xj380/error/XJ380_error'

useHead({
  title: 'XJ380 故障排查 | XINGJI Studio',
  meta: [{ name: 'description', content: '前往 XJ380 故障排查文档，查看故障代码、原因和解决方案。' }],
  link: [{ rel: 'canonical', href: docsUrl }],
})

onMounted(() => {
  window.location.replace(docsUrl)
})
</script>

<template>
  <div class="site-page">
    <section class="site-container site-section" aria-labelledby="error-docs-title">
      <div class="site-panel">
        <p class="site-eyebrow">XJ380 / SUPPORT</p>
        <h1 id="error-docs-title" class="text-2xl font-bold">XJ380 故障排查文档</h1>
        <p class="site-copy mt-4">故障排查内容已迁移至文档站，正在为你跳转。</p>
        <div class="site-actions">
          <a :href="docsUrl" class="site-button site-button--primary">前往故障排查文档</a>
        </div>
      </div>
    </section>
  </div>
</template>
