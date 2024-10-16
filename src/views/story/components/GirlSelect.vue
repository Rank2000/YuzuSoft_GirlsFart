<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  girlsArr: {
    required: true, // 必须传
    type: Array // 类型
  },
  modelValue: {
    type: String
  }
})

const emit = defineEmits(['update:modelValue'])

// console.log(props.modelValue)
</script>

<template>
  <div class="selectGirl">
    <!-- 下拉选 + 当前女主-->
    <el-select
      :modelValue="modelValue"
      @update:modelValue="emit('update:modelValue', $event)"
      size="large"
      style="width: 240px"
    >
      <el-option
        v-for="(item, index) in girlsArr"
        :key="index"
        :label="item"
        :value="item"
      />
    </el-select>
    <div class="girl" style="color: orange; font-size: 22px; font-weight: 500">
      当前女主：{{ modelValue }}
    </div>
  </div>
</template>

<style lang="less" scoped>
.selectGirl {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
}
</style>
