<template>
  <div class="tableBar">
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-date-picker v-model="value1"
                          type="datetimerange"
                          range-separator="-"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期"
                          size="small">
          </el-date-picker>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <el-select v-model="value"
                     placeholder="请选择">
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-button type="warning"
                     @click="chooseData">筛选</el-button>
          <el-button type="danger"
                     @click="rewriteData">重置</el-button>
        </div>
      </el-col>
    </el-row>
    <Table :gettabledata="tableData"></Table>
    <div class="pages">
      <el-pagination @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="1"
                     :page-size="pageNum"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
// data.pageNum && data.pageSize && data.SHStatus && data.time      "/tableData"
import Table from '@/pages/Table.vue'
import { getTableData } from '../api/api.js'
export default {
  data() {
    return {
      value1: [new Date(1977, 10, 10), new Date(2220, 10, 11)],
      // 下拉框
      options: [{
        value: '选项1',
        label: '已审核'
      }, {
        value: '选项2',
        label: '未审核'
      }, {
        value: '选项3',
        label: '审核中'
      }],
      value: '选项1',
      tableData: [],
      pageNum: 30,
      pageSize: 1,
      total: 0
    }
  },
  components: {
    Table,
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageNum = val
      this.initTable()
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pageSize = val
      this.initTable()
    },
    // 初始化表格数据
    initTable() {
      let params = {
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        SHStatus: this.value,
        // time: this.value1
        time: '2018-04-09 12:00:00'
      }
      console.log(this.pageNum);
      getTableData(params).then(res => {
        console.log(res)
        this.tableData = res.data
        this.total = res.data.length
      })
    },
    // 筛选功能
    chooseData() {
      this.initTable()
    },
    // 重置功能
    rewriteData() {
      this.value = '选项1'
      this.value1 = [new Date(1977, 10, 10), new Date(2220, 10, 11)]
      this.initTable()
    }

  },
  created() {
    this.initTable()
  }
}
</script>
<style lang='less' scoped>
.tableBar {
  .el-row {
    height: 60px;
    line-height: 60px;
  }
  .bg-purple {
    height: 60px;
    background: #fff;
    text-align: center;
    .el-date-editor--datetimerange.el-input__inner {
      width: 342px;
      border: none;
    }
  }
  .bg-purple-light {
    // background: #e5e9f2;
    background-color: #fff;
    height: 60px;
    text-align: center;
  }
}
</style>