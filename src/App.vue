<script setup lang="ts">
import { ref, watch } from 'vue';
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import { useRoute } from 'vue-router';
let navName = ref('星际工作室');
const route = useRoute();

watch(
  () => route.meta.navName,
  (newName) => {
    if (newName) navName.value = newName as string;
    else navName.value = '星际工作室';
  },
  { immediate: true }
);
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-900">
    <Navigation :nav-name=navName />
    <main class="flex-1">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

body {
  @apply bg-gray-900;
}
</style>
