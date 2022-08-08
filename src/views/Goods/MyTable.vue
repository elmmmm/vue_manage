<template>
  <div class="my-table">
    <!--表格组件-->
    <el-table
      :data="tableData"
      ref="multipleTable" 
      size="medium"
      stripe
      border
      @select="selectionChange"
    >
      <el-table-column type="selection" width="40"></el-table-column>
      <!-- 多选框 -->
      <el-table-column
        show-overflow-tooltip
        align="center"
        v-for="item in tableColumn"
        :key="item.prop"
        :label="item.label"
        :width="item.width ? item.width : 100"
      >
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" min-width="130" align="center">
        <!-- 操作列 -->
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="goods-footer">
      <div style="margin-top: 6px">
        <el-button size="small" @click="deleteSelection">批量删除</el-button>
        <el-button size="small" @click="toggleSelection">取消选择</el-button>
      </div>
      <el-pagination
        class="pager"
        background
        layout="total, prev, pager, next"
        :total="pagerConfig.totol"
        :current-page.sync="pagerConfig.page"
        :page-size="7"
        @current-change="changePage"
      >
        <!-- 分页组件 -->
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyTable",
  props: {
    tableData: Array /*表格数据*/,
    tableColumn: Array /*列参数*/,
    pagerConfig: Object /*分页组件参数*/,
  },
  data() {
    return {
      selection: [],
    };
  },
  methods: {
    handleEdit(row) {
      this.$emit("edit", row);
    },
    handleDelete(row) {
      this.$emit("del", row);
    },
    changePage(page) {
      this.$emit("changePage", page);
    },
    //多选
    selectionChange(selection, row) {
      console.log(selection);
      this.selection = selection;
    },
    toggleSelection(){
      this.$refs.multipleTable.clearSelection()
    },
    deleteSelection(){
      let ids = this.selection.map( (item, index, array) => {return item.id})
      this.$parent.delGoods(ids)
    }
  },
};
</script>

<style lang="less" scoped>
.goods-footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  .pager {
    text-align: center;
    margin-top: 5px;
  }
}

</style>