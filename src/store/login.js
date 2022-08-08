export default {
    namespaced: true,
    state: {
        userinfo: {
            user: '',
            token: ''
        }
    },
    mutations: {
        //设置用户信息
        setUser(state, hel){
            state.userinfo = hel
        },
        //清空
        clearUser(state){
            state.userinfo = {
                user: '',
                token: ''
            }
        }
    },
    actions: {

    },
    getters: {

    }
}