// 订单数据
import Mock from 'mockjs'

// get请求从config.url获取参数，post则从config.body中获取参数
function param2Obj(url) {
    const search = url.split('?')[1]
    if (!search) {
        return {}
    }
    return JSON.parse(
        '{"' +
        decodeURIComponent(search)
            .replace(/"/g, '\\"')
            .replace(/&/g, '","')
            .replace(/=/g, '":"') +
        '"}'
    )
}

//假数据
var List = Mock.mock({
    "array|40": [
      {
        id: "@id",
        "goods|1": ["荣耀Magic4 至臻版", "华为P50 Pro", "小米11 Ultra", "华为Mate 40 Pro+", "小米10 Pro", "vivo X70 Pro+", "三星Galaxy S20 Ultra", "vivo X50 Pro+", "华为Mate 40 Pro", "OPPO Find X2 Pro", "荣耀Magic4 Pro", "iPhone 13 Pro Max", "小米11 Pro", "realme GT2 Pro", "一加10 Pro", "三星Galaxy S22", "索尼Xperia 1 III", "黑鲨4"],
        name: "@cname",
        "nickname|1": ["小猪佩奇", "bug牙路", "滴水blow", "幼儿园老大", "开着宝马买馒头", "我是泡面不会断线", "暗臭残留", "Eason不坑", "bottle汹涌", "苞米地蒙面侠", "爸比娃娃", "无情hollow少", "人见人eye", "凶狗睡大石", "来治猩猩的你"],
        email: "@email",
        address: "@county(true)",
        time: "@datetime",
        "status|1": ["待付款", "待发货", "待收货", "待评价"]
      }
    ]
  }).array

const api = {

    getOrderList: (config) => { //getGoodsList是一个get请求，所以发过来的参数在url中
        const {pagenum, keyword} = param2Obj(config.url) //pagenum:页码，kw：搜索关键字
        console.log("pagenum, keyword ", pagenum, keyword);
        const pageSize = 7
        let newList = [] //截取当前页的数据
        let curTotal = 40
        if(keyword == ''){//没有关键字则非搜索场景
            newList = List.slice(pageSize*(pagenum-1), pageSize*pagenum)
            curTotal = List.length
        }else{
            //aboutList:包含关键字的数据列表
            const aboutList = List.filter(item =>{ 
                return item.name.includes(keyword)
            })
            curTotal = aboutList.length
            newList = aboutList.slice(pageSize*(pagenum-1), pageSize*pagenum)
        }
        return {
            goodslist: newList,
            count: curTotal
        }
    },

    //删除是post请求单个删除和批量删除统一处理（单个的id也放进数组）
    delOrder:(config)=>{ 
        console.log('config.body',config.body);
        const {idArr} = JSON.parse(config.body)
        List = List.filter((item) =>{
            if(idArr.includes(item.id)){
                return false
            }
            return true
        })
        return {
            code: 200,
            message:'删除成功！'
        }
    },

    addOrder(config){
        const {goods,name,nickname,email,address,time,status} = JSON.parse(config.body)
        const maxId = Mock.Random.integer(193284543583)
        const newOrder = {
            id: maxId + 1, 
            goods,name,nickname,email,address,time,status
        }
        console.log('addGoods', maxId)
        List.unshift(newOrder)
        return {
            code: 200,
            message:'添加成功!'
        }
    },
    updateOrder(config){
        const { id, goods,name,nickname,email,address,time,status } = JSON.parse(config.body)
        // Some:如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
        List.some(item => {
            if (item.id === id) {
                item.goods = goods
                item.name = name
                item.nickname = nickname
                item.email = email
                item.address = address
                item.time = time
                item.status = status
                return true
            }
        })
        return {
            code: 200,
            message: '编辑更新成功!'
        }
    }
}

export default api


