<script setup>
import PlayImg from './components/PlayImg.vue'
import { backgroundObj } from '@/utils/imgUrl'
import { useArtStore } from '@/stores'
import { storeToRefs } from 'pinia'

// 进入此页面立刻切换此背景
const body = document.body
body.style.backgroundImage = `url(${backgroundObj.bgWelcome})`

const artStore = useArtStore()
const { artsInfo } = storeToRefs(artStore)
// console.log(artsInfo.value)
</script>

<template>
  <div class="art">
    <PlayImg arts="1" :artsInfo="artsInfo"></PlayImg>
  </div>
</template>
