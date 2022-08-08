<template>
  <!-- el-menu: router 启用vue-router模式会在激活导航时，以 index 作为 path 进行路由跳转 -->
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    text-color="#fff"
    background-color="#545c64"
    active-text-color="#ffd04b"
    router
    :collapse="isCollapse"
    unique-opened
  >
    <h3>{{ isCollapse ? '风植' : '风植后台管理系统' }}</h3>
    <el-menu-item index="/home" @click="clickMenu({name:'Home',label:'首页'})">
      <i class="el-icon-s-home"></i>
      <span slot="title">首页</span>
      <!-- <span slot="title">{{ $t("menu.home") }}</span> -->
    </el-menu-item>
    <el-menu-item index="/goods" @click="clickMenu({name:'Goods',label:'商品管理'})">
      <i class="el-icon-s-goods"></i>
      <span slot="title">商品管理</span>
      <!-- <span slot="title">{{ $t("menu.home") }}</span> -->
    </el-menu-item>
    <el-menu-item index="/order" @click="clickMenu({name:'Order',label:'订单管理'})">
      <i class="el-icon-s-order"></i>
      <span slot="title">订单管理</span>
    </el-menu-item>

    <el-submenu index="/user" @click="clickMenu({name:'User',label:'个人中心'})">
      <template slot="title">
        <i class="el-icon-user-solid"></i>
        <span slot="title">个人中心</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/user/userinfo" @click="clickMenu({name:'UserInfo',label:'我的信息'})">
          <i class="el-icon-info"></i>
          <span slot="title">我的信息</span>
        </el-menu-item>
        <el-menu-item index="/user/ticket" @click="clickMenu({name:'Ticket',label:'我的票据'})">
          <i class="el-icon-star-on"></i>
          <span slot="title">我的票据</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  props: ['isCollapse'],
  data() {
    return {
      
    };
  },
  methods: {
    clickMenu(item){
      this.$store.commit('tag/selectMenu', item)  //模块tag
    }
  }
};
</script>

<style lang='less' scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {//展开状态下的样式
  width: 200px;
  min-height: 300px;
}

.el-menu {
  height: 100%;
  border: none;
  h3 {
    color: white;
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
}
</style>