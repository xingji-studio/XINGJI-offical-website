export const DEFAULT_USER_CENTER_URL = 'https://uc.xingjisoft.com'

export interface UserCenterProfile {
  username: string
  avatarUrl: string | null
}

export function getUserCenterOrigin(value = DEFAULT_USER_CENTER_URL): string {
  const url = new URL(value)
  const isLoopback = url.hostname === 'localhost'
    || url.hostname === '[::1]'
    || /^127\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(url.hostname)
  if ((url.protocol !== 'https:' && !(url.protocol === 'http:' && isLoopback))
    || url.username || url.password || url.pathname !== '/' || url.search || url.hash) {
    throw new Error('用户中心地址必须为 HTTPS origin，本地回环地址可使用 HTTP')
  }
  return url.origin
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

export function resolveAvatarUrl(value: unknown, origin: string): string | null {
  if (typeof value !== 'string' || !value) return null
  try {
    const url = new URL(value, origin)
    if (url.origin !== origin || url.username || url.password
      || !/^\/api\/v1\/avatars\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(url.pathname)) {
      return null
    }
    return url.href
  } catch {
    return null
  }
}

export async function fetchUserCenterProfile(origin: string, signal?: AbortSignal): Promise<UserCenterProfile | null> {
  const response = await fetch(new URL('/api/v1/site/profile', origin), {
    credentials: 'include',
    cache: 'no-store',
    referrerPolicy: 'no-referrer',
    signal,
  })
  if (response.status === 401) return null
  if (!response.ok) throw new Error('暂时无法获取用户信息')

  const result: unknown = await response.json()
  if (!isRecord(result) || result.errno !== 0) throw new Error('用户信息响应无效')
  if (result.data === null) return null
  if (!isRecord(result.data) || typeof result.data.username !== 'string' || !result.data.username.trim()) {
    throw new Error('用户信息响应无效')
  }
  return {
    username: result.data.username.trim(),
    avatarUrl: resolveAvatarUrl(result.data.avatar_url, origin),
  }
}
