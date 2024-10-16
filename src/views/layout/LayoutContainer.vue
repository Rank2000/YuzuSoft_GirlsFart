<script setup>
import { useUserStore } from '@/stores'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const userStore = useUserStore()

// logo 跳转柚子社官网
const jumpToYuzuSoft = () => {
  location.href = 'https://www.yuzu-soft.com/'
}

// 改变活动索引
const changeActiveIndex = (value) => {
  activeIndex.value = value
}

const router = useRouter()
// 菜单栏活动状态
const activeIndex = ref(router.currentRoute.value.path)
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
          <div>柚子厨0721</div>
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
  <div class="footer">
    <div class="miniAvators">
      <div>
        <img src="@/assets/galgame_girls_avatar/白雪乃爱头像.png" alt="" />
      </div>
      <div>
        <img src="@/assets/galgame_girls_avatar/谷风天音头像.png" alt="" />
      </div>
      <div>
        <img src="@/assets/galgame_girls_avatar/小云雀来海头像.png" alt="" />
      </div>
      <div>
        <img src="@/assets/galgame_girls_avatar/星河辉耶头像.png" alt="" />
      </div>
    </div>
    <h3>此网页所有权归©Rank2000 所有</h3>
    <p>
      温馨提示：此为柚子社gal同人二创网页，请不要用内容于盈利等，且尽量只分享给柚子厨
    </p>
    <p>希望各位继续支持柚子社,Ciallo～(∠・ω・)⌒☆</p>
  </div>
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

// 网页底部
.footer {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 30px;
  background-color: #fff;
  height: 180px;
  opacity: 0.9;
  text-align: center;
  .miniAvators {
    display: flex;
    justify-content: space-around;
    div {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 2px solid #000;
      img {
        width: 100%;
        border-radius: 50%;
      }
    }
  }
}
</style>
