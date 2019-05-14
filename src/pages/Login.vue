<template>
  <div class="login">
    <div class="title">登录管理系统</div>
    <div class="login-dialogue">
      <el-form ref="userForm"
               :model="userForm"
               label-width="0px"
               :rules="rules">
        <el-form-item prop="userName">
          <el-input v-model="userForm.userName"
                    placeholder="账号"
                    autocomplete="on"></el-input>
        </el-form-item>
        <el-form-item prop="passWord">
          <el-input v-model="userForm.passWord"
                    type="password"
                    placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item prop="validate">
          <el-input v-model="userForm.validate"
                    placeholder="验证码"
                    class="validate-code"
                    @keydown.native.enter="loginBtn(userForm)"></el-input>
          <!-- 验证码 -->
          <div class="code"
               @click="refreshCode">
            <Identify :identifyCode="identifyCode"></Identify>
          </div>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary"
                     @click="loginBtn(userForm)">登录</el-button>
        </div>
        <p class="register"
           @click="handleRegister">注册</p>
      </el-form>
    </div>
  </div>
</template>
           
<script>
import Identify from '@/pages/Identify.vue'
import { checkLogin } from '@/api/api.js'
export default {
  components: {
    Identify,
  },
  data() {
    return {
      identifyCodes: "1234567890",
      identifyCode: "",
      userForm: {
        userName: '',
        passWord: '',
        validate: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入账号', trigger: 'blur' },
        ],
        passWord: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        validate: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    // 登录按钮
    loginBtn(userForm) {
      this.$refs.userForm.validate((valid) => {
        if (valid) {
          checkLogin(this.userForm).then(res => {
            console.log(res)
            // 请求成功后保存token值
            let token = localStorage.setItem('mytoken', res.token)
            if (res.code == 1) {
              this.$router.push({ name: 'Home' })
            } else {
              this.$message.warning(res.message)
            }
          })
        } else {
          console.log('校验不通过');
          return false;
        }
      })
    },
    // 注册按钮
    handleRegister() {
      this.$router.push('/register')
    },
    // 随机数
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    // 验证码
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      console.log(this.identifyCode);
    },
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