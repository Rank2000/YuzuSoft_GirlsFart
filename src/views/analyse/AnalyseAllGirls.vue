<template>
  <div class="all-girls">
    <el-row :gutter="20">
      <el-col :span="6"
        ><div class="grid-content ep-bg-purple" />
        1</el-col
      >
      <el-col :span="6"
        ><div class="grid-content ep-bg-purple" />
        2</el-col
      >
      <el-col :span="6"
        ><div class="grid-content ep-bg-purple" />
        3</el-col
      >
      <el-col :span="6"
        ><div class="grid-content ep-bg-purple" />
        4</el-col
      >
    </el-row>
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
  border: 1px solid #000;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
