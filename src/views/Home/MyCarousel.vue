<template>
    <div class="block">
    <el-carousel trigger="click" height="260px">
      <el-carousel-item v-for="item in pics" :key="item.url">
        <img :src="item.url" style="width:100%; height:auto;" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
    name:'MyCarousel',
    data(){
        return {
            pics:[
                { url:require('../../assets/images/vivo.jpg') },
                { url:require('../../assets/images/mix4.png') },
                { url:require('../../assets/images/iphone3.jpg') },
                { url:require('../../assets/images/oppo.jpg') },
            ]
        }
    }
}
</script>

<style>

</style>