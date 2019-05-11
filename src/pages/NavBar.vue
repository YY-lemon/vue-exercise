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
export default {
  data() {
    return {
      treeData: [
        {
          id: 1,
          label: '一级 1',
          icon: "el-icon-menu",
          children: [{
            id: 4,
            label: '二级 1-1',
            icon: 'el-icon-info'
          }]
        }, {
          id: 2,
          label: '一级 2',
          icon: "el-icon-menu",
          children: [{
            id: 5,
            label: '二级 2-1',
            icon: 'el-icon-info'
          }, {
            id: 6,
            label: '二级 2-2',
            icon: 'el-icon-info'
          }]
        }, {
          id: 3,
          label: '一级 3',
          icon: "el-icon-menu",
          children: [{
            id: 7,
            label: '二级 3-1',
            icon: 'el-icon-info'
          }, {
            id: 8,
            label: '二级 3-2',
            icon: 'el-icon-info'
          }]
        }
      ], //  左边树节点数据
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
  watch: {
    rightId() {
      alert('我变化了')
    }
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