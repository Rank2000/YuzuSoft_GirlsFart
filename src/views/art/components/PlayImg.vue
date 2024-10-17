<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  artsInfo: {
    type: Array
  }
})

// console.log(props.artsInfo)

// 原数据
// console.log(artStore.arts)
// 筛选后的数据
const selectedArt = ref({})
// 选择作品
const selected = ref(props.artsInfo[0].title)
watch(selected, () => {
  // 如果图片在播放,暂停,切换前 index 归零
  if (isPlay.value) {
    stop()
  }
  index.value = 0
  changeWork()
})
// 播放器宽度(百分比)
const percent = ref(40)

// 处理点击宽度按钮
const changeWidth = (value) => {
  percent.value = value
}

// 当前图片索引
const index = ref(0)
// 定时器
const timer = ref(null)
// 是否在播放
const isPlay = ref(false)
// 播放图片
const play = () => {
  if (isPlay.value) {
    console.log('已经在播放了')
    return
  }
  timer.value = setInterval(() => {
    // console.log('索引:'+this.index)
    // 如果index = 最大数组长度则还原index
    // console.log(selectedArt.value.imgArr.length)
    if (index.value === selectedArt.value.imgArr.length - 1) {
      index.value = 0
    } else {
      index.value++
    }
  }, 1200)
  isPlay.value = !isPlay.value
}

// 暂停播放
const stop = () => {
  if (isPlay.value) {
    clearInterval(timer.value)
    isPlay.value = !isPlay.value
  } else {
    console.log('没有在播放')
    return
  }
}

// 切换作品
const changeWork = () => {
  // console.log('你选了:' + selected.value)
  selectedArt.value = props.artsInfo.find(
    (item) => item.title === selected.value
  )
  // 拿到了特定作品了
  // console.log(selectedArt.value)
}

changeWork()
</script>

<template>
  <div class="player">
    <!-- 播放图片 -->
    <div class="select">
      <el-select
        v-model="selected"
        placeholder="Select"
        size="large"
        style="width: 240px"
      >
        <el-option
          v-for="item in props.artsInfo"
          :key="item.title"
          :label="item.title"
          :value="item.title"
        />
      </el-select>
    </div>
    <div class="anime" :style="{ width: percent + '%' }">
      <img :src="selectedArt.imgArr[index]" alt="" />
      <div class="page">{{ index + 1 }}/{{ selectedArt.imgArr.length }}</div>
    </div>
    <div class="btns">
      <el-button type="primary" plain @click="changeWidth(30)">30%</el-button>
      <el-button type="primary" plain @click="changeWidth(40)">40%</el-button>
      <el-button type="primary" plain @click="changeWidth(50)">50%</el-button>
      <el-button type="primary" plain @click="changeWidth(60)">60%</el-button>
      <el-button type="primary" plain @click="play">播放</el-button>
      <el-button type="primary" plain @click="stop">暂停</el-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.player {
  min-height: 700px;
  // 选择
  .select {
    padding: 20px;
    display: flex;
    // width: 60%;
    // background-color: pink;
    margin: 0 auto;
    justify-content: center;
  }
  // 动画
  .anime {
    margin: 0 auto;
    img {
      width: 100%;
      border-radius: 30px;
      box-shadow: 5px 5px 2px rgb(152, 151, 151);
    }
    .page {
      text-align: center;
      font-family: '幼圆';
      font-weight: 700;
      font-size: 22px;
    }
  }
  // 按钮
  .btns {
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    // background-color: red;
    button {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      cursor: pointer;
      &:hover {
        background-color: #36b528;
      }
    }
  }
}
</style>
