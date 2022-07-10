<template>
    <el-menu
        :default-openeds="['1']"
        default-active="/admin"
        style="min-height: 100vh"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
      <div style="height: 60px; line-height: 60px; text-align: center">
        <img src="../assets/logo.png" alt="" style="width: 50px; position:relative; top: 5px right: 5px">
        <b style="color: white" v-show="logoTextShow">学生管理系统</b>
      </div>
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-user"></i>学生信息管理</template>
          <el-menu-item-group>
            <el-menu-item index="/admin">信息管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>报告查看</template>
          <el-menu-item-group>
            <el-menu-item index="/baogao">报告</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
</template>
<script>
export default {
    name:"Aside",
    props:{
        logoTextShow:Boolean
    }
}
</script>
<style>

</style>