<template>
  <div class="back">
    <div
      style="
        margin: 200px auto;
        background-color: #fff;
        width: 350px;
        padding: 20px;
        border-radius: 10px;
      "
    >
      <div style="margin: 20px 0; text-align: center; font-size: 24px">
        <b>登 录</b>
      </div>
      <el-form
        :model="ruleForm"
        status-icon
        ref="ruleForm"
        label-width="80px"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="userPassword">
          <el-input
            prefix-icon="el-icon-lock"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item >
          <el-button
            type="primary"
            size="small"
            autocomplete="off"
            @click="login()"
            >登录</el-button
          >
          <a>直接登录即可</a>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>

export default {
  name: "Login",
  data() {
    
    return {
        
    };
  },
  methods: {
    login() {
        this.$router.push('/admin')
    },
  },
};
</script>
<style>
.back {
  height: 100vh;
  background-image: linear-gradient(to bottom right, #fc466b, #3f5efb);
  overflow: hidden;
}
</style>