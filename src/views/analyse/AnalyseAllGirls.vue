<script setup>
import { useGirlsStore } from '@/stores'
import GirlInfo from './components/GirlInfo.vue'
import { ref } from 'vue'

const girlsStore = useGirlsStore()

const dialogRef = ref()
// 打开弹框
const openDialog = (item) => {
  // console.log(item.name)
  dialogRef.value.open(item)
}
</script>

<template>
  <div class="all-girls">
    <el-row :gutter="20">
      <el-col :span="6" v-for="item in girlsStore.girlsData" :key="item.name">
        <div class="all-girls-content" @click="openDialog(item)">
          <img :src="item.img_url" alt="" />
          <span>{{ item.name }}</span>
        </div>
      </el-col>
    </el-row>
    <GirlInfo ref="dialogRef"></GirlInfo>
  </div>
</template>

<style lang="less" scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
  margin-top: 20px;
  // border: 1px solid #000;
}

.all-girls-content {
  padding-top: 10px;
  border-radius: 4px;
  border: 3px solid #ccc;
  // min-height: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  cursor: pointer;
  transition: all 0.5s;
  opacity: 1;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
    opacity: 0.5;
  }
  img {
    width: 80%;
    border-radius: 50%;
  }
}
</style>
