import router from './index'
// 访问权限管理
// 获取 vuex 数据（token）
import store from '../store/index'
// 路由拦截/守卫
router.beforeEach((to, from, next) => {
    if(to.matched.some(item => item.meta.isLogin)){//判断这个路由是否需要登录 
        //验证是否为登录态
        console.log('路由守卫store:  ', store)
        let token = store.state.login.userinfo.token
        if(token){  //token存在就放行
            next()
        }else{
            console.log('ban---', to)
            next('/login')
        }
    }else{ //不需要登录，直接放行
        next()
    }
})