<template>
  <div class="tabs">
    <el-tag
      v-for="(tag, index) in tags"
      :key="tag.name"
      :closable="tag.name !== 'Home'"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
      @click="changeMenu(tag)"
      @close="handleClose(tag, index)"
      size="small"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
// import {mapState, mapMutations} from "vuex"
export default {
  data(){
    return {
    }
  },
  computed: {
    tags(){
      return this.$store.state.tag.tagList
    }
  },
  methods: {
    changeMenu(item){
      this.$router.push({name: item.name})
    },
    handleClose(tag, index){
      const length = this.tags.length - 1
      this.$store.commit('tag/closeTag', tag)  //模块tag
      if(tag.name !== this.$route.name){
        //如果当前的路由和要删除的tag不相同，也就是要删除的不是当前页面的tag
        //那么路由无需切换、高亮不用变
        return
      }
      //当前路由与要移除的标签一致
      if(index === length){//如果要移除的是最右边的标签
        this.$router.push({
          name: this.tags[index-1].name
        })
      }else{
        //如果移除的是中间的tag，那么向相邻右侧的tag转移
        this.$router.push({
            name: this.tags[index].name
        })
      }
    }
  }


};
</script>

<style lang='less' scoped>
.tabs {
  padding: 10px 10px 10px;
  .el-tag {
    margin-right: 15px; /* 调整边距 */
    cursor: pointer; /* 鼠标进入标签变为小手样式 */
  }
}
</style>