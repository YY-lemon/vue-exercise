<template>
  <div class="payList">
    <div class="header">
      <span class="icons">
        <i class="el-icon-s-unfold"></i>
      </span>
      <el-breadcrumb separator="/"
                     class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">资金管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>支付单据</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="search_container">
      <el-form ref="searchData"
               :model="searchData"
               :inline="true"
               class="demo-form-inline form">
        <el-form-item label="支付单号">
          <el-input v-model="searchData.payNumber"
                    autocomplete="off"
                    size="small"
                    placeholder="请输入支付单号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     size="small">筛选</el-button>
        </el-form-item>
        <el-form-item class="addBtn">
          <el-button type="danger"
                     size="small">删除</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="table_container">
      <el-table ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection"
                         width="55">
        </el-table-column>
        <el-table-column label="日期"
                         width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name"
                         label="姓名"
                         width="120">
        </el-table-column>
        <el-table-column prop="address"
                         label="地址"
                         show-overflow-tooltip>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
           
<script>
export default {
  data() {
    return {
      searchData: [],
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
    }
  },
}
</script>
<style lang='less' scoped>
.payList {
  height: 100%;
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
  .search_container {
    height: 36px;
    line-height: 36px;
    margin: 0 10px 10px 10px;
  }
  .table_container {
    margin: 0 10px;
  }
}
</style>