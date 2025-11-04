<script setup lang="ts">
import { ref, watch } from "vue";

const isOpen = ref(false);

const menuItems = ref([
  { name: "首页", link: "/" },
  { name: "操作系统", link: "/os/xj380" },
  { name: "星际云", link: "https://cloud.xingjisoft.com/" },
  { name: "软件及游戏", link: "/software" },
  { name: "XDC2025", link: "https://www.bilibili.com/video/BV1y1HKzaEPJ/" },
  { name: "关于我们", link: "/about" },
  { name: "招纳贤士", link: "/join" },
  { name: "开源软件", link: "/open-source" },
]);

watch(isOpen, (newVal, _oldVal) => {
  if (newVal) {
    document.body.classList.add("overflow-hidden", "lg:overflow-auto");
  } else {
    document.body.classList.remove("overflow-hidden", "lg:overflow-auto");
  }
});

defineProps({
  navName: {
    type: String,
    default: "星际工作室",
  },
});

</script>

<template>
  <nav class="fixed min-w-full z-50 backdrop-blur-md bg-gray-900/50">
    <ul class="flex h-16 items-center justify-between">
      <li class="nav-left h-16">
        <ul class="flex items-center justify-start h-full">
          <li class="h-full whitespace-nowrap">
            <router-link to="/" class="flex items-center justify-center outline-none pl-4 pr-4 h-full w-max">
              <img src="/files/XINGJI_blueback.png" alt="XINGJI" class="h-8 mr-1" />
              <span class="ml-1 text-2xl font-bold text-white/90">
                {{ navName }}
              </span>
            </router-link>
          </li>
          <template v-for="item in menuItems" :key="item.name">
            <li class="hidden lg:block whitespace-nowrap h-full">
              <router-link v-if="!item.link.startsWith('http')" :to="item.link"
                class="pl-4 pr-4 h-full w-max flex items-center justify-center group text-sm font-medium hover:bg-gray-400/10 transition-all duration-200 item">
                <span class="text-gray-300 group-hover:text-white transition-colors duration-200">
                  {{ item.name }}
                </span>
              </router-link>
              <a v-else :href="item.link" target="_blank"
                class="pl-4 pr-4 h-full w-max flex items-center justify-center group text-sm font-medium hover:bg-gray-400/10 transition-all duration-200 item">
                <span class="text-gray-300 group-hover:text-white transition-colors duration-200">
                  {{ item.name }}
                </span>
              </a>
            </li>
          </template>
        </ul>
      </li>
      <!-- For moblie: Menu Button -->
      <li class="lg:hidden nav-right w-16 h-16">
        <button @click="isOpen = !isOpen" class="nav-menu-button" :class="{ active: isOpen }">
          <span class="sr-only">打开菜单</span>
          <div class="menu-icon">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </div>
        </button>
      </li>
    </ul>
  </nav>
  <nav id="mobile-navbar"
    class="fixed top-16 z-50 w-full h-[calc(100%-4rem)] lg:hidden backdrop-blur-md bg-gray-900/50 transition-all duration-500 overflow-auto dark"
    :class="{ 'invisible opacity-0 -left-full': !isOpen, 'left-0': isOpen }">
    <!-- For moblie: Vertical menu -->
    <ul>
      <template v-for="item in menuItems" :key="item.name">
        <router-link v-if="!item.link.startsWith('http')" :to="item.link" @click="isOpen = false"
          class="p-4 px-6 h-full w-full flex items-center group font-medium hover:bg-gray-400/10 transition-all duration-200 item"
          :class="{ 'visible-anim': isOpen, 'opacity-0': !isOpen }"
          :style="{ '--delay': `${(menuItems.indexOf(item) + 1) * 50 + 250}ms` }">
          <span class="text-gray-300 group-hover:text-white transition-colors duration-200">
            {{ item.name }}
          </span>
        </router-link>
        <a v-else :href="item.link" @click="isOpen = false" target="_blank"
          class="p-4 px-6 h-full w-full flex items-center group font-medium hover:bg-gray-400/10 transition-all duration-200 item"
          :class="{ 'visible-anim': isOpen, 'opacity-0': !isOpen }"
          :style="{ '--delay': `${(menuItems.indexOf(item) + 1) * 50 + 250}ms` }">
          <span class="text-gray-300 group-hover:text-white transition-colors duration-200">
            {{ item.name }}
          </span>
        </a>
      </template>
    </ul>
  </nav>
</template>

<style scoped>
.item.router-link-active span {
  @apply text-white;
}

.item.router-link-active {
  @apply bg-white/10;
}

.item.visible-anim {
  opacity: 0;
  animation: 200ms ease-in-out var(--delay) forwards visible-anim;
}

@keyframes visible-anim {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
