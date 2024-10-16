<script setup>
import { backgroundObj } from '@/utils/imgUrl'
import CardContainer from '@/components/CardContainer.vue'
import { useRouter } from 'vue-router'
import { defineEmits } from 'vue'

// 进入此页面立刻切换此背景
const body = document.body
body.style.backgroundImage = `url(${backgroundObj.bgWelcome})`

const router = useRouter()

const emit = defineEmits(['jump'])

// 路由跳转
const routerJump = (path) => {
  emit('jump', path)
  router.push(path)
}
</script>

<template>
  <CardContainer title="欢迎来到柚子社女主放屁同人站">
    <template #body>
      <div class="welcome">
        <img src="@/assets/welcome/ciallo.jpg" alt="" />
        <p>Ciallo～(∠・ω・)⌒☆</p>
        <h3>
          *注意:此网页是为有“放屁”、“憋屁”、“忍耐便意”等xp的柚子厨提供,记得分享给喜欢的柚子厨们呀!
        </h3>
      </div>
    </template>
    <template #footer>
      <h3>特别感谢:</h3>
      <p>Element-Plus 网页组件</p>
      <p>巴松管 大大的插画</p>
      <p>028 的灵感</p>
      <!-- 按钮区域 -->
      <div class="buttons">
        <el-button type="success" round @click="routerJump('/yuzusoft/story')"
          >放屁故事</el-button
        >
        <el-button type="success" round @click="routerJump('/yuzusoft/analyse')"
          >放屁分析</el-button
        >
        <el-button type="warning" round @click="console.log(1)"
          >Ciallo～(∠・ω・)⌒☆</el-button
        >
      </div>
    </template>
  </CardContainer>
</template>

<style lang="less" scoped>
.welcome {
  display: flex;
  flex-direction: column;
  p {
    text-align: center;
    color: orange;
  }
  img {
    margin: 0 auto;
    width: 60%;
    margin-bottom: 10px;
  }
}

.buttons {
  padding-top: 20px;
  display: flex;
  justify-content: space-around;
  button {
    height: 50px;
    font-size: 18px;
  }
}
</style>
