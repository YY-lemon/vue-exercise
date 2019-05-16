<template>
  <div class="personInfo">
    <div class="header">
      <span class="icons">
        <i class="el-icon-s-unfold"></i>
      </span>
      <el-breadcrumb separator="/"
                     class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">信息管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>个人信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>
           
<script>
export default {

}
</script>
<style lang='less' scoped>
.personInfo {
  .header {
    width: 100%;
    background-color: #eff2f7;
    margin-bottom: 5px;
    .icons {
      margin: 0 10px;
      cursor: pointer;
      line-height: 30px;
      float: left;
    }
    .breadcrumb {
      height: 30px;
      line-height: 30px;
    }
  }
}
</style>