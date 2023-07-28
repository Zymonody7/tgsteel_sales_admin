import { computed } from 'vue'
import { useAuthStore } from '@/store/modules/auth'

/**
 * @description 页面按钮权限
 * */
export const useAuthButtons = () => {
  const authStore = useAuthStore()
  const authButtons = authStore.authButtonList || []

  // 当前页按钮权限列表
  const BUTTONS = computed(() => {
    const currentPageAuthButton: { [key: string]: boolean } = {}
    authButtons.forEach((item) => (currentPageAuthButton[item] = true))
    return currentPageAuthButton
  })

  return {
    BUTTONS,
  }
}
