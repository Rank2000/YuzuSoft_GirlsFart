import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGirlsStore = defineStore('girl', () => {
  const girlsArr = ref(['白雪乃爱', '谷风天音', '小云雀来海'])

  return {
    girlsArr
  }
})
