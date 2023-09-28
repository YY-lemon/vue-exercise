<template>
  <div>
    <div ref="container" class="graph-container"></div>
    <el-dialog :visible.sync="dialogVisible" title="节点信息">
      <el-form>
        <el-form-item label="姓名">
          <span>{{ selectedNode.label }}</span>
        </el-form-item>
        <el-form-item label="头像">
          <img
            :src="selectedNode.img"
            alt=""
            style="width: 100px; height: 100px;"
          />
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import G6 from "@antv/g6";
// import { Dialog, Form, FormItem } from 'element-ui';

export default {
  // components: {
  //   ElDialog: Dialog,
  //   ElForm: Form,
  //   ElFormItem: FormItem,
  // },
  data() {
    return {
      graph: {},
      dialogVisible: false,
      selectedNode: {}
    };
  },
  mounted() {
    this.initGraph();
  },
  methods: {
    initGraph() {
      const container = this.$refs.container;
      const width = container.clientWidth;
      const height = container.clientHeight;
      this.graph = new G6.Graph({
        container: container,
        width: width,
        height: height,
        fitCenter: true,
        modes: {
          default: ["drag-canvas", "zoom-canvas", "click-select", "drag-node"]
        },
        layout: {
          type: "force",
          preventOverlap: true,
          nodeSize: 140
        },
        defaultNode: {
          size: [40, 40],
          type: "image",
          style: {
            fill: "#C6E5FF",
            stroke: "#5B8FF9"
          },
          labelCfg: {
            style: {
              fill: "#000000",
              fontSize: 12
            }
          }
        },
        defaultEdge: {
          style: {
            endArrow: {
              path: G6.Arrow.triangle(),
              fill: "black"
            }
          }
        }
      });

      const data = {
        nodes: [
          {
            id: "node1",
            label: this.fittingString("Person1  15992133213159892我是文字133213", 50, 12), // 40 is the maxWidth
            img:
              "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F5cc423d4-f670-4fb9-89ee-bb400492edf3%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1698386214&t=6f893a6142190500e3e6706a3d6b77ea",
            x: 100,
            y: 100
          },
          {
            id: "node2",
            label: "Person2",
            img:
              "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F8a7716bc-4601-4e8e-8d93-cdb09725aa87%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1698386239&t=099b1caf83d3986501baae306467931f",
            x: 200,
            y: 100
          },
          {
            id: "node3",
            label: "Person3",
            img:
              "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F9285b5de-fe65-4f0c-ae08-79af6f5d8b76%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1698386289&t=e5534813b39d41279c8349b8cc463297",
            x: 300,
            y: 400
          },
          {
            id: "node4",
            label: "Person4",
            img:
              "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F5cc423d4-f670-4fb9-89ee-bb400492edf3%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1698386214&t=6f893a6142190500e3e6706a3d6b77ea",
            x: 200,
            y: 400
          },
          {
            id: "node5",
            label: "Person5",
            img:
              "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F8a7716bc-4601-4e8e-8d93-cdb09725aa87%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1698386239&t=099b1caf83d3986501baae306467931f",
            x: 500,
            y: 300
          },
          {
            id: "node6",
            label: "Person6",
            img:
              "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F9285b5de-fe65-4f0c-ae08-79af6f5d8b76%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1698386289&t=e5534813b39d41279c8349b8cc463297",
            x: 600,
            y: 600
          }
        ],
        edges: [
          {
            source: "node1",
            target: "node2",
            label: "手机号属于"
          },
          {
            source: "node1",
            target: "node3"
          },
          {
            source: "node1",
            target: "node4"
          },
          {
            source: "node2",
            target: "node5"
          },
          {
            source: "node6",
            target: "node1"
          }
        ]
      };
      this.graph.data(data);
      this.graph.render();

      this.graph.on("node:click", evt => {
        const node = evt.item;
        const model = node.getModel();
        this.selectedNode = model;
        this.graph.focusItem(node);
        // clearAllStats();
        this.highlightNode(evt);
        this.dialogVisible = true;
      });

      this.graph.on("canvas:click", () => {
        this.graph.getEdges().forEach(edge => {
          this.graph.setItemState(edge, "highlight", false);
        });
      });
    },
    // 高亮指定节点及其关联的边
    highlightNode(e) {
      const item = e.item;
      this.graph.setAutoPaint(false);
      this.graph.getNodes().forEach(node => {
        this.graph.clearItemStates(node);
        this.graph.setItemState(node, "dark", true);
      });
      this.graph.setItemState(item, "dark", false);
      this.graph.setItemState(item, "highlight", true);
      this.graph.getEdges().forEach(edge => {
        if (edge.getSource() === item) {
          this.graph.setItemState(edge.getTarget(), "dark", false);
          this.graph.setItemState(edge.getTarget(), "highlight", true);
          this.graph.setItemState(edge, "highlight", true);
          edge.toFront();
        } else if (edge.getTarget() === item) {
          this.graph.setItemState(edge.getSource(), "dark", false);
          this.graph.setItemState(edge.getSource(), "highlight", true);
          this.graph.setItemState(edge, "highlight", true);
          edge.toFront();
        } else {
          this.graph.setItemState(edge, "highlight", false);
        }
      });
      this.graph.paint();
      this.graph.setAutoPaint(true);
    },

    // 取消高亮所有节点和边
    clearAllStats() {
      this.graph.setAutoPaint(false);
      this.graph.getNodes().forEach(function(node) {
        this.graph.clearItemStates(node);
      });
      this.graph.getEdges().forEach(function(edge) {
        this.graph.clearItemStates(edge);
      });
      this.graph.paint();
      this.graph.setAutoPaint(true);
    },
    fittingString(str, maxWidth, fontSize) {
      let currentWidth = 0;
      let res = str;
      const pattern = new RegExp("[\u4E00-\u9FA5]+"); // distinguish the Chinese charactors and letters
      str.split("").forEach((letter, i) => {
        if (currentWidth > maxWidth) return;
        if (pattern.test(letter)) {
          // Chinese charactors
          currentWidth += fontSize;
        } else {
          // get the width of single letter according to the fontSize
          currentWidth += G6.Util.getLetterWidth(letter, fontSize);
        }
        if (currentWidth > maxWidth) {
          res = `${str.substr(0, i)}\n${str.substr(i)}`;
        }
      });
      return res;
    }
  }
};
</script>

<style>
.graph-container {
  width: 500px;
  height: 500px;
  background-color: skyblue;
}
</style>
