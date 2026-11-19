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
  <div class="site-page xj380-page">
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

    <section class="site-container xj380-logos" aria-label="XJ380 各版本标识">
      <img src="/LOGO带底.png" alt="XJ380" />
      <img src="/ultra版LOGO带底.png" alt="XJ380 ULTRA" />
    </section>

    <!-- Features Section -->
    <section id="xj380-features" class="site-container site-section xj380-features" aria-label="XJ380 系统特性">
      <div>
        <div class="site-grid">
          <div class="site-panel">
            <h2>先进技术</h2>
            <p class="site-copy">
              XJ380 采用完全由我们自主开发的 XSK2.1 内核，技术先进。64位架构，符合主流设备需求。支持 GUI 原生操作，拥有友好的界面。
            </p>
          </div>
          <div class="site-panel">
            <h2>手搓内核</h2>
            <p class="site-copy">
              内存管理、APIC 驱动、部分 ACPI 驱动、GUI 及渲染算法 <strong>均为手搓</strong> ，开发组成员拥有三年操作系统手搓经验，坚持保留人工干预，拒绝纯 AIGC。
            </p>
          </div>
          <div class="site-panel">
            <h2>丰富生态</h2>
            <p class="site-copy">
              XJ380 提供了 XAPI 作为标准用户程序接口，同时支持 POSIX ，既拥有多方面兼容的同时又有我们自己的独创，为第三方软件开发者提供便利。
            </p>
          </div>
          <div class="site-panel">
            <h2>三重迭代</h2>
            <p class="site-copy">
              XJ380 最新版本采用 UEFI 进行引导，抛弃了以往使用的 Legacy Boot ；适用于 x86_64 架构，保障通用性；拥有 FAT 系列及 NTFS、ext4 等文件系统支持。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Version Info -->
    <section class="site-container site-section">
      <div>
        <div class="site-panel">
          <h2> XJ380 的各个版本有什么区别？又如何获取？</h2>
          <p class="site-copy">
            注：ULTRA版为抢先体验版本，普通版为ULTRA版的内容下放。关注B站@人朝的小郭同学可获取 XJ380 相关的福利资讯！
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped src="../../styles/xj380.css"></style>
