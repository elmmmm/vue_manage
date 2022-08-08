<template>
    <div style="text-align:center; margin:5px 10px 0px">
        <el-pagination
        background
        small
        layout="total, prev, pager, next"
        :current-page.sync="config.curpage"
        :total="config.total"
        :page-size="15"
        @current-change="changePage"
        >
        </el-pagination>
    </div>
</template>

<script>
export default {
    name:'MyPagination',
    props:{
        config:{
            type: Object,
            default:function(){
               return {
                    total:100,
                    curpage:1
               }
            }
        },
        
    },
    methods:{
        changePage(page){ //把当前页码交给父元素处理，让父元素切换页面
            this.$emit('changePage',page)
        }
    },
    data(){
        return{}
    }
}
</script>

<style>

</style>