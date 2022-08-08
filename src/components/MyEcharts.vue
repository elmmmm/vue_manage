<template>
    <div ref="echart"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    data(){
        return{
            //有坐标轴的图表对应的配置对象
            axisOption:{
                legend: {
                    // 图例文字颜色
                    textStyle: {
                        color: "#333",
                    },
                },
                grid: {
                    left: "14%",
                    // left: '3%',
                    // right: '4%',
                    bottom: '19%',
                    // containLabel: true
                },
                // 提示框
                tooltip: {
                    trigger: "axis",
                },
                xAxis: {
                    type: "category", // 类目轴
                    data: [],
                    axisLine: {
                        lineStyle: {
                        color: "#f9546d",
                        },
                    },
                    axisLabel: {
                        interval: 0,
                        color: "#333",
                    },
                },
                yAxis: [
                    {
                        type: "value",
                        axisLine: {
                            lineStyle: {
                                color: "#f9546d",
                            },
                        },
                    },
                ],
                color: ["#fb5e6b","#2ec7c9", "#5ab1ef", "#ffb980", "#d87a80", "#8d98b3"],
                series: [],
            },
            //没有坐标轴的图表（如饼图）对应的配置对象
            normalOption:{
                tooltip: {
                    trigger: "item",
                },
                color: [
                    "#0f78f4",
                    "#dd536b",
                    "#9462e5",
                    "#a6a6a6",
                    "#e1bb22",
                    "#39c362",
                    "#3ed1cf",
                ],
                series: [],
            },
            echart: null
        }
    },

    props: {
        isAxisChart: {
            type: Boolean,
            default: true
        },
        chartData: {
            type: Object,
            default(){
                return {
                    xData: [],
                    series:[]
                }
            }
        }
    },
    watch: {
        chartData: {
            handler: function(){
                this.initChart()
            },
            deep: true
        }
    },
    computed: {
        options(){
            return this.isAxisChart ? this.axisOption : this.normalOption
        }
    },
    methods: {
        initChart(){
            this.initChartData()
            if(this.echart){//图表已经渲染，不需要再次创建
                this.echart.setOption(this.options)
            }else{
                this.echart = echarts.init(this.$refs.echart) //创建echarts实例
                this.echart.setOption(this.options)
            }
        },
        initChartData(){
            if(this.isAxisChart){ //画有xy轴的两个图
                this.axisOption.xAxis.data = this.chartData.xData
                this.axisOption.series = this.chartData.series
            }else{//画饼状图
                this.normalOption.series = this.chartData.series
            }
        }
    },
}
</script>
