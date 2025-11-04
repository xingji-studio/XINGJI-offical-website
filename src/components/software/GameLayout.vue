<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 class="text-4xl font-bold text-white mb-4 text-center">{{ title }}</h1>
      <p class="text-xl text-gray-400 mb-12 text-center">{{ subtitle }}</p>
      
      <slot></slot>
    </div>
  </div>
</template> 