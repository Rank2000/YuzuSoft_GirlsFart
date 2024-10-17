<script setup>
import { Menu as IconMenu, Setting } from '@element-plus/icons-vue'

const body = document.body
body.style.backgroundImage = 'url()'
</script>

<template>
  <el-container class="layout-container">
    <el-aside width="200px">
      <!-- 侧边菜单 -->
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="/yuzusoft/analyse/allGirls"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
        router
      >
        <el-menu-item index="/yuzusoft/analyse/allGirls">
          <el-icon><setting /></el-icon>
          <span>全部女主</span>
        </el-menu-item>
        <el-sub-menu>
          <!-- 多级菜单的标题 - 具名插槽 title-->
          <template #title>
            <el-icon><icon-menu /></el-icon>
            <span>排行</span>
          </template>
          <el-menu-item index="/yuzusoft/analyse/fartCount">
            <el-icon><User /></el-icon>
            <span>屁臭排行</span>
          </el-menu-item>
          <el-menu-item index="/yuzusoft/analyse/fartSmell">
            <el-icon><User /></el-icon>
            <span>屁量排行</span>
          </el-menu-item>
          <el-menu-item index="/yuzusoft/analyse/poop">
            <el-icon><User /></el-icon>
            <span>便意排行</span>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="less" scoped>
.layout-container {
  height: 100vh;
  .el-aside {
    background-color: #545c64;
  }
}
</style>
