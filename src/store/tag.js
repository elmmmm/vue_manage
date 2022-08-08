export default {
    namespaced: true,
    state: {
        tagList: [
            {
                name: 'Home',
                label: '首页'
            }
        ],
        currentMenu: null,
        // menu: []
    },
    mutations: {
        selectMenu(state, val){
            if(val.name !== "Home"){
                state.currentMenu = val
                const result = state.tagList.findIndex(item => item.name === val.name) 
                if(result === -1){ //等于-1不存在--防止重复添加
                    state.tagList.push(val)
                }
            }else{//为首页时
                state.currentMenu = null
            }
        },
        closeTag(state, val){ //关闭标签
            const result = state.tagList.findIndex(item => item.name === val.name)
            state.tagList.splice(result, 1)
        },
    },
    actions: {

    },
}