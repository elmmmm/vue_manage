<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
      <my-menu :isCollapse="isCollapse"></my-menu>
    </el-aside>
    <el-container>
      <el-header>
        <my-header @changeCollapse="changeCollapse"></my-header>
      </el-header>
      <my-tag></my-tag>
      <el-main>
          <img class="layoutbg" v-if="$route.path=='/'" :src="svgUrl" alt="">
          <keep-alive include="User">
            <router-view></router-view>  <!-- 路由组件的展示占位 -->
          </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import MyMenu from "./MyMenu.vue";
import MyHeader from "./MyHeader.vue";
import MyTag from "./MyTag.vue";
export default {
  components: {
    MyMenu,
    MyHeader,
    MyTag,
  },
  data() {
    return {
      svgUrl: require('../../assets/layout_bg.svg'), //动态加载
      isCollapse: false,
    };
  },

  methods: {
    changeCollapse: function () {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #333;
}
.el-main {
  padding: 5px 15px 15px 15px;
  // background-image: url("../../assets/layout_bg.svg");
  // background-size: 100% 100%;
  // background-repeat: no-repeat;
  .layoutbg{
    height: 80%;
    display: block;
    margin: 1.125rem auto;
  }
}
</style>
