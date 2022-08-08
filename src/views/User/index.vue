<template>
  <div>
    <keep-alive include="UserInfo,Ticket">   <!-- include指定组件间逗号不能有空格 -->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "User"
}
</script>

<style>

</style>