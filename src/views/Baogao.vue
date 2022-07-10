<template>
  <div style="height: 650px; overflow: auto; width: 100%">
    <pre style="text-align: center; font-size: 40px">
           《通信软件开发与应用》课程结业报告          </pre
    >
    <pre style="font-size: 25px;text-align: right" >632007060220
        王绍辉
    </pre>
    <pre style="font-size: 30px" >1.系统简介</pre>
    <pre style="font-size: 25px" >   系统使用的假数据接口是由Mock.js提供，通过模拟前后端分离项目的数据交互实现对学生的增删改查。使用的主要有mock.js中模拟接口和axios进行数据的处理
    </pre>
    <img src="../assets/tu1.png" style="position:relative; height:300px">
    <pre style="font-size:25px">   项目使用的是VUE2框架及其elementUi所搭建的前端学生信息管理系统

    </pre>
    <pre style="font-size: 30px" >2.开发过程</pre>
    <pre style="font-size: 25px">   首先搭建VUE需要有node.js作为前提，通过更改镜像为淘宝镜像后，执行cnpm命令后下载vue脚手架。在对应构建项目的根目录下使用VUE UI命令进入vue的可视化创建项目页面创建vue项目。
     项目编译之后需要下载mock,elementUi,axios插件，然后在main.js中引入相关的文件以便于之后调用。整个过程中主要需要将mock的接口搭建好，之后在相应的vue方法中进行axios请求完成相关的操作。
    </pre>
    <pre style="font-size: 30px" >3.遇到的问题及其解决</pre>
    <pre style="font-size: 25px">   整个过程中由于之前虽然写过vue界面，但是都是将vue作为辅佐工具，并且注重的是后端的数据处理以及接口的操作，所以在此次过程中并未能将页面做的详细。并且在操作分页功能的时候，由于第一次使用mock并未熟悉，所以进行相应的数据处理时会有困难。并且之前并未尝试部署静态网页到github中，在此处花费了一点时间。
     主要通过查看Mock.js官方文档以及github官网库的相关操作进行解决。
    </pre>
    <pre style="font-size: 30px" >4.总结</pre>
    <pre style="font-size: 25px">   通过此次纯前端的大作业以及web课程学习，我发现前端相对于后端来说如果需要做得更好，前端会想对困难许多，样式的修改是及其复杂的。并且如今前端框架的渐渐完善才能让我们更方便的书写前端页面。
     并且通过这次的作业，我还发现了前端中已经出现了许多像mock,express这些能够在前端中完成后端操作的工具。说明前端已经在渐渐的将后端的某些功能融入到了其中。
     在Vue中，前端进行表单校验和信息的拦截时十分方便的，在后端却需要配置大量的类来进行拦截。前端的拦截操作相对来说非常的方便。
    </pre>
  </div>
</template>
<script>
</script>
<style>
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>