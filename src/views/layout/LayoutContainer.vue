<script setup>
import { useUserStore } from '@/stores'

const userStore = useUserStore()
</script>

<template>
  <div>
    布局容器 - 一级路由
    <el-button type="primary">{{ userStore.test }}</el-button>
  </div>
  <router-view></router-view>
</template>
