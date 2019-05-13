<template>
  <div>
    <el-table :data="gettabledata"
              border
              style="width: 100%">
      <el-table-column prop="id"
                       label="序号"
                       width="120">
      </el-table-column>
      <el-table-column prop="Date"
                       label="时间"
                       width="240">
      </el-table-column>
      <el-table-column prop="billId"
                       label="状态"
                       width="120">
      </el-table-column>
      <el-table-column prop="adress"
                       label="地区">
      </el-table-column>
    </el-table>
  </div>

</template>
           
<script>
export default {
  data() {
    return {

    }
  },
  props: ['gettabledata']
}
</script>
<style lang='less'scoped>
.el-table {
  height: 400px;
  overflow-y: auto;
}
</style>