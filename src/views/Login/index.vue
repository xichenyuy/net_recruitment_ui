// 登录页面
<template>
  <div class="login-wrapper">
    <div id="background">
      <img src="/src/assets/团学logo.png" alt="">
    </div>
    <!-- 登录框 -->
    <div class="modal" style="background-color: #08070761;z-index:500">
      <el-form ref="userForm" :model="user" status-icon :rules="rules">
        <div class="title">团委学生会招新系统</div>
        <el-form-item prop="username">
          <div class="input-group">
            <span class="label">账号</span>
            <el-input
              type="text"
              prefix-icon="el-icon-user"
              v-model="user.username"
            />
          </div>
          <div class="error-message">{{ rules.username[0].message }}</div>
        </el-form-item>
        <el-form-item prop="password">
          <div class="input-group">
            <span class="label">密码</span>
            <el-input
              type="password"
              prefix-icon="el-icon-view"
              v-model="user.password"
            />
          </div>
          <div class="error-message">{{ rules.password[0].message }}</div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn-login" @click="login" style="height: 50px;">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    login() {
      this.$refs.userForm.validate((valid) => {
        if (valid) {
          this.$api.login(this.user).then((res) => {
            if (res && res.userinfo) {
              this.$message.success('登陆成功');
              this.$store.commit("saveUserInfo", res.userinfo);
              this.$router.push("/welcome");
            } else {
              this.$message.error("登陆失败");
            }
          }).catch((error) => {
            this.$message.error("登陆失败，请重试");
            console.error("Login error:", error);
          });
        }
      });
    },
    goHome() {
      this.$router.push("/welcome");
    },
  },
};
</script>

<style lang="scss">
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  .el-input__inner {
    height: 50px;
    line-height: 50px;
    width: 340px;
  }
  .el-input__icon {
    line-height: 50px;
  }
  .modal {
    width: 700px;
    padding: 100px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 17px 26px 5px #0c0d0e4d;
    .title {
      font-size: 50px;
      line-height: 1.5;
      text-align: center;
      color: #fff;
      margin-bottom: 30px;
    }
    .btn-login {
      width: 100%;
    }
    .input-group {
      display: flex;
      align-items: center;
      margin-left: 10px; /* 调整标签和文本框的右移位置 */
      .label {
        width: 60px;
        text-align: right;
        margin-right: 10px;
        color: #fff;
        font-size: 18px;
      }
    }
    .error-message {
      margin-left: 70px; /* 调整错误信息的右移位置 */
      color: red;
      font-size: 14px;
      margin-top: 5px;
    }
  }
}
#background {
  background-position: center;
  height: 300px;
  width: 500px;
  background-size: cover;
  position: fixed;
}
</style>
