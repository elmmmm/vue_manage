//对axios进行二次封装
import axios from 'axios'

const instance = axios.create({
    // baseURL: 
    timeout: 5000,//请求等待时间：时间到了后台没有返回数据则中止请求
})

//添加请求拦截器
instance.interceptors.request.use(function(config) {
    //在发送请求之前做些什么
    console.log('request:  ', config)
    return config;
}, function(error){
    //对请求错误做些什么
    return Promise.reject(error)
})

//添加响应拦截器
instance.interceptors.response.use(function(response){
    console.log('response:  ', response)
    return response
}, function(error){
    console.log('error:  ', error)
    return Promise.reject(error)
})

export default instance