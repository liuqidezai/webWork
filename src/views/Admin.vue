<template>
  <div>
    <div>
      <el-button type="primary" @click="openAddUser"
        >新增<i class="el-icon-circle-plus-outline"></i
      ></el-button>
    </div>
    <el-table :data="tableData">
      <el-table-column prop="userId" label="学生编号"> </el-table-column>
      <el-table-column prop="userName" label="学生姓名"> </el-table-column>
      <el-table-column prop="userDept" label="学生专业"> </el-table-column>
      <el-table-column label="用户角色">
        <template #default="scope">
          <span v-if="scope.row.userRole === 0">男</span>
          <span v-if="scope.row.userRole === 1">女</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="success" @click="handleEdit(scope.row)">编辑</el-button>
          <el-popconfirm
            confirm-button-text="确定"
            cancel-button-text="取消"
            icon="el-icon-info"
            icon-color="red"
            title="确定删除此学生？"
            @confirm="deleteRow(scope.row.userId)"
          >
            <el-button size="mini" type="danger" slot="reference" style="margin-left:10px">删除</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <div style="padding: 10px 0">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="searchForm.page"
        :page-sizes="[2, 5, 10, 20]"
        :page-size="searchForm.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>

    <el-dialog
      title="增加/更新学生信息"
      :visible.sync="dialogFormVisible"
      width="30%"
    >
      <el-form :v-model="form"  label-width="80px">
        <el-form-item label="学生编号">
          <el-input v-model="form.userId" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="学生姓名">
          <el-input v-model="form.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="学生专业">
          <el-input v-model="form.userDept" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="学生性别">
          <el-select v-model="form.userRole" placeholder="请选择学生性别">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="Number(item.value)"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="save">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      tableData: [],
      total: 0,
      searchForm:{
        page:1,
        size:10,
      },
      userName: "",
      dialogFormVisible: false,
      form: {},
      options: [
        {
          value: "0",
          label: "男",
        },
        {
          value: "1",
          label: "女",
        },
      ],
      tableData:[],
    };
  },
  created() {
    this.load();
  },
  methods: {
    save(){
         axios.post('/api/score/add', this.form)
        .then(res => {
          console.log(res, 'res1')
          this.load()
          this.dialogFormVisible=false
          this.$message.success('更新成功')
        })
        .catch(err => {
          console.log(err)
        })
    },
    openAddUser() {
      this.dialogFormVisible = true;
      this.form = {};
    },
    handleEdit(row) {
      this.form = row;
      this.dialogFormVisible = true;
    },
    deleteRow(val) {
        axios.post('/api/score/delete', val)
        .then(res => {
          console.log(res, 'res1')
          this.load()
          this.$message.success('删除成功')
        })
        .catch(err => {
          console.log(err)
        })
    },
    handleSizeChange(pageSize) {
      this.searchForm.size = pageSize;
      this.load();
    },
    handleCurrentChange(pageNum) {
      this.searchForm.page = pageNum;
      this.load();
    },
    load(){
        axios.post('/api/pageList', this.searchForm)
        .then(res => {
          console.log(res, 'res')
          this.tableData = res.data.data.list
          this.total=res.data.data.total
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
};
</script>
<style>
</style>