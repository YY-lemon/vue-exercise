<template>
  <div class="infoList">
    <div class="header">
      <span class="icons">
        <i class="el-icon-s-unfold"></i>
      </span>
      <el-breadcrumb separator="/"
                     class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">信息列表</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <el-table :data="tableData"
                border
                style="width: 100%">
        <el-table-column type="index"
                         width="60"
                         align="center">
        </el-table-column>
        <el-table-column prop="nickname"
                         label="昵称"
                         width="120"
                         align="center">
        </el-table-column>
        <el-table-column prop="year"
                         label="投资年限"
                         width="80"
                         align="center">
        </el-table-column>
        <el-table-column prop="email"
                         label="绑定邮箱"
                         width="190"
                         align="center">
        </el-table-column>
        <el-table-column prop="modifyTime"
                         label="修改时间"
                         width="180"
                         align="center">
        </el-table-column>
        <el-table-column prop="baseServer"
                         label="基本短信服务"
                         align="center">
        </el-table-column>
        <el-table-column prop="chooseServer"
                         label="可选短信服务"
                         align="center">
        </el-table-column>
      </el-table>
      <el-pagination @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="1"
                     :page-sizes="[100, 200, 300, 400]"
                     :page-size="100"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="400">
      </el-pagination>
    </div>
  </div>
</template>
           
<script>
export default {
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
}
</script>
<style lang='less' scoped>
.infoList {
  // height: 100%;
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
  .content {
    // width: 100%;
    margin: 0 10px;
    // height: 600px;
    // background-color: red;
  }
}
</style>