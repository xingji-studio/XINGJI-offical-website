<script setup lang="ts">
import { computed, ref } from 'vue'
import { useHead } from '@vueuse/head'
import PageHero from '../../components/PageHero.vue'

useHead({
  title: 'FAQ XJ380 | XINGJI Studio',
  meta: [
    {
      name: 'description',
      content: '查看 XJ380 操作系统的引导及运行故障代码、可能原因和解决方案。',
    },
  ],
})

const bootErrors = ref([
  {
    code: 'OPEN_ROOT_DIR_ERROR',
    cause: '无法获取ESP分区文件目录。',
    possible: 'ESP分区损坏。',
    solution: '使用例如DiskGenius的软件对分区进行重建并重新安装XJ380。'
  },
  {
    code: 'KERNEL_NOT_FOUND',
    cause: '找不到XJ380内核。',
    possible: 'XJ380内核文件缺失。',
    solution: '重新安装XJ380。'
  },
  {
    code: 'CANNOT_READ_KERNEL',
    cause: '无法读取XJ380内核。',
    possible: 'XJ380内核损坏。',
    solution: '重新安装XJ380。'
  },
  {
    code: 'CANNOT_ALLOC_MEMORY',
    cause: '无法分配足够的内存。',
    possible: '可用内存不足。',
    solution: '检查配置是否符合XJ380运行的最低要求。'
  }
])

const runtimeErrors = ref([
  {
    code: 'CANNOT_ALLOC_MEMORYMAP',
    cause: '无法开辟足够的内存空间用于存放MemoryMap。',
    possible: '可用内存不足。',
    solution: '检查配置是否符合XJ380运行的最低要求。'
  },
  {
    code: 'PAGE_FAULT',
    cause: '页错误。',
    possible: '该错误有可能由多种原因引起，请将所有保存的寄存器发送给XJ380开发团队。',
    solution: '将所有保存的寄存器发送给XJ380开发团队以进行诊断。'
  },
  {
    code: 'GENERAL_PROTECTION',
    cause: '一般保护异常。',
    possible: '该错误有可能由多种原因引起，请将所有保存的寄存器发送给XJ380开发团队。',
    solution: '将所有保存的寄存器发送给XJ380开发团队以进行诊断。'
  },
  {
    code: 'DIVIDE_ERROR',
    cause: '当程序试图除以零时触发此异常。',
    possible: '该错误有可能由应用程序或系统BUG引起。',
    solution: '将所有保存的寄存器发送给XJ380开发团队以进行诊断。'
  },
  {
    code: 'UNDEFINED_OPCODE',
    cause: '无法识别的指令。',
    possible: '应用程序执行了一个不受处理器支持的指令。',
    solution: '检查程序及SDK版本。'
  },
  {
    code: 'NMI',
    cause: '收到了不可屏蔽中断。',
    possible: '由硬件发送。',
    solution: '检查硬件问题。'
  },
  {
    code: 'DOUBLE_FAULT',
    cause: '双重错误。',
    possible: '短时间内两次触发PAGE_FAULT或类似错误。',
    solution: '将所有保存的寄存器发送给XJ380开发团队以进行诊断。'
  },
  {
    code: 'SYSTEM_KERNEL_ERROR',
    cause: '内核错误。',
    possible: 'XJ380内核出现问题。',
    solution: '将所有保存的寄存器发送给XJ380开发团队以进行诊断与修复。'
  },
  {
    code: 'APIC_NOT_FOUND',
    cause: '找不到高级可编程中断控制器。',
    possible: '设备太老或损坏。',
    solution: '检查是否满足最低配置要求。如果满足，则硬件可能损坏。'
  }
])
const errorGroups = computed(() => [
  { id: 'boot-errors', title: '引导故障类', description: 'XJ380 在引导阶段发生故障。它一般像下面这样子：', image: '/error/boot_error.png', alt: 'XJ380 引导故障示例', errors: bootErrors.value },
  { id: 'runtime-errors', title: '普通故障类（白屏死机）', description: 'XJ380 在运行阶段发生故障。它一般像下面这样子：', image: '/error/error.png', alt: 'XJ380 运行故障示例', errors: runtimeErrors.value },
])
</script>

<template>
  <div class="site-page">
    <PageHero title="XJ380 故障代码" subtitle="定位问题，继续探索。" description="本页面列举 XJ380 操作系统的故障代码，并提供原因说明与解决方案。" image="/os/xj380_screenshot.png" eyebrow="XJ380 / SUPPORT" compact>
      <template #actions>
        <a href="#boot-errors" class="site-button site-button--primary">引导故障</a>
        <a href="#runtime-errors" class="site-button">运行故障</a>
      </template>
    </PageHero>
    <section v-for="group in errorGroups" :id="group.id" :key="group.id" class="site-container site-section" :aria-labelledby="`${group.id}-title`">
      <div class="site-error__intro">
        <div>
          <p class="site-eyebrow">TROUBLESHOOTING</p>
          <h2 :id="`${group.id}-title`">{{ group.title }}</h2>
          <p class="site-copy">{{ group.description }}</p>
        </div>
        <div class="site-media"><img :src="group.image" :alt="group.alt" loading="lazy" decoding="async" /></div>
      </div>
      <div class="site-grid">
        <article v-for="error in group.errors" :key="error.code" class="site-panel">
          <h3 class="site-error__code">{{ error.code }}</h3>
          <dl class="site-specs">
            <div><dt>故障原因</dt><dd>{{ error.cause }}</dd></div>
            <div><dt>可能故障</dt><dd>{{ error.possible }}</dd></div>
            <div><dt>解决办法</dt><dd>{{ error.solution }}</dd></div>
          </dl>
        </article>
      </div>
    </section>
  </div>
</template>
