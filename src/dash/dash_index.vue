<script setup lang="ts">
import { authStore } from '../stores/auth';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue'

const auth = authStore;
const router = useRouter();

const account_tabs = ref([
  {
    title: '测试',
    description: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试',
    image: '/files/os.png',
    link: '/os/xj380'
  },
  {
    title: '测试',
    description: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试',
    image: '/files/os.png',
    link: '/os/xj380'
  },
  {
    title: '测试',
    description: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试',
    image: '/files/os.png',
    link: '/os/xj380'
  },
  {
    title: '测试',
    description: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试',
    image: '/files/os.png',
    link: '/os/xj380'
  },
])

onMounted(() => {
  if (!auth.isAuthenticated) {
    router.push('/login?redirect=/test');
  }
});
</script>
<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20">
    <section class="py-12 px-4 relative">
      <div class="max-w-7xl mx-auto">
        <p class="text-xl text-white mb-2">
          欢迎回来！{{ auth.currentUser?.username }}
        </p>
        <h1 class="text-4xl font-bold text-white mb-8">账户主页</h1>
      </div>
    </section>

    <!-- Products Section -->
    <section class="px-4 relative">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="account_tab in account_tabs" :key="account_tab.title" class="group relative">
            <div
              class="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur">
            </div>
            <div class="relative bg-[#222e40] backdrop-blur-md rounded-2xl p-6 group h-full flex flex-col justify-between shadow-lg">
              <div>
                <div class="w-full h-48 rounded mb-4 bg-gray-50 overflow-hidden">
                  <img :src="account_tab.image" :alt="account_tab.title"
                    class="w-full h-full object-contain transition-all duration-300">
                </div>
                <h3 class="text-xl font-bold text-white mb-2">{{ account_tab.title }}</h3>
                <p class="text-gray-400 mb-4">{{ account_tab.description }}</p>
              </div>

              <a :href="account_tab.link"
                class="inline-flex items-center text-blue-400 fill-blue-400 hover:text-blue-300 hover:fill-blue-300 transition-all duration-200 leading-4">
                <span>测试</span>
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path
                    d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>