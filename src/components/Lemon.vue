<template>
  <div class="homeContent">
    <div class="content">
      <div class="bread_container">
        <i class=""></i>
        <el-breadcrumb>
          <el-breadcrumb-item>首页</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-row :gutter="20"
              class="dataList">
        <el-col :span="3">
          <div class="grid-content pay"></div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content income"></div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content hidden_investors"></div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content intention_investors"></div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content waitpending_investors"></div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content pending_investors"></div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content pass_investors"></div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content newadd_investors"></div>
        </el-col>
      </el-row>
      <el-row class="graphy">
        <el-col :span="12">
          <div id="myChart1"
               :style="{width: '568px', height: '400px'}"></div>
        </el-col>
        <el-col :span="12">
          <div id="myChart2"
               :style="{width: '568px', height: '400px'}"></div>
        </el-col>
      </el-row>
      <el-row class="pieChart"
              style="margin-top:20px;">
        <el-col :span="8">
          <div id="pieChart1"
               :style="{width: '375px', height: '280px'}"></div>
        </el-col>
        <el-col :span="8">
          <div id="pieChart2"
               :style="{width: '375px', height: '280px'}"></div>
        </el-col>
        <el-col :span="8">
          <div id="pieChart3"
               :style="{width: '375px', height: '280px'}"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
           
<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    // 初始化echarts
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart1 = this.$echarts.init(document.getElementById('myChart1'))
      let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
      let pieChart1 = this.$echarts.init(document.getElementById('pieChart1'))
      let pieChart2 = this.$echarts.init(document.getElementById('pieChart2'))
      let pieChart3 = this.$echarts.init(document.getElementById('pieChart3'))
      // 绘制图表
      myChart1.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '邮件营销',
            type: 'bar',
            stack: '广告',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'bar',
            stack: '广告',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'bar',
            stack: '广告',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '搜索引擎',
            type: 'bar',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            markLine: {
              lineStyle: {
                normal: {
                  type: 'dashed'
                }
              },
              data: [
                [{ type: 'min' }, { type: 'max' }]
              ]
            }
          },
          {
            name: '百度',
            type: 'bar',
            barWidth: 5,
            stack: '搜索引擎',
            data: [620, 732, 701, 734, 1090, 1130, 1120]
          }
        ]
      });
      myChart2.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {} },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            areaStyle: { normal: {} },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      });
      pieChart1.setOption({
        title: {
          text: '用户投资类型',
          subtext: '纯属虚构',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['基金', '股票', '债券', '储蓄', '期货']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '基金' },
              { value: 310, name: '股票' },
              { value: 234, name: '债券' },
              { value: 135, name: '储蓄' },
              { value: 1548, name: '期货' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      });
      pieChart2.setOption({
        title: {
          text: '用户投资途径',
          subtext: '纯属虚构',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '谷歌']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            label: {
              normal: {
                position: 'inner'
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: '直达', selected: false },
              { value: 679, name: '营销广告' },
              { value: 1548, name: '搜索引擎' }
            ]
          },
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '55%'],
            label: {
              normal: {
                // formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                // backgroundColor: '#eee',
                // borderColor: '#aaa',
                // borderWidth: 1,
                // borderRadius: 4,
                rich: {
                  a: {
                    color: '#999',
                    lineHeight: 22,
                    align: 'center'
                  },
                  hr: {
                    borderColor: '#aaa',
                    width: '100%',
                    borderWidth: 0.5,
                    height: 0
                  },
                  b: {
                    fontSize: 16,
                    lineHeight: 33
                  },
                  per: {
                    color: '#eee',
                    backgroundColor: '#334455',
                    padding: [2, 4],
                    borderRadius: 2
                  }
                }
              }
            },
            data: [
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 251, name: '谷歌' },
            ]
          }
        ]
      });
      pieChart3.setOption({
        title: {
          text: '用户投资区域',
          subtext: '纯属虚构',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['华东区', '华南区', '华中区', '华北区', '西南区', '东北区', '台港澳']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '华东区' },
              { value: 310, name: '华南区' },
              { value: 234, name: '华中区' },
              { value: 835, name: '华北区' },
              { value: 1548, name: '西南区' },
              { value: 335, name: '东北区' },
              { value: 454, name: '台港澳' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      });
    },

  }
}
</script>
<style lang='less' scoped>
.homeContent {
  .content {
    width: 100%;
    // height: 900px;
    background-color: #fff;
    .bread_container {
      width: 100%;
      height: 30px;
      line-height: 30px;
      text-align: center;
      background-color: #eff2f7;
      margin-bottom: 20px;
      .el-breadcrumb {
        line-height: 30px;
      }
    }
    .dataList {
      height: 70px;
      margin-bottom: 20px;
      margin-left: 0 !important;
      margin-right: 0 !important;
      .el-col {
        border-radius: 4px;
        padding-left: 5px;
        padding-right: 5px;
        .grid-content {
          border-radius: 4px;
          height: 70px;
        }
        .pay {
          background-color: #18a689;
        }
        .income {
          background-color: #99cc00;
        }
        .hidden_investors {
          background-color: #33cc99;
        }
        .intention_investors {
          background-color: #3b5999;
        }
        .waitpending_investors {
          background-color: #66cc99;
        }
        .pending_investors {
          background-color: #009999;
        }
        .pass_investors {
          background-color: #ff9900;
        }
        .newadd_investors {
          background-color: #0099cc;
        }
      }
    }
    .graphy {
      width: 100%;
      height: 400px;
      // background-color: #99cc00;
    }
    .pieChart {
      width: 100%;
      height: 280px;
      // background-color: #33cc99;
    }
  }
}
</style>