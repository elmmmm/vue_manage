<template>
  <div id="app">
    <router-view></router-view>
    <!-- //页面内容加载渲染到这里 -->
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
html,
body {
  /* 去掉白边 */
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
}
</style>

