<template>
  <div class="header">
    <div class="l-content">
      <el-button
        @click="hadleMenu"
        plain
        icon="el-icon-menu"
        size="mini"
      ></el-button>
      <!-- 展开收起按钮 -->
    </div>
    <div class="r-content">
      <span class="greet"> 欢迎，{{ userinfo.user }} </span>
      <el-dropdown trigger="click" size="mini">
        <!-- 头像下拉 -->
        <span>
          <img class="user" :src="userImg" alt="" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="toPerson">个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  data() {
    return {
      userImg: require("../../assets/images/photo.jpg"), //头像路径
    }
  },
  computed:{
    ...mapState('login', ['userinfo'])
  },
  methods: {
    ...mapMutations('login', ['clearUser']),
    hadleMenu(){
      this.$emit('changeCollapse')
    },
    toPerson(){
      // 跳转个人信息页
      this.$router.push({name: 'UserInfo'})
    },
    logOut(){
      // 退出登录
      // 清除vuex数据
      this.clearUser()
      // 清除本地存储
      localStorage.removeItem('user')
      // 跳转登录页
      this.$router.push('/login')
    }

  }
};
</script>

<style lang='less' scoped>
.header {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}

.r-content {
  display: flex;
  align-items: center;
  .greet{
    margin-right: 14px;
    font-size: 16px;
    color: #1C68AB;
  }
  .user {
    height: 40px;
    border-radius: 50%;
  }
}
</style>