import Mock from 'mockjs'
import loginApi from './mockServeData/login'
import homeApi from './mockServeData/home'
import goodsApi from './mockServeData/goods'
import orderApi from './mockServeData/order'
import userApi from './mockServeData/user'

//使用mock定义请求拦截器
//登录
Mock.mock('/login', 'post', loginApi.permit)
//主页数据 
Mock.mock(/home\/getdata/, 'get', homeApi.getStatisticalData) 

//商品管理
Mock.mock(/goods\/goodslist/, 'get', goodsApi.getGoodsList) 
Mock.mock('/goods/delgoods', 'post', goodsApi.delGoods)
Mock.mock('/goods/addgoods', 'post', goodsApi.addGoods)
Mock.mock('/goods/editgoods', 'post', goodsApi.updateGoods)

//订单管理
Mock.mock(/order\/orderlist/, 'get', orderApi.getOrderList) 
Mock.mock('/order/delorder', 'post', orderApi.delOrder)
Mock.mock('/order/addorder', 'post', orderApi.addOrder)
Mock.mock('/order/editorder', 'post', orderApi.updateOrder)

//用户数据
Mock.mock('/user/getdata', 'get', userApi.getStatisticalData)