<template>
  <div class="register">
    <div class="re-title"><i class="el-icon-s-tools"></i>注册</div>
    <div class="userContent">
      <el-form ref="userForm"
               :model="userForm"
               label-width="80px"
               :rules="rules">
        <el-form-item prop="username"
                      label="用户名称">
          <el-input v-model="userForm.username"
                    placeholder="请输入用户名称"></el-input>
        </el-form-item>
        <el-form-item prop="accountname"
                      label="账号名称">
          <el-input v-model="userForm.accountname"
                    placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item prop="password"
                      label="密码">
          <el-input v-model="userForm.password"
                    type="password"
                    placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item prop="againpassword"
                      label="确认密码">
          <el-input v-model="userForm.againpassword"
                    type="password"
                    placeholder="请再次输入密码"></el-input>
        </el-form-item>
        <el-form-item prop="email"
                      label="邮箱">
          <el-input v-model="userForm.email"
                    placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="phone"
                      label="手机">
          <el-input v-model="userForm.phone"
                    placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="idcard"
                      label="身份证">
          <el-input v-model="userForm.idcard"
                    placeholder="请输入身份证号"></el-input>
        </el-form-item>
        <el-form-item prop="birthDay"
                      label="出生日期">
          <el-col :span="24">
            <el-date-picker v-model="value1"
                            type="date"
                            placeholder="选择日期">
            </el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item prop="gender"
                      label="性别">
          <el-input v-model="userForm.idcard"
                    placeholder="请输入身份证号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">确定</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
           
<script>
export default {
  data() {
    return {
      userForm: {},
      value1: ''
    }
  },
}
</script>
<style lang='less' scoped>
.register {
  line-height: 60px;
  text-align: center;
  .re-title {
    width: 60px;
    height: 60px;
    background-color: #324157;
    color: #fff;
    font-size: 16px;
    margin-bottom: 20px;
  }
  .userContent {
    width: 400px;
    margin: 0 auto;
  }
}
</style>