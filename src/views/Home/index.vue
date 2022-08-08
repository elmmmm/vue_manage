// 主页
<template>
  <el-row class="home" :gutter="20">
    <el-col :span="9" style="margin-top: 7px">
      <el-card
        shadow="hover"
        style="height: 280px"
        :body-style="{ padding: '10px' }"
      >
        <!-- 轮播图 -->
        <my-carousel></my-carousel>
        <!-- 轮播图 -->
      </el-card>
      <el-card style="margin-top: 20px; height: 460px">
        <!-- 左边表格 -->
        <el-table :data="tableData">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="15" style="margin-top: 7px">
      <div class="num">
        <!-- 右边订单数量统计 -->
        <el-card
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display:'flex',padding:0}"
        >
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i>
          <div class="detail">
            <p class="num">￥{{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <!-- 右边图表展示 -->
      <el-card style="height: 280px">
        <my-echarts :chartData="echartData.order" style="height: 280px" />
      </el-card>
      <div class="graph">
        <el-card style="height: 260px">
          <my-echarts :chartData="echartData.user" style="height: 240px" />
        </el-card>
        <el-card style="height: 260px; padding: 10px" :body-style="{padding:0}">
          <my-echarts
            :chartData="echartData.pie"
            :isAxisChart="false"
            style="height: 240px"
          />
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import MyEcharts from "../../components/MyEcharts.vue";
import MyCarousel from "../../components/MyCarousel.vue";

export default {
  name: "Home",
  components: {
    MyEcharts,
    MyCarousel,
  },
  data() {
    return {
      datevalue: new Date(),
      tableData: [],
      tableLabel: {
        name: "品牌",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
      echartData: {
        order: {
          xData: [],
          series: [],
        },
        user: {
          xData: [],
          series: [],
        },
        pie: {
          series: [],
        },
      },
    };
  },

  mounted() {
    this.$http.getHomeDate().then((res) => {
      console.log("home  ", res);
      const { code, data } = res.data;
      if (code === 200) {
        this.tableData = data.tableData;
        const order = data.orderData;
        const xData = order.date; //X轴刻度标签-时间点
        const keyArray = Object.keys(order.data[0]); //品牌名-图例
        const series = [];
        keyArray.forEach((key) => {
          series.push({
            name: key,
            data: order.data.map((item) => item[key]),
            type: "line",
            smooth: true
          });
        });

        this.echartData.order.xData = xData;
        this.echartData.order.series = series;

        this.echartData.user.xData = data.userData.map((item) => item.date);
        this.echartData.user.series = [
          {
            name: "新增用户",
            data: data.userData.map((item) => item.new), //userData是一个对象数组
            type: "bar",
          },
          {
            name: "活跃用户",
            data: data.userData.map((item) => item.active), //userData是一个对象数组
            type: "bar",
          },
        ];

        this.echartData.pie.series = [
          {
            type: "pie",
            data: data.pieData,
          },
        ];
      }
    });
  },
};
</script>

<style lang="less" scoped>
.home{
  .num{
    .el-card{
      border: none;
    }
  }
}
</style>