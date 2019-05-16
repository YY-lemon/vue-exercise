<template>
  <div class="infoModify">
    <div class="header">
      <span class="icons">
        <i class="el-icon-s-unfold"></i>
      </span>
      <el-breadcrumb separator="/"
                     class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">信息管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>修改信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="form_container">
      <el-row class="info_row"
              :gutter="10">
        <el-col :span="8">
          <div class="area">
            <p class="title"><i class="el-icon-edit"></i>修改信息</p>
            <el-form class="form"
                     ref="userForm"
                     :model="userForm"
                     :rules="infoRules"
                     label-width="80px">
              <el-form-item label="姓名">
                <el-input v-model="userForm.name"
                          size="mini"
                          disabled></el-input>
              </el-form-item>
              <el-form-item label="昵称"
                            prop="nickname">
                <el-input v-model="userForm.nickname"
                          placeholder="请输入昵称"
                          size="mini"></el-input>
              </el-form-item>
              <el-form-item label="投资年限"
                            prop="inventYear">
                <el-select v-model="userForm.inventYear"
                           placeholder="请选择投资年限"
                           size="mini">
                  <el-option label="1年"
                             value="1"></el-option>
                  <el-option label="2年"
                             value="2"></el-option>
                  <el-option label="3年"
                             value="3"></el-option>
                  <el-option label="4年"
                             value="4"></el-option>
                  <el-option label="5年"
                             value="5"></el-option>
                  <el-option label="6年"
                             value="6"></el-option>
                  <el-option label="7年"
                             value="7"></el-option>
                  <el-option label="8年"
                             value="8"></el-option>
                  <el-option label="9年"
                             value="9"></el-option>
                  <el-option label="10年"
                             value="10"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="绑定邮箱"
                            prop="email">
                <el-input v-model="userForm.email"
                          placeholder="请输入绑定邮箱"
                          size="mini"></el-input>
              </el-form-item>
              <el-form-item label="绑定手机"
                            prop="phone">
                <el-input v-model="userForm.phone"
                          placeholder="请输入绑定手机"
                          size="mini"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary"
                           size="small"
                           @click="submitForm('userForm')">提交</el-button>
                <el-button size="small"
                           @click="resetForm('userForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="area">
            <p class="title"><i class="el-icon-edit"></i>修改密码</p>
            <el-form class="form"
                     ref="pwdForm"
                     :model="pwdForm"
                     :rules="pwdRules"
                     label-width="90px">
              <el-form-item label="原密码"
                            prop="oldPass">
                <el-input v-model="pwdForm.oldPass"
                          size="mini"
                          type="password"
                          placeholder="请输入原密码"></el-input>
              </el-form-item>
              <el-form-item label="新密码"
                            prop="newPass">
                <el-input v-model="pwdForm.newPass"
                          placeholder="请输入新密码"
                          type="password"
                          size="mini"></el-input>
              </el-form-item>
              <el-form-item label="确认新密码"
                            prop="checkPass">
                <el-input v-model="pwdForm.checkPass"
                          placeholder="请输入确认新密码"
                          type="password"
                          size="mini"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary"
                           size="small"
                           @click="submitForm('pwdForm')">提交</el-button>
                <el-button size="small"
                           @click="resetForm('pwdForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="area">
            <p class="title"><i class="el-icon-edit"></i>手机服务</p>
            <el-form class="form"
                     ref="phoneForm"
                     :model="phoneForm"
                     :rules="phoneRules"
                     label-width="110px">
              <el-form-item label="当前绑定手机"
                            prop="telephone">
                <el-input v-model="phoneForm.telephone"
                          size="mini"
                          placeholder="请输入当前绑定手机"></el-input>
              </el-form-item>
              <el-form-item label="基础短信服务"
                            prop="baseServer">
                <el-checkbox-group v-model="phoneForm.baseServer">
                  <el-checkbox label="网站密码找回"></el-checkbox>
                  <el-checkbox label="提现申请短信验证"></el-checkbox>
                  <el-checkbox label="提现申请提醒"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="可选短信服务"
                            prop="chooseServer">
                <el-checkbox-group v-model="phoneForm.chooseServer">
                  <el-checkbox label="投标通知"></el-checkbox>
                  <el-checkbox label="满标/流标/撤销通知"></el-checkbox>
                  <el-checkbox label="回款通知"></el-checkbox>
                  <el-checkbox label="本息保障通知"></el-checkbox>
                  <el-checkbox label="优质标提醒通知"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item>
                <el-button type="primary"
                           size="small"
                           @click="submitForm('phoneForm')">提交</el-button>
                <el-button size="small"
                           @click="resetForm('phoneForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
           
<script>
export default {
  data() {
    // 验证邮箱
    var emailReg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    var validateEmail = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入邮箱'));
      } else {
        if (!emailReg.test(value)) {
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
        if (!phoneReg.test(value)) {
          callback(new Error('请输入正确的手机号'));
        } else {
          callback();
        }

      }
    };
    // 验证密码
    var validateNewPwd = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入密码'));
      } else {
        if (this.pwdForm.checkPass !== '') {
          this.$refs.pwdForm.validateField('checkPass');
        }
        callback();
      }
    };
    // 验证确认密码
    var validateCheckPass = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.pwdForm.newPass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      userForm: {
        name: '',
        nickname: '',
        inventYear: '',
        email: '',
        phone: ''
      },
      pwdForm: {
        oldPass: '',
        newPass: '',
        checkPass: ''
      },
      phoneForm: {
        telephone: '',
        baseServer: [],
        chooseServer: []
      },
      infoRules: {
        nickname: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        inventYear: [
          { required: true, message: '请选择投资年限', trigger: 'blur' }
        ],
        email: [
          { required: true, validator: validateEmail, trigger: 'blur' }
        ],
        phone: [
          { required: true, validator: validatePhone, trigger: 'blur' }
        ]
      },
      pwdRules: {
        oldPass: [
          { required: true, message: '请输入原密码', trigger: 'blur' }
        ],
        newPass: [
          { required: true, validator: validateNewPwd, trigger: 'blur' }
        ],
        checkPass: [
          { required: true, validator: validateCheckPass, trigger: 'blur' }
        ]
      },
      phoneRules: {
        telephone: [
          { required: true, validator: validatePhone, trigger: 'blur' }
        ],
        baseServer: [
          { type: 'array', required: true, message: '请至少选择一个基础短信服务', trigger: 'change' }
        ],
        chooseServer: [
          { type: 'array', required: true, message: '请至少选择一个可选择短信服务', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    // 提交
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    // 重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
<style lang='less' scoped>
.infoModify {
  .header {
    width: 100%;
    background-color: #eff2f7;
    margin-bottom: 5px;
    .icons {
      margin: 0 10px;
      cursor: pointer;
      line-height: 30px;
      float: left;
    }
    .breadcrumb {
      height: 30px;
      line-height: 30px;
    }
  }
  .form_container {
    padding: 10px;
    // margin: 0 5px;
    .info_row {
      // margin: 0 10px;
      .area {
        height: 100%;
        border: 1px solid #dfdfdf;
        font-size: 14px;
        padding: 10px;
        .title {
          width: 100%;
          height: 30px;
          line-height: 30px;
          text-align: center;
          background-color: #3bc5ff;
          border: 1px solid #3bc5ff;
          color: white;
        }
        .form {
          width: 90%;
          margin-top: 20px;
          .el-form-item {
            margin-top: 15px;
          }
        }
      }
    }
  }
}
</style>