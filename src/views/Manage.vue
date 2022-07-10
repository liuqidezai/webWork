<template>
  <el-container style="min-height: 100vh; border: 1px solid #eee">
    <el-aside
      width="200px"
      style="
        background-color: rgb(238, 241, 246);
        height: 100%;
        overflow: hidden;
      "
    >
      <Aside :logoTextShow="true"></Aside>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <Header></Header>
      </el-header>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Aside from "@/components/Aside.vue";
import Header from "@/components/Header.vue";

export default {
  name: "AdminManage",
  components: { Aside, Header },
};
</script>
<style>
.el-header {
  background-color: #409eff;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>