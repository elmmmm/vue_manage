<template>
  <div class="ticket">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="box-card" :body-style="{ padding: '12px' }">
          <div slot="header" class="clearfix">
            <!-- <span>卡片名称</span> -->
            <el-button @click="download" type="text">下载发票</el-button>
          </div>
          <div class="text item">
            <img ref="img" :src="imgUrl" alt="" />
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card" :body-style="{ padding: '12px' }">
          <div slot="header" class="clearfix">
            <el-button @click="down()" type="text">下载发票</el-button>
          </div>
          <div class="text item">
            <img :src="imgUrl" alt="" />
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card" :body-style="{ padding: '12px' }">
          <div slot="header" class="clearfix">
            <el-button @click="down()" type="text">下载发票</el-button>
          </div>
          <div class="text item">
            <img :src="imgUrl" alt="" />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import img from "../../../assets/images/ticket1.jpg";
export default {
  data() {
    return {
      imgUrl: img,
      // imgUrl: "https://dg-fd.zol-img.com.cn/t_s180x160/g7/M00/07/05/ChMkLGLWsCiIOP90AAA16gbthykAAFdEQImOpwAADYC154.jpg",
    };
  },
  methods: {
    download() {
      //方式1. 新窗口打开图片后另存为
      let url = this.$refs.img;
      window.open(url.src);
      // window.location.href = url.src
    },
    down() {
      //方式2. 直接在当前页下载图片(必须同源才能下载，否则会在当前窗口打开)
      var alink = document.createElement("a");
      alink.href = this.imgUrl;
      alink.download = "ticket"; //图片名
      alink.click();
    },
  },
};
</script>

<style lang="less" scoped>
.el-card {
  .el-button {
    float: right;
    padding: 3px 0;
  }
  img {
    width: 350px;
    height: 240px;
    object-fit: cover;
  }
}
</style>