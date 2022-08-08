<template>
  <div>
    <el-button @click="look" type="primary" style="margin-bottom:7px">查看合同</el-button>
    <vue-pdf ref="myPdf"></vue-pdf>
    <!-- 发票组件 -->
    <my-ticket></my-ticket>
    <!-- 表格 -->
    <div class="table">
      <div class="header">
        <span class="title">今日流水</span>
        <el-button @click="exportData" size='small'>导出表格</el-button>
      </div>
      <el-table border :data="tableData" size="medium" style="width: 100%">
        <el-table-column prop="date" label="时间" width="170" align="center">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="110" align="center">
        </el-table-column>
        <el-table-column prop="category" label="分类" width="120">
        </el-table-column>
        <el-table-column prop="cost" label="金额" width="120">
        </el-table-column>
        <el-table-column prop="payway" label="支付方式" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地点" > </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import VuePdf from './VuePdf.vue'
import MyTicket from "./MyTicket.vue"
import { export2Excel } from "../../../excel/util"
export default {
  name:"Ticket",
  components: {
    VuePdf,
    MyTicket
  },
  data(){
    return {
      columns: [//定义表头
        { title: "时间", key: "date" },
        { title: "姓名", key: "name" },
        { title: "分类", key: "category" },
        { title: "金额", key: "cost" },
        { title: "支付方式", key: "payway" },
        { title: "地点", key: "address" },
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          category: "餐饮",
          cost: 20,
          payway: '微信支付',
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
    }
  },
  methods: {
    look: function(){
      this.$refs.myPdf.dialogVisible = true
    },
    // 导出表格
    exportData(){
      export2Excel(this.columns, this.tableData, '今日流水')
    }
  },
  mounted(){
    this.$http.getUserData()
    .then( (res) => {
      const {code, costlist} = res.data
      if(code == 200){
        this.tableData = costlist
      }
    })
  }
};
</script>

<style lang="less" scoped>
.header{
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 7px;
    .title{
        flex: 1;
        color: #333;
        font-weight: bold;
        line-height: 1.5;
    }
}
</style>