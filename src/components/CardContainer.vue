<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    required: true, // 必须传
    type: String // 类型
  }
})
</script>

<template>
  <el-card class="page-container">
    <template #header>
      <div class="header">
        <span>{{ title }}</span>
      </div>
    </template>

    <!-- 插槽定制内容 -->
    <slot name="body"></slot>

    <template #footer>
      <slot name="footer"></slot>
    </template>
  </el-card>
</template>

<style lang="less" scoped>
.page-container {
  width: 80%;
  min-height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
}
</style>
