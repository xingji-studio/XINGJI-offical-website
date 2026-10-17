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
  <div class="site-shell">
    <a class="site-skip-link" href="#main-content">跳到正文</a>
    <Navigation :nav-name="navName" />
    <main id="main-content" class="site-main" tabindex="-1">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
