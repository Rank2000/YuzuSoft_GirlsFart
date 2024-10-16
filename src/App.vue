<script setup>
// 导入中文包
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// import { backgroundObj } from './utils/imgUrl'

const body = document.body
// body.style.backgroundImage = `url(${backgroundObj.Kanna})`

console.log(body)
</script>

<template>
  <div class="app">
    <!-- 全局配置 中文包 -->
    <el-config-provider :locale="zhCn">
      <!-- 路由出口 -->
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<style lang="less" scoped>
.app {
  min-height: 1000px;
}
</style>
