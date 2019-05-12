<template>
  <div class="navBar">
    <div class="left">
      <el-tree :data="treeData"
               node-key="id"
               :default-expanded-keys="[2, 3]"
               :default-checked-keys="[5]"
               :props="defaultProps"
               default-expand-all
               @node-click="handleNodeClick">
        <span slot-scope="{ node, data }">
          <i :class="data.icon"></i>
          <span style="padding-left: 4px;">{{node.label}}</span>
        </span>
      </el-tree>
    </div>
    <div class="right">
      <div>{{rightId}}</div>
      <div>我是金三胖</div>
    </div>
  </div>
</template>
<script>
import { getTreeData } from '@/api/api.js'
export default {
  data() {
    return {
      treeData: [], //  左边树节点数据
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      rightId: '我是魏小胖' // 传给右侧的id
    }
  },
  methods: {
    handleNodeClick(a, b, c) {
      this.rightId = a.id
    }
  },
  mounted() {
    getTreeData().then(res => {
      console.log(res)
      this.treeData = res.treeData
    })
  },
}
</script>
<style lang='less'scoped>
.navBar {
  height: 100%;
  .left {
    width: 300px;
    height: 100%;
    background-color: #fff;
    float: left;
    .el-tree {
      padding: 20px;
    }
  }
  .right {
    width: calc(100%-300px);
    height: 100%;
    margin-left: 300px;
    background-color: gray;
  }
}
</style>