import { defineStore } from 'pinia'
import { arts } from '@/utils/artImg.js'
import { ref } from 'vue'

export const useArtStore = defineStore('art', () => {
  const artsInfo = ref([])
  artsInfo.value = arts

  return {
    artsInfo
  }
})
