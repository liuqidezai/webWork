<template>
  <div>
    <el-button @click="exit">退出登录</el-button>
  </div>
</template>
<script>
export default {
    name:"Header",
    data(){
      return{
       
      }
    },
    created(){
    },
    methods:{
      exit(){
        this.$router.push("/login")
      },
    }
};
</script>
<style>
</style>