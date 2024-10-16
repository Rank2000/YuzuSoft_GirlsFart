import { defineStore } from 'pinia'
import { ref } from 'vue'
// 用户模式 token setToken removeToken
export const useUserStore = defineStore(
  'big-user',
  () => {
    //测试
    const test = '用户信息仓库'
    // token
    const token = ref('')
    const setToken = (newToken) => {
      token.value = newToken
    }
    const removeToken = () => {
      token.value = ''
    }

    return {
      test,
      token,
      setToken,
      removeToken
    }
  },
  {
    persist: true
  }
)
