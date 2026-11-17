import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { fetchUserCenterProfile, getUserCenterOrigin, type UserCenterProfile } from '../services/userCenter'

export function useUserCenterProfile() {
  const userCenterUrl = getUserCenterOrigin(import.meta.env.VITE_USER_CENTER_URL || undefined)
  const profile = ref<UserCenterProfile | null>(null)
  const status = ref<'loading' | 'authenticated' | 'anonymous' | 'unavailable'>('loading')
  const failedAvatarUrl = ref<string | null>(null)
  const userName = computed(() => profile.value?.username || (status.value === 'anonymous' ? '登录 / 注册' : '用户中心'))
  const avatarUrl = computed(() => {
    const url = profile.value?.avatarUrl
    return url && url !== failedAvatarUrl.value ? url : null
  })
  const accountTitle = computed(() => profile.value ? `${profile.value.username} · 用户中心` : '用户中心')
  let activeRequest: AbortController | null = null
  let lastAttempt = 0
  let disposed = false

  async function refreshProfile() {
    if (typeof window === 'undefined' || disposed || activeRequest || Date.now() - lastAttempt < 1000) return
    lastAttempt = Date.now()
    const controller = new AbortController()
    activeRequest = controller
    const timeout = window.setTimeout(() => controller.abort(), 8000)
    try {
      const nextProfile = await fetchUserCenterProfile(userCenterUrl, controller.signal)
      if (disposed) return
      profile.value = nextProfile
      status.value = nextProfile ? 'authenticated' : 'anonymous'
      failedAvatarUrl.value = null
    } catch {
      if (!disposed) {
        profile.value = null
        status.value = 'unavailable'
        failedAvatarUrl.value = null
      }
    } finally {
      window.clearTimeout(timeout)
      if (activeRequest === controller) activeRequest = null
    }
  }

  function refreshWhenVisible() {
    if (document.visibilityState === 'visible') void refreshProfile()
  }

  function onAvatarError(event: Event) {
    const url = (event.currentTarget as HTMLImageElement).src
    if (url === profile.value?.avatarUrl) failedAvatarUrl.value = url
  }

  onMounted(() => {
    void refreshProfile()
    window.addEventListener('focus', refreshWhenVisible)
    document.addEventListener('visibilitychange', refreshWhenVisible)
  })

  onBeforeUnmount(() => {
    disposed = true
    activeRequest?.abort()
    if (typeof window !== 'undefined') {
      window.removeEventListener('focus', refreshWhenVisible)
      document.removeEventListener('visibilitychange', refreshWhenVisible)
    }
  })

  return { userCenterUrl, userName, avatarUrl, accountTitle, refreshProfile, onAvatarError }
}
