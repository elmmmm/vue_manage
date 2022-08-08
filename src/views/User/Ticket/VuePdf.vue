<template>
  <el-dialog
    title="我的合同"
    :visible.sync="dialogVisible"
    width="50%"
  >
    <!-- pdf
        属性 
        src: 文件的路径
        page：显示的页码，从1开始
        事件：
        @num-pages="pageCount=$event"  获取文件总页数
        @page-loaded="currentPage=$event" 当前页面被加载，获取当前页码
        方法：
        print(dpi, pageList)
         -->
    <hr />
    <div class="header">
      <div class="leftBtn">
        <el-button @click="prePage" :disabled="preBtn">上一页</el-button>
        <el-button @click="nextPage" :disabled="nextBtn">下一页</el-button>
      </div>
      <el-button @click="print">打印</el-button>
    </div>
    <hr />
    <p>{{ currentPage }} / {{ pageCount }}</p>
    <pdf
      :src="pdfSrc"
      ref="myPdf"
      :page="page"
      @num-pages="pageCount = $event"
      @page-loaded="currentPage = $event"
    ></pdf>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="dialogVisible = false">取 消</el-button>
    </span>
  </el-dialog>
</template>

<script>
// 引入vue-pdf库，使用pdf组件
import pdf from "vue-pdf";
export default {
  components: {
    pdf,
  },
  data() {
    return {
      dialogVisible: false,
      pdfSrc: "./static/LaborContract.pdf",
      page: 1,
      pageCount: 0,
      currentPage: 1,
      preBtn: true,
      nextBtn: false,
    };
  },

  methods: {
    
    prePage() {
      if (this.currentPage > 1 && this.currentPage <= this.pageCount) {
        this.preBtn = false;
        this.nextBtn = false;
        this.page--;
        if (this.currentPage == 2) {
          this.preBtn = true;
        }
      }
    },
    nextPage() {
      if (this.currentPage > 0 && this.currentPage < this.pageCount) {
        this.preBtn = false;
        this.nextBtn = false;
        this.page++;
        if (this.currentPage == this.pageCount - 1) {
          this.nextBtn = true;
        }
      }
    },
    print() {
      this.$refs.myPdf.print();
    },
  },
};
</script>

<style>
.header{
    display: flex;
    justify-content: space-between;
}
</style>