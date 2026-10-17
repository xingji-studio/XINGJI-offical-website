<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'

defineProps({ navName: { type: String, default: '星际工作室' } })
const route = useRoute()
const isOpen = ref(false)
const menuButton = ref<HTMLButtonElement | null>(null)
const menuItems = [
  { name: '首页', link: '/' },
  { name: '操作系统', link: '/os/xj380' },
  { name: '软件相关', link: '/software' },
  { name: 'XDC2025', link: 'https://www.bilibili.com/video/BV1y1HKzaEPJ/' },
  { name: '关于我们', link: '/about' },
  { name: '成员招募', link: '/join' },
  { name: '开源软件', link: '/open-source' },
  { name: '开发文档', link: 'https://docs.xingjisoft.com/' },
]

function closeMenu(restoreFocus = false) {
  isOpen.value = false
  if (restoreFocus) menuButton.value?.focus()
}

watch(() => route.fullPath, () => closeMenu())
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
      <button ref="menuButton" class="site-nav__toggle" :class="{ 'site-nav__toggle--active': isOpen }" type="button" :aria-expanded="isOpen" aria-controls="site-mobile-menu" :aria-label="isOpen ? '关闭菜单' : '打开菜单'" @click="isOpen = !isOpen">
        <span class="site-nav__menu-icon" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
    </nav>
    <nav v-show="isOpen" id="site-mobile-menu" class="site-nav__mobile" aria-label="移动端导航">
      <ul class="site-container">
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
