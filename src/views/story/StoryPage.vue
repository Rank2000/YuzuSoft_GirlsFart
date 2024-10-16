<script setup>
import { ref, watch } from 'vue'
import GirlSelect from './components/GirlSelect.vue'
import StoryShow from './components/StoryShow.vue'
import { useGirlsStore } from '@/stores/index.js'
import { useStoryStore } from '@/stores/index.js'
import { storeToRefs } from 'pinia'

// 进入页面更换背景用
const body = document.body

// 拿故事
const storyStore = useStoryStore()
const { stories } = storeToRefs(storyStore)
// 拿女主名
const girlStore = useGirlsStore()

// 用于切换文章的依据
const selected = ref('白雪乃爱')
watch(selected, (newValue) => {
  console.log(newValue)
  selectGirl()
})

// 故事
const story = ref({})

// 选择女主
const selectGirl = () => {
  story.value = stories.value.filter(
    (item) => item.girlName === selected.value
  )[0]
  // 修改背景
  body.style.backgroundImage = `url(${story.value.backgroundImg})`
  // console.log(story.value)
}

selectGirl()
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
      <StoryShow :story="story"></StoryShow>
    </el-main>
  </el-container>
</template>

<style lang="less" scoped>
.el-main {
  opacity: 0.75;
  background-color: #fff;
  // min-height: 800px;
}
</style>
