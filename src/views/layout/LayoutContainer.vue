<script setup>
import { useUserStore } from '@/stores'

const userStore = useUserStore()

// logo 跳转柚子社官网
const jumpToYuzuSoft = () => {
  location.href = 'https://www.yuzu-soft.com/'
}
</script>

<template>
  <el-menu
    default-active="/yuzusoft/welcome"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :router="true"
  >
    <el-menu-item @click="jumpToYuzuSoft">
      <img style="width: 100px" src="@/assets/logo.png" alt="YuzuSoft logo" />
    </el-menu-item>
    <el-menu-item index="/yuzusoft/welcome">欢迎页面</el-menu-item>
    <el-menu-item index="/yuzusoft/story">放屁故事</el-menu-item>
    <el-menu-item index="/yuzusoft/analyse">放屁分析</el-menu-item>
    <el-sub-menu>
      <template #title>
        <div class="myInfo">
          <el-avatar shape="circle" :size="50" :src="userStore.avatar" />
          柚子厨
        </div>
      </template>
      <el-menu-item index="/yuzusoft/user">用户中心(暂无)</el-menu-item>
      <el-menu-item>退出登录</el-menu-item>
    </el-sub-menu>
  </el-menu>
  <!-- 二级路由 -->
  <router-view></router-view>
</template>

<style lang="less">
// 导航栏默认宽度
.el-menu--horizontal {
  // position: fixed;
  --el-menu-horizontal-height: 100px;
  // 导航栏logo以外的子项排列方式（左对齐）
  .el-menu-item:nth-child(1) {
    margin-right: auto;
  }
  .el-menu-item {
    font-size: 16px;
  }
  .el-sub-menu__title {
    font-size: 16px;
  }
  .myInfo {
    display: flex;
    flex-direction: column;
    line-height: 20px;
  }
}
</style>
