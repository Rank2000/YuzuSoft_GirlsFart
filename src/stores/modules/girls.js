import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGirlsStore = defineStore('girl', () => {
  const girlsArr = ref([
    '白雪乃爱',
    '谷风天音',
    '小云雀来海',
    '明月栞那',
    '四季夏目',
    '墨染希',
    '火打谷爱衣',
    '汐山凉音',
    '朝武芳乃',
    '常陆茉子',
    '丛雨',
    '鞍马小春',
    '绫地宁宁',
    '因幡巡',
    '假屋和奏'
  ])

  return {
    girlsArr
  }
})
