import Mock from "mockjs"

var List = Mock.mock({
    "array|8": [
      {
        date: "@now",
        name: "王小虎",
        'category|1':['餐饮','生活用品','医疗保健','交通出行','穿搭美容'],
        cost: "@integer(30, 2800)",
        "payway|1":["微信支付","支付宝支付","云闪付","工银e支付"],
        address: "@county(true)",
      }
    ]
  }).array

export default {
    getStatisticalData: function(){
        return {
            code: 200,
            costlist: List,
        }
    }
}