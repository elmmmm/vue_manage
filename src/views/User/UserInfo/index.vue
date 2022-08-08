<template>
  <el-row :gutter="20" class="person">
    <el-col :span="14">
      <el-card shadow="hover">
        <!-- 个人信息 -->
        <div class="user">
          <div class="profile">
            <el-avatar :src="userImg" :size="120" fit="fill"></el-avatar>
            <p class="name">Admin</p>
          </div>
          <div class="user-info">
            <el-descriptions class="margin-top" title="个人信息" :column="2">
              <el-descriptions-item label="姓名">风植</el-descriptions-item>
              <el-descriptions-item label="工号">007</el-descriptions-item>
              <el-descriptions-item label="手机号"
                >18100010002</el-descriptions-item
              >
              <el-descriptions-item label="等级"
                >超级管理员</el-descriptions-item
              >
              <el-descriptions-item label="工龄">1年</el-descriptions-item>
              <el-descriptions-item label="地址">武汉市</el-descriptions-item>
            </el-descriptions>
          </div>
        </div>
      </el-card>
      <el-card style="margin-top: 6px" :body-style="{ padding: '10px' }">
        <my-echarts :chartData="weatherData" style="height: 220px" />
        <p style="text-align: center; font-size: 16px; margin-top: 5px">
          今天天气🎏{{ todayWea }}
        </p>
      </el-card>
    </el-col>
    <el-col :span="10">
      <el-card :body-style="{ padding: '5px' }">
        <div class="date">
          <el-calendar v-model="value" style="width: 100%"> </el-calendar>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import MyEcharts from "../../../components/MyEcharts.vue";
import * as echarts from "echarts/core";
import axios from 'axios'
export default {
  name: "UserInfo",
  components: { MyEcharts },
  data() {
    return {
      value: new Date(),
      userImg: require("../../../assets/images/photo.jpg"),
      todayWea: "晴",
      weatherData: {
        //天气预报数据
        xData: [],
        series: [],
      },
      defaultWeaSeries: [
        {
          name: "温度",
          type: "line",
          stack: "Total",
          smooth: true,
          lineStyle: {
            width: 0,
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(255, 191, 0)",
              },
              {
                offset: 1,
                color: "rgb(224, 62, 76)",
              },
            ]),
          },
          emphasis: {
            focus: "series",
          },
          data: [30, 34, 37, 28, 30, 33, 38],
        },
      ],
    };
  },

  mounted() {
    console.log("获取天气");
    axios.get('https://yiketianqi.com/api',{
            params:{appid:'85841439',
                    appsecret:'EKCDLT4I',
                    city:'武汉'}
        }).then((res) => {
            console.log(res)
            if(res.status === 200 && res.data.errcode !== 100){
                console.log('获取天气成功！')
                this.todayWea = res.data.data[0].wea
                //解析7天预报数据
                let days = res.data.data.map((item) => {
                    return item.day.match(/[0-9]+日/)
                }) //day:"22日（星期五）"
                let temps = res.data.data.map(item => parseFloat(item.tem)) //tem的数据不是数值(26°C)
                this.weatherData.xData = days
                console.log('temps:',temps)
                this.defaultWeaSeries.data = temps
                this.weatherData.series = this.defaultWeaSeries
            }else{
                  console.log('天气api出错！')
                  this.weatherData.xData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                  this.weatherData.series = this.defaultWeaSeries
            }
        }).catch((err) => {
            console.log("天气ApiErr: ",err);
        });
  },
};
</script>

<style lang="less" scoped>
.user {
  display: flex;
  align-items: center;
  .profile {
    padding-right: 5px;
    border-right: 1px solid #ccc;
    .name {
      font-size: 28px;
      margin-top: 6px;
      text-align: center;
    }
  }
  &-info {
    color: aqua;
    margin-left: 9px;
  }
}
.date /deep/ .el-calendar-table {
  .el-calendar-day {
    width: 50px;
    height: 50px;
  }
  thead {
    font-size: 14px;
  }
}
</style>
