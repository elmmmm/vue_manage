<template>
  <div>
    <my-banner :keyword="keyword" @addGoods="addGoods"></my-banner>
    <my-table
      :tableData="tableData"
      :tableColumn="tableColumn"
      :pagerConfig="pagerConfig"
      @changePage="getGoods"
      @edit="editGoods"
      @del="delGoods"
    ></my-table>
    <!-- 弹框组件 -->
    <goods-dialog
      ref="dialog"
      :title="title"
      :rowData="rowData"
    ></goods-dialog>
  </div>
</template>

<script>
import MyTable from "./MyTable.vue"
import MyBanner from "./MyBanner.vue"
import GoodsDialog from "./GoodsDialog.vue"

export default {
  components: {
    MyTable,
    MyBanner,
    GoodsDialog
  },
  data() {
    return {
      keyword: "",
      tableData: [],
      tableColumn: [
        {
          prop: "id",
          label: "商品ID",
          width: 70,
        },
        {
          prop: "name",
          label: "品名",
          width: 140,
        },
        {
          prop: "price",
          label: "价格",
          width: 70,
        },
        {
          prop: "num",
          label: "库存数量",
          width: 80,
        },
        {
          prop: "brand",
          label: "品牌",
        },
        {
          prop: "image",
          label: "图片",
          width: 120,
        },
        {
          prop: "sellPoint",
          label: "卖点",
          width: 130,
        },
        {
          prop: "descp",
          label: "标题描述",
          width: 120,
        },
      ],
      pagerConfig: {
        page: 1,
        totol: 30,
      },
      title: "添加商品",
      rowData: {}, //表格当前行的数据对象
    };
  },

  methods: {
    getGoods(pagenum) {
      if (!pagenum) {
        pagenum = 1; //默认请求第一页
        this.pagerConfig.page=1
      }
      this.$http
        .getGoodsList({
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

    addGoods(){
      //修改子组件实例的数据
      this.$refs.dialog.dialogVisible = true
      this.title = "添加商品"
    },

    editGoods(row) {
      //编辑商品信息：1、显示对话框 2、显示当前条目数据
      this.$refs.dialog.dialogVisible = true
      this.title = "编辑商品"
      this.rowData = {...row}   //解构重新生成新对象-防止watch属性检测不到
    },

    delGoods(param) {
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
        this.$http.delGoods({
            idArr: param,
          })
          .then((res) => {
            if (res.data.code == 200) {
              this.$message({
                type: "success",
                message: "删除成功",
              });
              this.getGoods(this.pagerConfig.page) //重新刷新列表
            }
          })
          .catch((err) => {
            console.log(err);
          });
      });
    },
    
  },

  created() {
    this.getGoods();
  },
};
</script>

<style>
</style>