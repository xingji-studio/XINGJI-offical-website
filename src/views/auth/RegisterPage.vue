<script setup lang="ts">
import { authStore } from '../../stores/auth';
import Register from '../../components/auth/Register.vue';

const auth = authStore;

// 如果用户已经登录，则重定向到首页
if (auth.isAuthenticated) {
  window.location.href = '/';
}
</script>

<template>
  <Register />
</template>
