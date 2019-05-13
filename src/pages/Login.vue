<template>
  <div class="login">
    <div class="title">登录管理系统</div>
    <div class="login-dialogue">
      <el-form ref="userForm"
               :model="userForm"
               label-width="0px"
               :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="userForm.username"
                    placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="userForm.password"
                    type="password"
                    placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item prop="validate">
          <el-input v-model="userForm.validate"
                    placeholder="验证码"
                    class="validate-code"></el-input>
          <!-- 验证码 -->
          <div class="code">
            <Identify></Identify>
            <!-- <s-identify :identifyCode="identifyCode"></s-identify> -->
          </div>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary">登录</el-button>
        </div>
        <p class="register"
           @click="handleRegister">注册</p>
      </el-form>
    </div>
  </div>
</template>
           
<script>
import Identify from '@/pages/Identify.vue'
export default {
  components: {
    Identify,
  },
  data() {
    return {
      userForm: {},
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        validate: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleRegister() {
      this.$router.push('/register')
    }
  },
}
</script>
<style lang='less' scoped>
.login {
  width: 100%;
  height: 100%;
  background: #324157;
  position: relative;
  .title {
    width: 100%;
    margin-top: -230px;
    text-align: center;
    font-size: 30px;
    color: #fff;
    position: absolute;
    top: 50%;
  }
  .login-dialogue {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 380px;
    height: 320px;
    margin: -150px 0 0 -190px;
    padding: 40px;
    border-radius: 5px;
    background: #fff;
    .code {
      width: 112px;
      height: 35px;
      border: 1px solid #ccc;
      float: right;
      border-radius: 2px;
    }
    .validate-code {
      width: 136px;
      float: left;
    }
    .login-btn {
      text-align: center;
      .el-button {
        width: 100%;
        height: 36px;
      }
    }
    .register {
      font-size: 14px;
      line-height: 30px;
      color: #999;
      cursor: pointer;
      float: right;
    }
  }
}
</style>