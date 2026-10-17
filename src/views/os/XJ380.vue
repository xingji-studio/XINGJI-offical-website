<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'XJ380 | XINGJI Studio',
  meta: [
    {
      name: 'description',
      content: 'XJ380 64位操作系统，低资源占用、高性能、生态兼容。了解系统特性，获取 XJ380。',
    },
  ],
})

</script>

<template>
  <div class="xj380-page min-h-screen pt-16">
    <!-- Hero Section -->
    <section class="xj380-hero" aria-labelledby="xj380-title">
      <div class="xj380-hero__background" aria-hidden="true">
        <img
          src="/os/xj380_screenshot.png"
          alt=""
          class="xj380-hero__image"
          fetchpriority="high"
        />
      </div>

      <div class="xj380-hero__content">
        <div class="xj380-hero__intro">
          <p class="xj380-hero__eyebrow">XINGJI INTERACTIVE SOFTWARE</p>
          <h1 id="xj380-title" class="xj380-hero__title">
            新一代桌面操作系统
            <span>XJ380 Operating System</span>
          </h1>
          <p class="xj380-hero__subtitle">低资源占用、高性能、生态兼容</p>
          <div class="xj380-hero__actions">
            <router-link to="/os/xj380/download" class="xj380-hero__button xj380-hero__button--primary">
              下载 XJ380
            </router-link>
            <a href="#xj380-features" class="xj380-hero__button">了解更多</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Logo Section -->
    <section class="max-h-64 p-4 flex justify-center">
      <div class="max-w-7xl flex justify-center gap-2">
        <img src="/LOGO带底.png" alt="XJ380" class="overflow-hidden object-contain" />
        <img src="/ultra版LOGO带底.png" alt="XJ380 ULTRA" class="overflow-hidden object-contain" />
      </div>
    </section>

    <!-- Features Section -->
    <section id="xj380-features" class="xj380-features p-4" aria-label="XJ380 系统特性">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-white mb-4">XJ380有什么特别？</h3>
            <p class="text-gray-400">
              XJ380 采用完全由我们自主开发的 XSK2.1 内核，技术先进。64位架构，符合主流设备需求。支持 GUI 原生操作，拥有友好的界面。
            </p>
          </div>
          <div class="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-white mb-4">XJ380与前两个测试版有什么区别？</h3>
            <p class="text-gray-400">
              XJ380 最新版本采用 UEFI 进行引导，抛弃了以往使用的 Legacy Boot ；适用于x86_64架构，保障通用性；拥有FAT系列文件系统支持。
            </p>
          </div>
          <div class="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-white mb-4">XJ380有怎样的生态？</h3>
            <p class="text-gray-400">
              XJ380 提供了 XAPI 作为标准用户程序接口，同时支持 POSIX ，既拥有多方面兼容的同时又有我们自己的独创，为第三方软件开发者提供便利。
            </p>
          </div>
          <div class="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-white mb-4">XJ380的交互怎么样？</h3>
            <p class="text-gray-400">
              XJ380 支持图形化桌面及命令行，为拥有不同需求的用户提供多样化的操作环境。桌面已实现 GlassUI ，尽可能地提供美妙的视觉体验。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Version Info -->
    <section class="py-10 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8">
          <h3 class="text-2xl font-bold text-white mb-4"> XJ380 的各个版本有什么区别？又如何获取？</h3>
          <p class="text-gray-400">
            注：ULTRA版为抢先体验版本，普通版为ULTRA版的内容下放。关注B站@人朝的小郭同学可获取 XJ380 相关的福利资讯！
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.xj380-page {
  background: #080b12;
}

.xj380-hero {
  position: relative;
  isolation: isolate;
  display: flex;
  min-height: calc(100vh - 4rem);
  min-height: calc(100svh - 4rem);
  overflow: hidden;
  color: #fff;
}

.xj380-hero__background,
.xj380-hero__background::after,
.xj380-hero__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.xj380-hero__background {
  z-index: -1;
}

.xj380-hero__image {
  object-fit: cover;
  object-position: center;
}

.xj380-hero__background::after {
  content: '';
  background:
    linear-gradient(0deg, #080b12 0%, transparent 24%),
    linear-gradient(90deg, rgba(8, 11, 18, 0.98) 0%, rgba(8, 11, 18, 0.92) 24%, rgba(8, 11, 18, 0.65) 45%, rgba(8, 11, 18, 0.18) 72%, rgba(8, 11, 18, 0.05) 100%);
}

.xj380-hero__content {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 88px clamp(24px, 6vw, 112px) 112px;
}

.xj380-hero__intro {
  max-width: 680px;
}

.xj380-hero__eyebrow {
  margin-bottom: 24px;
  color: #c5cbd5;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.18em;
}

.xj380-hero__title {
  margin: 0;
  font-size: clamp(44px, 4.5vw, 72px);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.055em;
}

.xj380-hero__title span {
  display: block;
  margin-top: 22px;
  font-size: clamp(26px, 2.7vw, 40px);
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 0.02em;
}

.xj380-hero__subtitle {
  margin-top: 26px;
  color: #d4d9e2;
  font-size: clamp(16px, 1.45vw, 20px);
  line-height: 1.7;
}

.xj380-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 40px;
}

.xj380-hero__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 192px;
  min-height: 60px;
  padding: 16px 32px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  transition: color 180ms ease, background-color 180ms ease, border-color 180ms ease;
}

.xj380-hero__button--primary {
  border-color: #fff;
  background: #fff;
  color: #080b12;
}

.xj380-hero__button:hover {
  border-color: #fff;
  background: #fff;
  color: #080b12;
}

.xj380-hero__button--primary:hover {
  border-color: #7dd3fc;
  background: #7dd3fc;
}

.xj380-hero__button:focus-visible {
  outline: 3px solid #7dd3fc;
  outline-offset: 5px;
}

.xj380-features {
  scroll-margin-top: 80px;
}

@media (max-width: 640px) {
  .xj380-hero__content {
    align-items: flex-end;
    padding: 160px 24px 64px;
  }

  .xj380-hero__background::after {
    background:
      linear-gradient(0deg, #080b12 0%, rgba(8, 11, 18, 0.82) 38%, rgba(8, 11, 18, 0.15) 100%),
      linear-gradient(90deg, rgba(8, 11, 18, 0.7), transparent);
  }

  .xj380-hero__image {
    object-position: 65% center;
  }

  .xj380-hero__eyebrow {
    font-size: 10px;
    letter-spacing: 0.12em;
  }

  .xj380-hero__title {
    font-size: clamp(28px, 7vw, 40px);
  }

  .xj380-hero__actions {
    gap: 12px;
    margin-top: 32px;
  }

  .xj380-hero__button {
    flex: 1 1 140px;
    min-width: 0;
    min-height: 56px;
    padding: 14px 20px;
    font-size: 15px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .xj380-hero__button {
    transition: none;
  }
}
</style>
