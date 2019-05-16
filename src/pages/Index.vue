<template>
  <div class="home">
    <el-container class="home-container">
      <el-header class="header">
        <div class="logo-container">
          <img src="../assets/orange.png"
               alt=""
               class="logo">
          <span class="title">小胖后台管理系统</span>
        </div>
        <div class="userInfo">
          <img src="../assets/user.png"
               alt=""
               class="avatar">
          <div class="welcome">
            <p class='name comename'>欢迎</p>
            <p class='name avatarname'>xxx</p>
          </div>
          <span class="username">
            <el-dropdown>
              <span class="el-dropdown-link">
                <i class="el-icon-caret-bottom"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>修改信息</el-dropdown-item>
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </span>
          <!-- <i class="icon icon-tuichu"></i> -->
          <i class="el-icon-switch-button"></i>
        </div>
      </el-header>
      <el-main class="main">
        <div class="left">
          <el-row class="menu-page">
            <el-col :span="24">
              <el-menu default-active="2"
                       class="el-menu-vertical-demo"
                       text-color="#fff"
                       active-text-color="#ffd04b"
                       background-color="#324057"
                       @open="handleOpen"
                       @close="handleClose">
                <router-link to="/index/lemon">
                  <el-menu-item>
                    <i class="el-icon-menu"></i>
                    <span slot="title">首页</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/index/userList">
                  <el-menu-item>
                    <i class="el-icon-document"></i>
                    <span slot="title">用户列表</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/index/infoList">
                  <el-menu-item index="3">
                    <i class="el-icon-setting"></i>
                    <span slot="title">信息列表</span>
                  </el-menu-item>
                </router-link>
                <el-submenu index="4">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>信息管理</span>
                  </template>
                  <el-menu-item-group>
                    <router-link to="/index/infoShow">
                      <el-menu-item>个人信息</el-menu-item>
                    </router-link>
                    <router-link to="/index/infoModify">
                      <el-menu-item>修改信息</el-menu-item>
                    </router-link>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="5">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>资金管理</span>
                  </template>
                  <el-menu-item-group>
                    <router-link to="/index/fundList">
                      <el-menu-item>资金流水</el-menu-item>
                    </router-link>
                    <router-link to="/index/payList">
                      <el-menu-item>支付单据</el-menu-item>
                    </router-link>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="6">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>投资管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item>省份投资</el-menu-item>
                    <el-menu-item>区域投资</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="7">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>金融文章</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item>发布文章</el-menu-item>
                    <el-menu-item>编辑文章</el-menu-item>
                    <el-menu-item>查看文章</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="8">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>资金数据</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item>投资分布</el-menu-item>
                    <el-menu-item>项目分布</el-menu-item>
                    <el-menu-item>收支统计</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </div>
        <div class="right">
          <!-- <Lemon></Lemon>-->
          <!-- <UserList></UserList> -->
          <router-view></router-view>
        </div>
      </el-main>
      <el-footer class="footer">备案号：鄂ICP备18001612号</el-footer>
    </el-container>
  </div>
</template>
           
// <script>
// import Lemon from '@/components/Lemon.vue'
// import UserList from '@/components/UserList.vue'
export default {
  data() {
    return {

    }
  },
  // components: {
  //   Lemon,
  //   UserList,
  // },
  methods: {
    // 左侧菜单
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style lang='less' scoped>
.home {
  height: 100%;
  .home-container {
    height: 100%;
    .header {
      height: 60px;
      background-image: url("../assets/blue.png");
      color: #fff;
      line-height: 60px;
      .logo-container {
        line-height: 60px;
        min-width: 400px;
        float: left;
        .logo {
          height: 50px;
          width: 50px;
          margin-right: 5px;
          vertical-align: middle;
          display: inline-block;
        }
        .title {
          vertical-align: middle;
          font-size: 22px;
          font-family: cursive;
          letter-spacing: 3px;
        }
      }
      .userInfo {
        line-height: 60px;
        text-align: right;
        float: right;
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          vertical-align: middle;
          display: inline-block;
        }
        .welcome {
          display: inline-block;
          width: auto;
          vertical-align: middle;
          padding: 0 5px;
          .name {
            line-height: 20px;
            text-align: center;
            font-size: 14px;
          }
          .comename {
            font-size: 12px;
          }
          .avatarname {
            color: #a9d86e;
            font-weight: bolder;
          }
        }
      }
      .username {
        cursor: pointer;
        margin-right: 5px;
        .el-dropdown {
          color: #fff;
        }
      }
    }
    .main {
      height: calc(100% - 100px);
      padding: 0;
      .left {
        width: 200px;
        height: 100%;
        background-color: #324057;
        color: #fff;
        line-height: 200px;
        float: left;
        .menu-page {
          background-color: #324057;
        }
      }
      .right {
        margin-left: 200px;
        overflow-y: auto;
        // background-color: #fff;
        height: calc(100% - 40px);
      }
    }
    .footer {
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 14px;
      color: #fff;
      padding: 10px;
      background-color: #324057;
    }
  }
}
</style>