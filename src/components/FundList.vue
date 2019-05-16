<template>
  <div class="fillcontain">
    <div class="header">
      <span class="icons">
        <i class="el-icon-s-unfold"></i>
      </span>
      <el-breadcrumb separator="/"
                     class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">资金管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>资金流水</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="search_container">
      <el-form ref="searchData"
               :model="searchData"
               :inline="true"
               class="demo-form-inline form">
        <el-form-item label="投标时间筛选">
          <el-date-picker type="datetime"
                          placeholder="选择开始时间"
                          v-model="searchData.startTime"
                          size="small"></el-date-picker> --
          <el-date-picker type="datetime"
                          placeholder="选择结束时间"
                          v-model="searchData.endTime"
                          size="small"></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     size="small">筛选</el-button>
        </el-form-item>
        <el-form-item class="addBtn">
          <el-button type="primary"
                     size="small"
                     @click="dialogaddFormVisible = true">添加</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="table_container">
      <el-table :data="tableData"
                align="center"
                size="small"
                style="width: 100%">
        <el-table-column fixed
                         prop="sortnum"
                         label="序号"
                         width="80"
                         align="center">
        </el-table-column>
        <el-table-column prop="createTime"
                         label="创建时间"
                         width="220"
                         sortable
                         align="center">
        </el-table-column>
        <el-table-column prop="incomeType"
                         label="收支类型"
                         width="180"
                         align="center"
                         :filters="incomeTypeList"
                         :filter-method="filterType">
        </el-table-column>
        <el-table-column prop="incomePayDes"
                         label="收支描述"
                         width="240">
        </el-table-column>
        <el-table-column prop="income"
                         label="收入"
                         width="170"
                         align="center"
                         sortable>
        </el-table-column>
        <el-table-column prop="pay"
                         label="支出"
                         width="170"
                         align="center"
                         sortable>
        </el-table-column>
        <el-table-column prop="accoutCash"
                         label="账户现金"
                         width="170"
                         align="center"
                         sortable>
        </el-table-column>
        <el-table-column prop="remarks"
                         label="备注"
                         width="250"
                         align="center">
        </el-table-column>
        <el-table-column prop="operation"
                         label="操作"
                         width="180"
                         align="center"
                         fixed="right">
          <template slot-scope="scope">
            <el-button type="warning"
                       size="small"
                       @click="dialogEditFormVisible = true">编辑</el-button>
            <el-button type="danger"
                       size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row>
        <el-col :span="24">
          <div class="pagination">
            <el-pagination @size-change="handleSizeChange"
                           @current-change="handleCurrentChange"
                           :current-page="1"
                           :page-sizes="[100, 200, 300, 400]"
                           :page-size="100"
                           layout="total, sizes, prev, pager, next, jumper"
                           :total="400">
            </el-pagination>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 添加对话框 -->
    <el-dialog title="新增资金信息"
               :visible.sync="dialogaddFormVisible">
      <el-form :model="addForm"
               :rules="addRules"
               ref="addForm">
        <el-form-item label="收支类型"
                      :label-width="formLabelWidth">
          <el-select v-model="addForm.incomeType"
                     placeholder="收支类型"
                     size="small">
            <el-option label="提现"
                       value="0"></el-option>
            <el-option label="提现手续费"
                       value="1"></el-option>
            <el-option label="提现锁定"
                       value="2"></el-option>
            <el-option label="理财服务退出"
                       value="3"></el-option>
            <el-option label="购买宜定盈"
                       value="4"></el-option>
            <el-option label="充值"
                       value="5"></el-option>
            <el-option label="优惠券"
                       value="6"></el-option>
            <el-option label="充值礼券"
                       value="7"></el-option>
            <el-option label="转账"
                       value="8"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="收支描述"
                      :label-width="formLabelWidth"
                      prop="incomePayDes">
          <el-input type="textarea"
                    v-model="addForm.incomePayDes"
                    autocomplete="off"
                    size="small"></el-input>
        </el-form-item>
        <el-form-item label="收入"
                      :label-width="formLabelWidth"
                      prop="income">
          <el-input v-model="addForm.income"
                    autocomplete="off"
                    size="small"></el-input>
        </el-form-item>
        <el-form-item label="支出"
                      :label-width="formLabelWidth"
                      prop="pay">
          <el-input v-model="addForm.pay"
                    autocomplete="off"
                    size="small"></el-input>
        </el-form-item>
        <el-form-item label="账户现金"
                      :label-width="formLabelWidth"
                      prop="accoutCash">
          <el-input v-model="addForm.accoutCash"
                    autocomplete="off"
                    size="small"></el-input>
        </el-form-item>
        <el-form-item label="备注"
                      :label-width="formLabelWidth">
          <el-input type="textarea"
                    v-model="addForm.remarks"
                    size="small"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="dialogaddFormVisible = false"
                   size="small">取 消</el-button>
        <el-button type="primary"
                   size="small">提交</el-button>
      </div>
    </el-dialog>
    <!-- 编辑对话框 -->
    <el-dialog title="修改资金信息"
               :visible.sync="dialogEditFormVisible">
      <el-form :model="editForm"
               :rules="editRules"
               ref="editForm">
        <el-form-item label="收支类型"
                      :label-width="formLabelWidth">
          <el-select v-model="editForm.incomeType"
                     placeholder="收支类型"
                     size="small">
            <el-option label="提现"
                       value="0"></el-option>
            <el-option label="提现手续费"
                       value="1"></el-option>
            <el-option label="提现锁定"
                       value="2"></el-option>
            <el-option label="理财服务退出"
                       value="3"></el-option>
            <el-option label="购买宜定盈"
                       value="4"></el-option>
            <el-option label="充值"
                       value="5"></el-option>
            <el-option label="优惠券"
                       value="6"></el-option>
            <el-option label="充值礼券"
                       value="7"></el-option>
            <el-option label="转账"
                       value="8"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="收支描述"
                      :label-width="formLabelWidth"
                      prop="incomePayDes">
          <el-input type="textarea"
                    v-model="editForm.incomePayDes"
                    autocomplete="off"
                    size="small"></el-input>
        </el-form-item>
        <el-form-item label="收入"
                      :label-width="formLabelWidth"
                      prop="income">
          <el-input v-model="editForm.income"
                    autocomplete="off"
                    size="small"></el-input>
        </el-form-item>
        <el-form-item label="支出"
                      :label-width="formLabelWidth"
                      prop="pay">
          <el-input v-model="editForm.pay"
                    autocomplete="off"
                    size="small"></el-input>
        </el-form-item>
        <el-form-item label="账户现金"
                      :label-width="formLabelWidth"
                      prop="accoutCash">
          <el-input v-model="editForm.accoutCash"
                    autocomplete="off"
                    size="small"></el-input>
        </el-form-item>
        <el-form-item label="备注"
                      :label-width="formLabelWidth">
          <el-input type="textarea"
                    v-model="editForm.remarks"
                    size="small"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="dialogEditFormVisible = false"
                   size="small">取 消</el-button>
        <el-button type="primary"
                   size="small">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>
           
<script>
export default {
  data() {
    // 校验收入，支出，账户现金
    let validateData = (rule, value, callback) => {
      if (!value) {
        let text;
        if (rule.field == 'income') {
          text = '收入'
        } else if (rule.field == 'pay') {
          text = 'pay'
        } else {
          text = '账户现金'
        }
        callback(new Error(text + '不能为空'));
      } else {
        let numReg = /^[0-9]+.?[0-9]*$/;
        if (!numReg.test(value)) {
          callback(new Error('请输入数字'));
        } else {
          callback();
        }

      }
    };
    return {
      dialogaddFormVisible: false,
      formLabelWidth: '120px',
      addForm: {
        incomeType: '',
        incomePayDes: '',
        income: '',
        pay: '',
        accoutCash: '',
        remarks: ''
      },
      dialogEditFormVisible: false,
      editForm: {
        incomeType: '',
        incomePayDes: '',
        income: '',
        pay: '',
        accoutCash: '',
        remarks: ''
      },
      addRules: {
        incomePayDes: [
          { required: true, message: '请输入收支描述', trigger: 'blur' }
        ],
        income: [
          { required: true, validator: validateData, trigger: 'blur' }
        ],
        pay: [
          { required: true, validator: validateData, trigger: 'blur' }
        ],
        accoutCash: [
          { required: true, validator: validateData, trigger: 'blur' }
        ],
      },
      editRules: {
        incomePayDes: [
          { required: true, message: '请输入收支描述', trigger: 'blur' }
        ],
        income: [
          { required: true, validator: validateData, trigger: 'blur' }
        ],
        pay: [
          { required: true, validator: validateData, trigger: 'blur' }
        ],
        accoutCash: [
          { required: true, validator: validateData, trigger: 'blur' }
        ],
      },
      searchData: {
        startTime: '',
        endTime: ''
      },
      tableData: [
        {
          sortnum: '1',
          createTime: '2016-05-04',
          incomeType: '',
          incomePayDes: '',
          income: '',
          pay: 200333,
          accoutCash: '',
          remarks: ''
        },
        {
          sortnum: '2',
          createTime: '2016-05-04',
          incomeType: '',
          incomePayDes: '',
          income: '',
          pay: 200333,
          accoutCash: '',
          remarks: ''
        },
        {
          sortnum: '3',
          createTime: '2016-05-06',
          incomeType: '',
          incomePayDes: '',
          income: '',
          pay: 200333,
          accoutCash: '',
          remarks: ''
        },
        {
          sortnum: '4',
          createTime: '2017-05-04',
          incomeType: '',
          incomePayDes: '',
          income: '',
          pay: 200333,
          accoutCash: '',
          remarks: ''
        },
        {
          sortnum: '5',
          createTime: '2017-05-04',
          incomeType: '',
          incomePayDes: '',
          income: '',
          pay: 200333,
          accoutCash: '',
          remarks: ''
        },
        {
          sortnum: '6',
          createTime: '2017-05-04',
          incomeType: '',
          incomePayDes: '',
          income: '',
          pay: 200333,
          accoutCash: '',
          remarks: ''
        },
        {
          sortnum: '7',
          createTime: '2017-05-04',
          incomeType: '',
          incomePayDes: '',
          income: '',
          pay: 200333,
          accoutCash: '',
          remarks: ''
        },
        {
          sortnum: '8',
          createTime: '2017-05-04',
          incomeType: '',
          incomePayDes: '',
          income: '',
          pay: 200333,
          accoutCash: '',
          remarks: ''
        },
        {
          sortnum: '9',
          createTime: '2017-05-04',
          incomeType: '',
          incomePayDes: '',
          income: '',
          pay: 200333,
          accoutCash: '',
          remarks: ''
        },
        {
          sortnum: '10',
          createTime: '2017-05-04',
          incomeType: '',
          incomePayDes: '',
          income: '',
          pay: 200333,
          accoutCash: '',
          remarks: ''
        }],
      // tableHeight: '',
      incomeTypeList: [
        { text: '提现', value: '提现' },
        { text: '提现手续费', value: '提现手续费' },
        { text: '提现锁定', value: '提现锁定' },
        { text: '理财服务退出', value: '理财服务退出' },
        { text: '充值', value: '充值' },
        { text: '优惠券', value: '优惠券' },
        { text: '充值礼劵', value: '充值礼劵' },
        { text: '优惠转账券', value: '优惠转账券' }
      ]
    }
  },
  methods: {
    filterType() {

    },
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },

  }
}
</script>
<style lang='less' scoped>
.fillcontain {
  height: 100%;
  margin: 0 10px;
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
    height: 40px;
    .el-form-item {
      margin-bottom: 10px !important;
    }
    .addBtn {
      float: right;
      margin-right: 0 !important;
    }
  }
  .table_container {
    .pagination {
      margin-top: 10px;
    }
  }
}
</style>