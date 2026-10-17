<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  eyebrow?: string
  subtitle?: string
  description?: string
  image?: string
  compact?: boolean
}>(), {
  eyebrow: 'XINGJI INTERACTIVE SOFTWARE',
  subtitle: '',
  description: '',
  image: '/bg1.png',
  compact: false,
})
</script>

<template>
  <section class="page-hero" :class="{ 'page-hero--compact': compact }" aria-labelledby="page-title">
    <div class="page-hero__background" aria-hidden="true">
      <img :src="image" alt="" fetchpriority="high" />
    </div>
    <div class="site-container page-hero__content">
      <div class="page-hero__intro">
        <p class="site-eyebrow">{{ eyebrow }}</p>
        <h1 id="page-title">{{ title }}</h1>
        <p v-if="subtitle" class="page-hero__subtitle">{{ subtitle }}</p>
        <p v-if="description" class="page-hero__description">{{ description }}</p>
        <div v-if="$slots.actions" class="site-actions">
          <slot name="actions" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped src="../styles/page-hero.css"></style>
