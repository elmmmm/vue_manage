<template>
  <div class="search">
    <el-input
      size="medium"
      prefix-icon="el-icon-search"
      clearable
      v-model="val"
      placeholder="请输入品牌或型号"
      @clear="clear"
    ></el-input>
    <el-button
      type="primary"
      icon="el-icon-search"
      size="medium"
      @click="search"
      >查询</el-button
    >
    <el-button type="primary" size="medium" plain @click="addHandle"
      >添加</el-button
    >
  </div>
</template>

<script>
export default {
  props: {
    keyword:{
        type: String
    }
  },
  data(){
    return {
        val:this.keyword
    }
  },
  methods: {
    search() {
      console.log(this.$parent)
        this.$parent.keyword = this.val
        this.$parent.getGoods()
    },
    clear(){
        this.$parent.keyword = ""
        this.$parent.getGoods()
    },
    addHandle(){
        this.$emit("addGoods")
    }
  },
};
</script>

<style lang="less" scoped>
.search {
  display: flex;
  margin-bottom: 8px;
  button {
    margin-left: 10px;
  }
}
</style>
    