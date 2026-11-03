<script setup lang="ts">
import PageHero from '../PageHero.vue'

withDefaults(defineProps<{
  title: string
  subtitle: string
  image?: string
  eyebrow?: string
}>(), {
  image: '/bg1.png',
  eyebrow: 'XINGJI SOFTWARE',
})
</script>

<template>
  <div class="site-page">
    <PageHero :title="title" :subtitle="subtitle" :image="image" :eyebrow="eyebrow">
      <template v-if="$slots.background" #background>
        <slot name="background" />
      </template>
      <template v-if="$slots.actions" #actions>
        <slot name="actions" />
      </template>
    </PageHero>
    <section class="site-container site-section" aria-label="作品详情">
      <slot />
    </section>
  </div>
</template>
