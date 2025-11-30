<script setup lang="ts">
import { authStore } from '../stores/auth';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const auth = authStore;
const router = useRouter();

onMounted(() => {
  if (!auth.isAuthenticated) {
    router.push('/login?redirect=/test');
  }
});
</script>
<template>
  <div class="min-h-screen bg-gray-900 text-white p-4 pt-20">
    <div class="max-w-2xl mx-auto">
      <h1 class="text-4xl font-bold mb-6 text-blue-400">测试页面</h1>
      
      <div class="bg-gray-800 rounded-lg p-6 shadow-lg">
        <p class="text-lg mb-4">欢迎，{{ auth.currentUser?.username }}！</p>
        <p class="text-gray-300 mb-6">这是一个只有已登录用户才能访问的测试页面。</p>
        
        <div class="bg-blue-900/30 border border-blue-500/30 rounded-md p-4">
          <h3 class="text-xl font-semibold mb-2 text-blue-300">用户信息</h3>
          <p><strong>用户名：</strong> {{ auth.currentUser?.username }}</p>
          <p><strong>认证状态：</strong> 已登录</p>
        </div>
        
        <div class="mt-8 text-center">
          <router-link to="/" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200">
            返回首页
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>