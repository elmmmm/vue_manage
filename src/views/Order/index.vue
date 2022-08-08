<template>
  <div>
    <my-banner :keyword="keyword" @addOrder="addOrder"></my-banner>
    <my-table
      :tableData="tableData"
      :tableColumn="tableColumn"
      :pagerConfig="pagerConfig"
      @changePage="getOrder"
      @edit="editOrder"
      @del="delOrder"
    ></my-table>
    <!-- 弹框组件 -->
    <order-dialog
      ref="orderdialog"
      :title="title"
      :rowData="rowData"
    ></order-dialog>
  </div>
</template>

<script>
import MyTable from "./MyTable.vue"
import MyBanner from "./MyBanner.vue"
import OrderDialog from "./OrderDialog.vue"

export default {
  name:"Order",
  components: {
    MyTable,
    MyBanner,
    OrderDialog
  },
  data() {
    return {
      keyword: "",
      tableData: [],
      tableColumn: [
        {
          prop: "id",
          label: "订单号",
          width: 120,
        },
        {
          prop: "goods",
          label: "商品名称",
          width: 130,
        },
        {
          prop: "name",
          label: "买家姓名",
          width: 80,
        },
        {
          prop: "nickname",
          label: "买家ID",
          width: 110,
        },
        {
          prop: "email",
          label: "买家邮箱",
          width: 100,
        },
        {
          prop: "address",
          label: "收货地址",
          width: 110,
        },
        {
          prop: "time",
          label: "时间",
          width: 110,
        },
        {
          prop: "status",
          label: "订单状态",
          width: 80,
        },
      ],
      pagerConfig: {
        page: 1,
        totol: 30,
      },
      title: "添加订单",
      rowData: {}, //表格当前行的数据对象
    };
  },

  methods: {
    getOrder(pagenum) {
      if (!pagenum) {
        pagenum = 1; //默认请求第一页
        this.pagerConfig.page=1
      }
      this.$http
        .getOrderList({
          pagenum: pagenum,
          keyword: this.keyword,
        })
        .then((res) => {
          if (res.status == 200) {
            const { count, goodslist } = res.data;
            this.pagerConfig.totol = count;
            this.tableData = goodslist;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    addOrder(){
      //修改子组件实例的数据
      this.$refs.orderdialog.dialogVisible = true
      this.title = "添加订单";
    },

    editOrder(row) {
      this.$refs.orderdialog.dialogVisible = true;
      this.title = "编辑订单"
      this.rowData = {...row}   //解构重新生成新对象-防止watch属性检测不到
    },

    delOrder(param) {
      if(!Array.isArray(param)){
        param = [param.id]
      }
      //从数据中删除某一个数据
      this.$confirm("确认永久删除商品的数据？", "警告", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        // const id = row.id;
        this.$http.delOrder({
            idArr: param,
          })
          .then((res) => {
            if (res.data.code == 200) {
              this.$message({
                type: "success",
                message: "删除成功",
              });
              this.getOrder(this.pagerConfig.page) //重新刷新列表
            }
          })
          .catch((err) => {
            console.log(err);
          });
      });
    },
    
  },

  created() {
    this.getOrder();
  },
};
</script>

<style>
</style>