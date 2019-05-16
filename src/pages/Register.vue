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
                            placeholder="选择日期"
                            style="width:100%;">
            </el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item prop="gender"
                      label="性别">
          <el-select v-model="value"
                     placeholder="请选择性别"
                     style="width:100%;">
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">确定</el-button>
          <el-button @click="cancleRegister">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
           
<script>
export default {
  data() {
    // 验证密码
    var validatePass = (rule, value, callback) => {
      // console.log(rule);
      if (!value) {
        callback(new Error('请输入密码'));
      } else {
        if (this.userForm.againpassword !== '') {
          this.$refs.userForm.validateField('againpassword');
        }
        callback();
      }
    };
    // 验证确认密码
    var validatePass2 = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.userForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    // 验证邮箱
    var emailReg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    var validateEmail = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入邮箱'));
      } else {
        if (!emailReg.test(this.userForm.email)) {
          callback(new Error('请输入正确的邮箱'));
        } else {
          callback();
        }
      }
    };
    // 验证手机号
    var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
    var validatePhone = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入手机号'));
      } else {
        if (!phoneReg.test(this.userForm.phone)) {
          callback(new Error('请输入正确的手机号'));
        } else {
          callback();
        }

      }
    };
    // 验证身份证号
    var cardReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    var validateCard = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入身份证号'));
      } else {
        if (!cardReg.test(this.userForm.idcard)) {
          callback(new Error('请输入正确的身份证号'));
        } else {
          callback();
        }

      }
    }
    return {
      userForm: {},
      value1: '',
      options: [{
        value: '选项1',
        label: '男'
      }, {
        value: '选项2',
        label: '女'
      }],
      value: '',
      rules: {
        username: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
        ],
        accountname: [
          { required: true, message: '请输入账号名称', trigger: 'blur' },
        ],
        password: [
          { validator: validatePass, trigger: 'blur' },
        ],
        againpassword: [
          { validator: validatePass2, trigger: 'blur' },
        ],
        email: [
          { validator: validateEmail, trigger: 'blur' },
        ],
        phone: [
          { validator: validatePhone, trigger: 'blur' },
        ],
        idcard: [
          { validator: validateCard, trigger: 'blur' },
        ],
        birthDay: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'blur' }
        ],
        gender: [{ required: true, message: '请选择性别', trigger: 'blur' },]
      }
    }
  },
  methods: {
    // 取消按钮
    cancleRegister() {
      this.$router.push('/login')
    }
  }
}
</script>
<style lang='less' scoped>
.register {
  line-height: 60px;
  text-align: center;
  .re-title {
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