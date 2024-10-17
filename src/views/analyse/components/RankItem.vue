<script setup>
import { onMounted, ref } from 'vue'
import GirlInfo from './GirlInfo.vue'

const props = defineProps({
  // 排行榜标题
  title: {
    typeof: String
  },
  // 排行榜头部背景色
  bgColor: {
    typeof: String,
    default: 'greenyellow'
  },
  // 女主信息数组
  girlsInfo: {
    typeof: Array
  },
  // 排行梯队值
  rank: {
    typeof: String
  },
  // 过滤规则(fart_smell、fart_count、poop_count)
  rule: {
    typeof: String
  }
})
// 原始数据
// console.log(props.girlsInfo, props.rank, props.rule)
// 过滤后的符合梯队的数据
const girlsArr = ref()
const girlsInfofilter = () => {
  if (props.rule === 'fart_smell') {
    girlsArr.value = props.girlsInfo.filter(
      (item) => item.fart.fart_smell === props.rank
    )
  } else if (props.rule === 'fart_count') {
    girlsArr.value = props.girlsInfo.filter(
      (item) => item.fart.fart_count === props.rank
    )
  } else if (props.rule === 'poop_count') {
    girlsArr.value = props.girlsInfo.filter(
      (item) => item.poop.poop_count === props.rank
    )
  }
  // 过滤后的数据
  // console.log(girlsArr.value)
}

// 头部ref
const headerRef = ref()

// 弹框组件ref
const dialogRef = ref()

// 打开弹层
const openDialog = (item) => {
  // console.log(item)
  dialogRef.value.open(item)
}

// 渲染后执行
onMounted(() => {
  // 修改头部框颜色
  // console.log(header.value, props.bgColor)
  headerRef.value.style.backgroundColor = props.bgColor
})

// created
girlsInfofilter()
</script>

<template>
  <div class="rank-item">
    <el-row>
      <el-col :span="24">
        <div ref="headerRef" class="rank-header">
          <h1 class="rank-title">{{ title || 'rank-title' }}</h1>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-row class="rank-content">
          <el-col :span="6" v-for="item in girlsArr" :key="item">
            <div class="girl-avatar" @click="openDialog(item)">
              <img
                :src="
                  item.img_url || '@/assets/galgame_girls_avatar/占位图片.png'
                "
                alt=""
              />
              <span>{{ item.name || '占位图片' }}</span>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <GirlInfo ref="dialogRef"></GirlInfo>
  </div>
</template>

<style lang="less" scoped>
.rank-item {
  .rank-header {
    display: flex;
    width: 100%;
    height: 25px;
    background-color: greenyellow;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    color: white;
  }
  .rank-content {
    // border: 1px solid red;
    .el-col {
      padding: 10px;
      .girl-avatar {
        // margin: 10px;
        padding-top: 10px;
        border-radius: 4px;
        border: 3px solid #ccc;
        display: flex;
        flex-direction: column;
        align-items: center;
        // border: 1px solid #000;
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
          // border: 1px solid #000;
        }
      }
    }
  }
}
</style>
