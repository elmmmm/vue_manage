<template>
  <div class="search">
    <el-button type="primary" size="medium" round @click="addHandle"
      >+ 新增</el-button
    >
    <div class="right">
      <el-input
        size="medium"
        prefix-icon="el-icon-search"
        clearable
        v-model="val"
        placeholder="请输入卖家姓名"
        @clear="clear"
      ></el-input>
      <el-button
        type="primary"
        icon="el-icon-search"
        size="medium"
        plain
        @click="search"
        >查询</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    keyword: {
      type: String,
    },
  },
  data() {
    return {
      val: this.keyword,
    };
  },
  methods: {
    search() {
      console.log(this.$parent);
      this.$parent.keyword = this.val;
      this.$parent.getOrder();
    },
    clear() {
      this.$parent.keyword = "";
      this.$parent.getOrder();
    },
    addHandle() {
      this.$emit("addOrder");
    },
  },
};
</script>

<style lang="less" scoped>
.search {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  .right {
    display: flex;
    button {
      margin-left: 10px;
    }
  }
}
</style>
    