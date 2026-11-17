<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'
import { UserIcon } from '@heroicons/vue/24/solid'
import { useUserCenterProfile } from '../composables/useUserCenterProfile'

defineProps({ navName: { type: String, default: '星际工作室' } })
const route = useRoute()
const isOpen = ref(false)
const menuButton = ref<HTMLButtonElement | null>(null)
const { userCenterUrl, userName, avatarUrl, accountTitle, refreshProfile, onAvatarError } = useUserCenterProfile()
const menuItems = [
  { name: '首页', link: '/' },
  { name: '操作系统', link: '/os/xj380' },
  { name: '软件作品', link: '/software' },
  { name: 'XDC2025', link: 'https://www.bilibili.com/video/BV1y1HKzaEPJ/' },
  { name: '关于我们', link: '/about' },
  { name: '招贤纳士', link: '/join' },
  { name: '开源软件', link: '/open-source' },
  { name: '开发文档', link: 'https://docs.xingjisoft.com/' },
]

function closeMenu(restoreFocus = false) {
  isOpen.value = false
  if (restoreFocus) menuButton.value?.focus()
}

watch(() => route.fullPath, () => closeMenu())
watch(isOpen, (open) => {
  if (open) void refreshProfile()
})
</script>

<template>
  <header class="site-nav" @keydown.esc="closeMenu(true)">
    <nav class="site-nav__inner site-container" aria-label="主导航">
      <router-link to="/" class="site-nav__brand" @click="closeMenu()">
        <img src="/files/XINGJI_blueback.png" alt="XINGJI" width="1356" height="406" />
        <span>{{ navName }}</span>
      </router-link>
      <ul class="site-nav__desktop">
        <li v-for="item in menuItems" :key="item.link">
          <a v-if="item.link.startsWith('http')" :href="item.link" target="_blank" rel="noopener noreferrer" class="site-nav__link">
            {{ item.name }} <ArrowUpRightIcon aria-hidden="true" />
          </a>
          <router-link v-else :to="item.link" class="site-nav__link">{{ item.name }}</router-link>
        </li>
      </ul>
      <div class="site-nav__actions">
        <button ref="menuButton" class="site-nav__toggle" :class="{ 'site-nav__toggle--active': isOpen }" type="button" :aria-expanded="isOpen" aria-controls="site-mobile-menu" :aria-label="isOpen ? '关闭菜单' : '打开菜单'" @click="isOpen = !isOpen">
          <span class="site-nav__menu-icon" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        <a
          :href="userCenterUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="site-nav__account site-nav__account--desktop"
          :aria-label="accountTitle + '（在新标签页打开）'"
          :title="accountTitle"
          @click="closeMenu()"
        >
          <span class="site-nav__avatar" aria-hidden="true">
            <img v-if="avatarUrl" :src="avatarUrl" alt="" width="36" height="36" decoding="async" referrerpolicy="no-referrer" @error="onAvatarError" />
            <UserIcon v-else />
          </span>
        </a>
      </div>
    </nav>
    <nav v-show="isOpen" id="site-mobile-menu" class="site-nav__mobile" aria-label="移动端导航">
      <ul class="site-container">
        <li>
          <a
            :href="userCenterUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="site-nav__account site-nav__account--mobile"
            :aria-label="userName + '，用户中心（在新标签页打开）'"
            :title="accountTitle"
            @click="closeMenu()"
          >
            <span class="site-nav__avatar" aria-hidden="true">
              <img v-if="avatarUrl" :src="avatarUrl" alt="" width="40" height="40" decoding="async" referrerpolicy="no-referrer" @error="onAvatarError" />
              <UserIcon v-else />
            </span>
            <span class="site-nav__username">{{ userName }}</span>
          </a>
        </li>
        <li v-for="item in menuItems" :key="item.link">
          <a v-if="item.link.startsWith('http')" :href="item.link" target="_blank" rel="noopener noreferrer" class="site-nav__link" @click="closeMenu()">
            {{ item.name }} <ArrowUpRightIcon aria-hidden="true" />
          </a>
          <router-link v-else :to="item.link" class="site-nav__link" @click="closeMenu()">{{ item.name }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped src="../styles/navigation.css"></style>
