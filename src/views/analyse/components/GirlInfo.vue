<script setup>
import { ref, watch } from 'vue'

// 控制弹框
const dialogVisible = ref(false)

// 女主信息
const girlInfo = ref({})
// 评分相关
const fartSmellScore = ref(0.5)
const fartCountScore = ref(0.5)
const poopCountScore = ref(0.5)
// 评分颜色
const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900'])
// 侦听器用于修改分数
watch(girlInfo, () => {
  // console.log(newValue, oldValue)
  // 屁味、屁量、便意分 / 20
  fartSmellScore.value = girlInfo.value.fart.fart_smell_score / 20
  fartCountScore.value = girlInfo.value.fart.fart_count_score / 20
  poopCountScore.value = girlInfo.value.poop.poop_count_score / 20
  // console.log(fartSmellScore.value)
})

// 打开弹框方法
const open = (item) => {
  dialogVisible.value = true
  girlInfo.value = item
  // console.log(girlInfo.value.fart.fart_smell_score)
}

defineExpose({
  open
})
</script>

<template>
  <el-dialog v-model="dialogVisible" title="女主介绍" width="700">
    <el-card style="max-width: 680px">
      <div class="avatar">
        <img :src="girlInfo.img_url" alt="" />
        <span class="girl-name">{{ girlInfo.name }}</span>
      </div>
      <!-- 分割线 -->
      <el-divider />
      <div class="introduction">
        <el-row>
          <el-col :span="6"> 站位 </el-col>
          <el-col :span="18"> {{ girlInfo.c_num + '号位' }} </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">源于作品:</el-col>
          <el-col :span="18">{{ girlInfo.galgame }}</el-col>
        </el-row>
        <el-row>
          <el-col :span="6">屁臭程度:</el-col>
          <el-col :span="7">
            <!-- 允许半星，只读，文字 -->
            <el-rate
              v-model="fartSmellScore"
              :colors="colors"
              disabled
              :texts="['淡臭', '一般', '臭', '特别臭', '极臭']"
              show-text
            />
          </el-col>
          <el-col :span="3">
            {{
              girlInfo.fart.fart_smell + `(${girlInfo.fart.fart_smell_score})分`
            }}
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">屁量:</el-col>
          <el-col :span="7">
            <el-rate
              v-model="fartCountScore"
              :colors="colors"
              disabled
              :texts="['屁量小', '屁量一般', '屁量大', '屁量特大', '屁量极大']"
              show-text
            />
          </el-col>
          <el-col :span="3">
            {{
              girlInfo.fart.fart_count + `(${girlInfo.fart.fart_count_score})分`
            }}
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">便意强度(排便量):</el-col>
          <el-col :span="7">
            <el-rate
              v-model="poopCountScore"
              :colors="colors"
              disabled
              :texts="[
                '屎量少',
                '屎量较少',
                '屎量一般',
                '屎量较多',
                '屎量极大'
              ]"
              show-text
            />
          </el-col>
          <el-col :span="3">
            {{
              girlInfo.poop.poop_count + `(${girlInfo.poop.poop_count_score})分`
            }}
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">介绍:</el-col>
          <el-col :span="18"> {{ girlInfo.introduction }} </el-col>
        </el-row>
      </div>
    </el-card>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="less" scoped>
.avatar {
  display: flex;
  align-items: center;
  img {
    height: 150px;
    width: 150px;
    border-radius: 50%;
  }
  span {
    flex: 1;
    font-size: 30px;
    text-align: center;
  }
}
.introduction {
  font-size: 16px;
  .el-row {
    min-height: 30px;
    line-height: 30px;
  }
}
</style>
