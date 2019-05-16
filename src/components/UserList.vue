<template>
  <div class="userList">
    <div class="header">
      <span class="icons">
        <i class="el-icon-s-unfold"></i>
      </span>
      <el-breadcrumb separator="/"
                     class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">用户列表</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <el-table :data="tableData"
                border
                style="width: 100%">
        <el-table-column type="index"
                         width="50"
                         align="center">
        </el-table-column>
        <el-table-column prop="username"
                         label="用户姓名"
                         width="120"
                         align="center">
        </el-table-column>
        <el-table-column prop="address"
                         label="注册地址"
                         width="150"
                         align="center">
        </el-table-column>
        <el-table-column prop="net"
                         label="网络"
                         width="80"
                         align="center">
        </el-table-column>
        <el-table-column prop="ip"
                         label="IP地址"
                         width="180"
                         align="center">
        </el-table-column>
        <el-table-column prop="time"
                         label="注册时间"
                         width="180"
                         align="center">
        </el-table-column>
        <el-table-column prop="loginTime"
                         label="登录时间"
                         width="180"
                         align="center">
        </el-table-column>
        <el-table-column prop="region"
                         label="地区编号"
                         width="120"
                         align="center">
        </el-table-column>
        <el-table-column prop="city"
                         label="城市编号"
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
.userList {
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