<script setup>
import { ref, watch } from 'vue'
import GirlSelect from './components/GirlSelect.vue'
import StoryShow from './components/StoryShow.vue'
import { useGirlsStore } from '@/stores/modules/girls'
import { backgroundObj } from '@/utils/imgUrl'

// 拿女主名
const girlStore = useGirlsStore()

// 用于切换文章的依据
const selected = ref('白雪乃爱')
watch(selected, (newValue) => {
  console.log(newValue)
})

// 进入页面更换背景
const body = document.body
body.style.backgroundImage = `url(${backgroundObj.Meguru})`
</script>

<template>
  <el-container>
    <el-header>
      <!-- 下拉菜单 + 当前女主-->
      <GirlSelect
        :girlsArr="girlStore.girlsArr"
        v-model="selected"
      ></GirlSelect>
    </el-header>
    <el-main>
      <StoryShow></StoryShow>
    </el-main>
  </el-container>
</template>

<style lang="less" scoped>
.el-main {
  opacity: 0.9;
  background-color: #fff;
  // min-height: 800px;
}
</style>
