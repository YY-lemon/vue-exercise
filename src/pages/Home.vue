<template>
  <div class="home">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">导航页</div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">表格页</div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>
<script>
export default {

}
</script>
<style lang='less' scoped>
.home {
  height: 100%;
  .el-container {
    height: 100%;
    .el-header {
      background-color: #b3c0d1;
      color: #333;
      text-align: center;
      line-height: 60px;
      padding: 0;
      .grid-content {
        display: inline-block;
        text-align: center;
        // width: 30px;
        background-color: blue;
        color: #fff;
        padding: 0 10px;
        // height: 40px;
        line-height: 40px;
      }
    }
    .el-main {
      background-color: #e9eef3;
      color: #333;
      text-align: center;
      // line-height: 160px;
      height: calc(100%-60px);
    }
  }
}
</style>