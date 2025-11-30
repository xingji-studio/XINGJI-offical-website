<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { authStore } from '../../stores/auth';

const router = useRouter();
const route = useRoute();
const auth = authStore;

const username = ref('');
const password = ref('');
const showPassword = ref(false);
const redirect = ref('');

onMounted(() => {
  // 获取URL中的redirect参数
  const redirectParam = route.query.redirect;
  if (redirectParam && typeof redirectParam === 'string') {
    redirect.value = redirectParam;
  }
});

const handleSubmit = async () => {
  const success = await auth.login(username.value, password.value);
  if (success) {
    // 如果有redirect参数，重定向到该页面，否则重定向到首页
    router.push(redirect.value || '/');
  }
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-900 p-4 pt-20">
    <div class="w-full max-w-md bg-gray-800 rounded-lg shadow-xl overflow-hidden">
      <div class="bg-[#1da1f2] py-8 px-6">
        <h2 class="text-3xl font-bold text-white text-center">登录</h2>
        <p class="text-blue-100 text-center mt-2">欢迎回来！</p>
      </div>
      
      <div class="py-8 px-6">
        <!-- 错误信息显示 -->
        <div v-if="auth.error" class="bg-red-500/20 text-red-400 p-3 rounded-md mb-4 text-sm">
          {{ auth.error }}
        </div>
        
        <!-- 登录表单 -->
        <form @submit.prevent="handleSubmit">
          <!-- 用户名输入 -->
          <div class="mb-4">
            <label for="username" class="block text-gray-300 text-sm font-medium mb-1">用户名</label>
            <input
              type="text"
              id="username"
              v-model="username"
              required
              class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="请输入用户名"
            />
          </div>
          
          <!-- 密码输入 -->
          <div class="mb-6">
            <label for="password" class="block text-gray-300 text-sm font-medium mb-1">密码</label>
            <div class="relative">
              <input
                :type="showPassword ? 'text' : 'password'"
                id="password"
                v-model="password"
                required
                class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="请输入密码"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {{ showPassword ? '隐藏' : '显示' }}
              </button>
            </div>
          </div>
          
          <!-- 登录按钮 -->
          <button
            type="submit"
            :disabled="auth.loading"
            class="w-full bg-[#1da1f2] hover:bg-[#1da1f2] text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:bg-blue-500 disabled:cursor-not-allowed"
          >
            <span v-if="auth.loading">登录中...</span>
            <span v-else>登录</span>
          </button>
        </form>
        
        <!-- 注册链接 -->
        <div class="text-center mt-6">
          <p class="text-gray-400 text-sm">
            还没有账号？
            <router-link :to="redirect ? `/register?redirect=${encodeURIComponent(redirect)}` : '/register'" class="text-blue-400 hover:text-blue-300 transition-colors duration-200">
              立即注册
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
