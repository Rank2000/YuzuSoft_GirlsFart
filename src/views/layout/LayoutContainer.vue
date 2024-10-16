<script setup>
import { useUserStore } from '@/stores'
import { ref } from 'vue'
const userStore = useUserStore()

// logo 跳转柚子社官网
const jumpToYuzuSoft = () => {
  location.href = 'https://www.yuzu-soft.com/'
}

// 改变活动索引
const changeActiveIndex = (value) => {
  activeIndex.value = value
}
// 菜单栏活动状态
const activeIndex = ref('/yuzusoft/welcome')
</script>

<template>
  <el-menu
    :default-active="activeIndex"
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
          <div>柚子厨正恶心</div>
        </div>
      </template>
      <el-menu-item index="/yuzusoft/user">用户中心(暂无)</el-menu-item>
      <el-menu-item>退出登录</el-menu-item>
    </el-sub-menu>
  </el-menu>
  <!-- 二级路由 -->
  <div class="content">
    <router-view @jump="changeActiveIndex"></router-view>
  </div>
  <!-- 网页底部 -->
</template>

<style lang="less">
// 导航栏默认宽度
.el-menu--horizontal {
  position: fixed;
  width: 100%;
  z-index: 999;
  --el-menu-horizontal-height: 100px;
  // 导航栏logo以外的子项排列方式（左对齐）
  .el-menu-item:nth-child(1) {
    margin-right: auto;
  }
  .el-menu-item {
    font-size: 18px;
  }
  .el-sub-menu__title {
    font-size: 16px;
  }
  .myInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 25px;
    .el-avatar {
      margin: 0 auto;
    }
  }
}

.content {
  padding-top: 100px;
}
</style>
