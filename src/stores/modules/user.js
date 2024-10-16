import { defineStore } from 'pinia'
import { ref } from 'vue'
import { avatarObj } from '@/utils/imgUrl'
// 用户模式 token setToken removeToken
export const useUserStore = defineStore(
  'big-user',
  () => {
    //测试
    const test = '用户信息仓库'
    // 头像
    const avatar = ref(avatarObj.noa_avatar)
    // token
    const token = ref('')
    const setToken = (newToken) => {
      token.value = newToken
    }
    const removeToken = () => {
      token.value = ''
    }

    return {
      avatar,
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
