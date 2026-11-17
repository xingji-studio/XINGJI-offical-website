import assert from 'node:assert/strict'
import test from 'node:test'
import { fileURLToPath } from 'node:url'
import { createSSRApp } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { createRouter, createMemoryHistory } from 'vue-router'
import { createServer } from 'vite'

test('static navigation renders a default account without requesting personal data', async t => {
  const fetch = t.mock.method(globalThis, 'fetch', async () => {
    throw new Error('SSG must not request user data')
  })
  const server = await createServer({
    root: fileURLToPath(new URL('../', import.meta.url)),
    server: { middlewareMode: true, hmr: false, ws: false },
    appType: 'custom',
  })
  try {
    const { default: Navigation } = await server.ssrLoadModule('/src/components/Navigation.vue')
    const router = createRouter({ history: createMemoryHistory(), routes: [{ path: '/:pathMatch(.*)*', component: { template: '<div />' } }] })
    await router.push('/')
    await router.isReady()
    const app = createSSRApp(Navigation)
    app.use(router)
    const html = await renderToString(app)
    assert.match(html, /用户中心/)
    assert.doesNotMatch(html, /测试 Test|\/api\/v1\/avatars\//)
    assert.equal(fetch.mock.callCount(), 0)
  } finally {
    await server.close()
  }
})
