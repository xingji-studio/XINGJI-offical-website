import assert from 'node:assert/strict'
import test from 'node:test'
import { fileURLToPath } from 'node:url'
import { createSSRApp } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { createHead } from '@vueuse/head'
import { createRouter, createMemoryHistory, RouterView } from 'vue-router'
import { createServer } from 'vite'

test('the error route renders in Node without accessing browser globals', async () => {
  assert.equal(typeof window, 'undefined')
  const server = await createServer({
    root: fileURLToPath(new URL('../', import.meta.url)),
    server: { middlewareMode: true, hmr: false, ws: false },
    appType: 'custom',
    optimizeDeps: { noDiscovery: true, include: [] },
  })
  try {
    const { default: routes } = await server.ssrLoadModule('/src/router/index.ts')
    const router = createRouter({ history: createMemoryHistory(), routes })
    await router.push('/os/xj380/error')
    await router.isReady()
    const app = createSSRApp(RouterView)
    app.use(router)
    app.use(createHead())
    const html = await renderToString(app)
    assert.equal(router.currentRoute.value.path, '/os/xj380/error')
    assert.match(html, /XJ380 故障排查文档/)
    assert.match(html, /href="https:\/\/docs\.xingjisoft\.com\/manual\/xj380\/error\/XJ380_error"/)
  } finally {
    await server.close()
  }
})
