<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { authStore } from '../../stores/auth';

const router = useRouter();
const route = useRoute();
const auth = authStore;

const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const redirect = ref('');

// 验证密码是否匹配
const isPasswordMatch = computed(() => {
  return password.value === confirmPassword.value;
});

onMounted(() => {
  // 获取URL中的redirect参数
  const redirectParam = route.query.redirect;
  if (redirectParam && typeof redirectParam === 'string') {
    redirect.value = redirectParam;
  }
});

const handleSubmit = async () => {
  // 验证密码是否匹配
  if (!isPasswordMatch.value) {
    return;
  }
  
  const success = await auth.register(username.value, email.value, password.value);
  if (success) {
    // 如果有redirect参数，重定向到该页面，否则重定向到首页
    router.push(redirect.value || '/');
  }
};
</script>

<template>
  <div class="bg-cover bg-center w-full" style="background-image: url('/login_bg.jpg');">
    <div class="min-h-screen flex items-center justify-center p-4 pt-20">
      <div class="w-full max-w-md bg-gray-800 opacity-90 rounded-lg shadow-xl overflow-hidden">
        <div class="bg-[#1da1f2] py-8 px-6">
          <h2 class="text-3xl font-bold text-white text-center">注册</h2>
          <p class="text-blue-100 text-center mt-2">创建一个 XINGJI 账号并开启您的星际之旅！</p>
        </div>
        
        <div class="py-8 px-6">
          <!-- 错误信息显示 -->
          <div v-if="auth.error" class="bg-red-500/20 text-red-400 p-3 rounded-md mb-4 text-sm">
            {{ auth.error }}
          </div>
          
          <!-- 注册表单 -->
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
            
            <!-- 邮箱输入 -->
            <div class="mb-4">
              <label for="email" class="block text-gray-300 text-sm font-medium mb-1">邮箱</label>
              <input
                type="email"
                id="email"
                v-model="email"
                required
                class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="请输入邮箱"
              />
            </div>
            
            <!-- 密码输入 -->
            <div class="mb-4">
              <label for="password" class="block text-gray-300 text-sm font-medium mb-1">密码</label>
              <div class="relative">
                <input
                  :type="showPassword ? 'text' : 'password'"
                  id="password"
                  v-model="password"
                  required
                  minlength="6"
                  class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="请输入密码（至少6位）"
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
            
            <!-- 确认密码输入 -->
            <div class="mb-6">
              <label for="confirmPassword" class="block text-gray-300 text-sm font-medium mb-1">确认密码</label>
              <div class="relative">
                <input
                  :type="showConfirmPassword ? 'text' : 'password'"
                  id="confirmPassword"
                  v-model="confirmPassword"
                  required
                  minlength="6"
                  class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="请再次输入密码"
                />
                <button
                  type="button"
                  @click="showConfirmPassword = !showConfirmPassword"
                  class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {{ showConfirmPassword ? '隐藏' : '显示' }}
                </button>
              </div>
              <!-- 密码不匹配提示 -->
              <div v-if="confirmPassword && !isPasswordMatch" class="text-red-400 text-xs mt-1">
                两次输入的密码不一致
              </div>
            </div>
            
            <!-- 注册按钮 -->
            <button
              type="submit"
              :disabled="auth.loading || !isPasswordMatch"
              class="w-full bg-[#1da1f2] hover:bg-[#1da1f2] text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:bg-blue-500 disabled:cursor-not-allowed"
            >
              <span v-if="auth.loading">注册中...</span>
              <span v-else>注册</span>
            </button>
          </form>
          
          <!-- 登录链接 -->
          <div class="text-center mt-6">
            <p class="text-gray-400 text-sm">
              已有账号？
              <router-link :to="redirect ? `/login?redirect=${encodeURIComponent(redirect)}` : '/login'" class="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                立即登录
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
