//编写请求接口，使用 axios 发请求
import axios from './axios'

const api = { 
    // 登录接口
    getLogin(param){  //param: {username:'', password:''}
        return axios.post('/login', param)
    },
    //主页数据
    getHomeDate(){
        return axios.get('/home/getdata')
    },

    //商品管理
    getGoodsList(param){
        return axios.get('goods/goodslist',{
            params: param
        })
    },
    delGoods(param){
        return axios.post('/goods/delgoods',
            param  //这里param是对象，不需要再套一个 data:
        )
    },
    addGoods(param){
        return axios.post('/goods/addgoods', param)
    },
    editGoods(param){
        return axios.post('/goods/editgoods', param)
    },

    //订单管理
    getOrderList(param){
        return axios.get('/order/orderlist',{
            params: param
        })
    },
    delOrder(param){
        return axios.post('/order/delorder',
            param  //这里param是对象，不需要再套一个 data:
        )
    },
    addOrder(param){
        return axios.post('/order/addorder', param)
    },
    editOrder(param){
        return axios.post('/order/editorder', param)
    },
    //用户数据
    getUserData(){
        return axios.get('/user/getdata')
    }
}

export default api