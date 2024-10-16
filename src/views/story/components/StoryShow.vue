<script setup>
import { defineProps } from 'vue'

defineProps({
  story: {
    type: Object
  }
})
</script>

<template>
  <!-- 故事 -->
  <div class="story">
    <!-- 故事头部 -->
    <div class="header">
      <!-- 故事标题 -->
      <div class="title">
        <h3>白雪乃爱放屁</h3>
      </div>
      <!-- 故事封面 -->
      <div class="cover">
        <img src="@/assets/storyImg/noa_fart.png" alt="" />
      </div>
    </div>
    <!-- 故事身体-内容 -->
    <div class="content">
      <p>
        乃爱放屁乃爱放屁乃爱放屁乃爱放屁乃爱放屁乃爱放屁乃爱放屁乃爱放屁乃爱放屁乃爱放屁
      </p>
      <p>乃爱放屁</p>
      <div class="cg">
        <img src="@/assets/storyImg/noa_fart1.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.story {
  .header {
    // background-color: greenyellow;、
    // 故事头部内容
    .title {
      height: 50px;
      line-height: 50px;
      // background-color: pink;
      text-align: center;
      font-size: 26px;
    }
    .cover {
      // background-color: orange;
      padding-top: 10px;
      width: 30%;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
  }
  .content {
    padding-top: 10px;
    background-color: skyblue;
    min-height: 300px;
    p {
      text-indent: 2em;
      font-size: 18px;
    }
    // cg插画
    .cg {
      width: 25%;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
  }
}
</style>
