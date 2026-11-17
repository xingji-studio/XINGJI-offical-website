import { readFile } from 'node:fs/promises'
import assert from 'node:assert/strict'
import test from 'node:test'
import ts from 'typescript'

const source = await readFile(new URL('../src/services/userCenter.ts', import.meta.url), 'utf8')
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.ESNext },
})
const { getUserCenterOrigin, resolveAvatarUrl, fetchUserCenterProfile } = await import(
  `data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`
)
const origin = 'https://uc.xingjisoft.com'
const avatarPath = '/api/v1/avatars/e626da55-247c-4e99-b12b-a7cb7ff6b769'

test('uses the production origin and supports explicit loopback development', () => {
  assert.equal(getUserCenterOrigin(), origin)
  assert.equal(getUserCenterOrigin(`${origin}/`), origin)
  assert.equal(getUserCenterOrigin('http://localhost:8080'), 'http://localhost:8080')
  assert.equal(getUserCenterOrigin('http://127.0.0.1:8080'), 'http://127.0.0.1:8080')
  assert.equal(getUserCenterOrigin('http://[::1]:8080'), 'http://[::1]:8080')
})

test('rejects insecure remote origins and configuration containing credentials or paths', () => {
  for (const value of ['http://uc.xingjisoft.com', 'https://user:secret@uc.xingjisoft.com', `${origin}/profile`, `${origin}/?token=secret`, `${origin}/#token`, 'javascript:alert(1)']) {
    assert.throws(() => getUserCenterOrigin(value))
  }
})

test('resolves avatar addresses against UserCenter rather than the website', () => {
  assert.equal(resolveAvatarUrl(avatarPath, origin), `${origin}${avatarPath}`)
  assert.equal(resolveAvatarUrl(`${origin}${avatarPath}`, origin), `${origin}${avatarPath}`)
  assert.equal(resolveAvatarUrl(avatarPath, 'http://localhost:8080'), `http://localhost:8080${avatarPath}`)
})

test('untrusted avatar URLs fall back without accepting another origin or protocol', () => {
  for (const value of [null, undefined, '', 'data:image/png;base64,AAAA', 'javascript:alert(1)', `https://tracker.example${avatarPath}`, `//tracker.example${avatarPath}`, `${origin}/profile`, '/api/v1/avatars/not-a-uuid']) {
    assert.equal(resolveAvatarUrl(value, origin), null)
  }
})

test('requests only the minimal read-only endpoint with cookies and no cached profile', async t => {
  const controller = new AbortController()
  const fetch = t.mock.method(globalThis, 'fetch', async () => new Response(JSON.stringify({ errno: 0, data: { username: 'XINGJI', avatar_url: avatarPath } })))
  assert.deepEqual(await fetchUserCenterProfile(origin, controller.signal), { username: 'XINGJI', avatarUrl: `${origin}${avatarPath}` })
  const [url, options] = fetch.mock.calls[0].arguments
  assert.equal(String(url), `${origin}/api/v1/site/profile`)
  assert.equal(options.credentials, 'include')
  assert.equal(options.cache, 'no-store')
  assert.equal(options.referrerPolicy, 'no-referrer')
  assert.equal(options.signal, controller.signal)
  assert.equal(options.headers, undefined)
})

test('anonymous sessions and expired sessions have no profile', async t => {
  t.mock.method(globalThis, 'fetch', async () => new Response(JSON.stringify({ errno: 0, data: null })))
  assert.equal(await fetchUserCenterProfile(origin), null)
  globalThis.fetch.mock.mockImplementation(async () => new Response('', { status: 401 }))
  assert.equal(await fetchUserCenterProfile(origin), null)
})

test('a missing or invalid avatar preserves the real username', async t => {
  t.mock.method(globalThis, 'fetch', async () => new Response(JSON.stringify({ errno: 0, data: { username: 'XINGJI', avatar_url: null } })))
  assert.deepEqual(await fetchUserCenterProfile(origin), { username: 'XINGJI', avatarUrl: null })
  globalThis.fetch.mock.mockImplementation(async () => new Response(JSON.stringify({ errno: 0, data: { username: 'XINGJI', avatar_url: `https://external.example${avatarPath}` } })))
  assert.deepEqual(await fetchUserCenterProfile(origin), { username: 'XINGJI', avatarUrl: null })
})

test('server failures and invalid responses are not mistaken for an authenticated profile', async t => {
  t.mock.method(globalThis, 'fetch', async () => new Response('', { status: 500 }))
  await assert.rejects(fetchUserCenterProfile(origin))
  for (const body of [{ errno: 5001, data: null }, { errno: 0, data: {} }, { errno: 0, data: { username: '  ' } }, { errno: 0 }, []]) {
    globalThis.fetch.mock.mockImplementation(async () => new Response(JSON.stringify(body)))
    await assert.rejects(fetchUserCenterProfile(origin))
  }
})
