// 商品信息数据

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
var List = [
    {
        id: '10500',
        name: 'iQOO10 Pro',
        price: 2399,
        num: 140,
        brand: 'iQOO',
        image: 'https://2b.zol-img.com.cn/product/220_220x165/291/ce3LymOe922C2.jpg',
        sellPoint: '200W闪充，V1+芯片，双主摄微云台',
        descp: '双芯闪充，嗖的一下就充满！'
    },
    {
        id: '10501',
        name: 'iPhone13 Pro Max',
        price: 5999,
        num: 2900,
        brand: '苹果',
        image: 'https://2f.zol-img.com.cn/product/215_220x165/891/ceSpiIWcoym16.jpg',
        sellPoint: 'A15仿生芯片，超视网膜XDR显示屏，Pro级摄像头系统',
        descp: '强的很'
    },
    {
        id: '10502',
        name: 'Redmi Note 11',
        price: 1199,
        num: 1930,
        brand: 'Redmi',
        image: 'https://2e.zol-img.com.cn/product/219_220x165/104/cejRsOH4AVs2.jpg',
        sellPoint: '天玑800系列 128GB LCD',
        descp: '超越人眼，感知人心'
    },
    {
        id: '10503',
        name: 'OPPO Reno8 Pro+',
        price: 3699,
        num: 1120,
        brand: 'OPPO',
        image: 'https://2b.zol-img.com.cn/product/220_220x165/721/ceaTw3CxLYyuI.jpg',
        sellPoint: '流云双镜设计，航空铝直边金属中框，双芯人像科技',
        descp: '旗舰双芯下放，拍照更上一层楼'
    },
    {
        id: '10504',
        name: 'iQOO 9 Pro',
        price: 5199,
        num: 300,
        brand: 'iQOO',
        image: 'https://2f.zol-img.com.cn/product/220_220x165/795/cen2Vc6T453bQ.jpg',
        sellPoint: '高通骁龙8 Gen1处理器，120Hz高刷，120w快充，超声波指纹',
        descp: '解锁超能力'
    },
    {
        id: '10505',
        name: '华为P50 Pocket',
        price: 8988,
        num: 210,
        brand: '华为',
        image: 'https://2d.zol-img.com.cn/product/220_220x165/469/cehRNCTzH43s.jpg',
        sellPoint: '宝盒形态设计，晶钻立体微雕工艺，智慧外屏，120Hz高刷新率内屏',
        descp: '开阔视野，流畅非凡'
    },
    {
        id: '10506',
        name: 'OPPO Find X5 Pro',
        price: 6299,
        num: 240,
        brand: 'OPPO',
        image: 'https://2e.zol-img.com.cn/product/219_220x165/806/cepPvFUC2nQJY.jpg',
        sellPoint: '全新骁龙8，自研影像芯片，哈苏影像，5000万双主摄',
        descp: '强的很'
    },
    {
        id: '10507',
        name: 'Redmi K50',
        price: 2399,
        num: 133,
        brand: 'Redmi',
        image: 'https://2f.zol-img.com.cn/product/220_320x240/65/ceZJfzMYtmfIw.jpg',
        sellPoint: '天玑8100处理器，三星2K直屏，4800万像素光学防抖相机',
        descp: '解锁超能力'
    },
    {
        id: '10508',
        name: '华为Mate40 Pro',
        price: 6999,
        num: 893,
        brand: '华为',
        image: 'https://2a.zol-img.com.cn/product/220_220x165/114/ce57nT7J0BdRw.jpg',
        sellPoint: '麒麟9000，88°超曲环幕屏，66W快充，50W无线快充',
        descp: '强的很'
    },
    {
        id: '10509',
        name: '小米12 Pro',
        price: 4799,
        num: 2723,
        brand: '小米',
        image: 'https://2a.zol-img.com.cn/product/219_220x165/106/cexasap9TKtZA.jpg',
        sellPoint: '高通骁龙8Gen1处理器，5000万超清三主摄，120W小米澎湃快充',
        descp: '开阔视野，流畅非凡'
    },
    {
        id: '10510',
        name: '魅族18 Pro',
        price: 3999,
        num: 155,
        brand: '魅族',
        image: 'https://2e.zol-img.com.cn/product/220_220x165/436/cejYuiU4yVuE.jpg',
        sellPoint: '极边四曲微弧屏，AR全场景大师影像系统，高通骁龙888',
        descp: '以经典，致敬经典'
    },
    {
        id: '10511',
        name: 'vivo S15 Pro',
        price: 3399,
        num: 293,
        brand: 'vivo',
        image: 'https://2f.zol-img.com.cn/product/220_320x240/65/ceZJfzMYtmfIw.jpg',
        sellPoint: '天玑8100，独立显示芯片Pro，索尼定制大底主摄',
        descp: '强的很'
    },
    {
        id: '10512',
        name: 'vivo Y77',
        price: 1999,
        num: 1910,
        brand: 'vivo',
        image: 'https://2a.zol-img.com.cn/product/220_220x165/636/ced13P4ithmuU.jpg',
        sellPoint: '天玑930，120Hz高刷，5000万像素后置',
        descp: '星环闪耀，焕然新生'
    },
    {
        id: '10513',
        name: ' iQOO 10 Pro',
        price: 4999,
        num: 1121,
        brand: 'iQOO',
        image: 'https://2f.zol-img.com.cn/product/220_320x240/65/ceZJfzMYtmfIw.jpg',
        sellPoint: '200W闪充，V1+芯片，双主摄微云台',
        descp: '以经典，致敬经典'
    },
    {
        id: '10514',
        name: '一加10 Pro',
        price: 4999,
        num: 350,
        brand: '一加',
        image: 'https://2f.zol-img.com.cn/product/220_320x240/65/ceZJfzMYtmfIw.jpg',
        sellPoint: '骁龙8 Gen1处理器，HyperBoost技术，哈苏手机影像系统',
        descp: '解锁超能力'
    },
    {
        id: '10515',
        name: '荣耀Magic3',
        price: 4298,
        num: 450,
        brand: '荣耀',
        image: 'https://2f.zol-img.com.cn/product/220_320x240/65/ceZJfzMYtmfIw.jpg',
        sellPoint: '高通骁龙888处理器，6.76英寸超曲屏，多主摄计算摄影，66W超级快充',
        descp: '以经典，致敬经典'
    },
    {
        id: '10516',
        name: '小米12S Ultra',
        price: 5999,
        num: 2830,
        brand: '小米',
        image: 'https://2f.zol-img.com.cn/product/220_320x240/65/ceZJfzMYtmfIw.jpg',
        sellPoint: '徕卡专业光学镜头， IMX989一英寸超大底，2K超视感屏',
        descp: '星环闪耀，焕然新生'
    },
    {
        id: '10517',
        name: '荣耀70',
        price: 2699,
        num: 111,
        brand: '荣耀',
        image: 'https://2f.zol-img.com.cn/product/220_320x240/65/ceZJfzMYtmfIw.jpg',
        sellPoint: 'IMX800三主摄，双曲屏设计，高通骁龙778G Plus',
        descp: '开阔视野，流畅非凡'
    },
    {
        id: '10518',
        name: 'OPPO K10',
        price: 2199,
        num: 813,
        brand: 'OPPO',
        image: 'https://2f.zol-img.com.cn/product/220_320x240/65/ceZJfzMYtmfIw.jpg',
        sellPoint: '天玑8000-MAX，金刚石VC液冷散热，120Hz高帧变速屏屏，66W快充，50W无线快充',
        descp: '以经典，致敬经典'
    },
    {
        id: '10519',
        name: '华为nova 10',
        price: 2699,
        num: 272,
        brand: '华为',
        image: 'https://2a.zol-img.com.cn/product/220_220x165/636/ced13P4ithmuU.jpg',
        sellPoint: '前置6000万超广角镜头，66W超级快充',
        descp: '超越人眼，感知人心'
    },
    {
        id: '10520',
        name: '魅族18 Pro',
        price: 3999,
        num: 155,
        brand: '魅族',
        image: 'https://2d.zol-img.com.cn/product/221_320x240/547/cePATcUGZcMJM.jpg',
        sellPoint: '极边四曲微弧屏，AR全场景大师影像系统，高通骁龙888',
        descp: '以经典，致敬经典'
    },
    {
        id: '10521',
        name: 'vivo S15 Pro',
        price: 3399,
        num: 293,
        brand: 'vivo',
        image: 'https://2a.zol-img.com.cn/product/220_220x165/636/ced13P4ithmuU.jpg',
        sellPoint: '天玑8100，独立显示芯片Pro，索尼定制大底主摄',
        descp: '强的很'
    },
    {
        id: '10522',
        name: 'vivo Y77',
        price: 1999,
        num: 1910,
        brand: 'vivo',
        image: 'https://2f.zol-img.com.cn/product/220_320x240/65/ceZJfzMYtmfIw.jpg',
        sellPoint: '天玑930，120Hz高刷，5000万像素后置',
        descp: '星环闪耀，焕然新生'
    },
    {
        id: '10523',
        name: ' iQOO 10 Pro',
        price: 4999,
        num: 1121,
        brand: 'iQOO',
        image: 'https://2f.zol-img.com.cn/product/220_320x240/65/ceZJfzMYtmfIw.jpg',
        sellPoint: '200W闪充，V1+芯片，双主摄微云台',
        descp: '以经典，致敬经典'
    },
    {
        id: '10524',
        name: '一加10 Pro',
        price: 4999,
        num: 350,
        brand: '一加',
        image: 'https://2a.zol-img.com.cn/product/220_220x165/636/ced13P4ithmuU.jpg',
        sellPoint: '骁龙8 Gen1处理器，HyperBoost技术，哈苏手机影像系统',
        descp: '解锁超能力'
    },
    {
        id: '10525',
        name: '荣耀Magic3',
        price: 4298,
        num: 450,
        brand: '荣耀',
        image: 'https://2f.zol-img.com.cn/product/220_320x240/65/ceZJfzMYtmfIw.jpg',
        sellPoint: '高通骁龙888处理器，6.76英寸超曲屏，多主摄计算摄影，66W超级快充',
        descp: '以经典，致敬经典'
    },
    {
        id: '10526',
        name: '小米12S Ultra',
        price: 5999,
        num: 2830,
        brand: '小米',
        image: 'https://2a.zol-img.com.cn/product/220_220x165/636/ced13P4ithmuU.jpg',
        sellPoint: '徕卡专业光学镜头， IMX989一英寸超大底，2K超视感屏',
        descp: '星环闪耀，焕然新生'
    },
    {
        id: '10527',
        name: '荣耀70',
        price: 2699,
        num: 111,
        brand: '荣耀',
        image: 'https://2e.zol-img.com.cn/product/220_220x165/436/cejYuiU4yVuE.jpg',
        sellPoint: 'IMX800三主摄，双曲屏设计，高通骁龙778G Plus',
        descp: '开阔视野，流畅非凡'
    },
    {
        id: '10528',
        name: '小米12S Ultra',
        price: 5999,
        num: 2830,
        brand: '小米',
        image: 'https://2f.zol-img.com.cn/product/220_320x240/65/ceZJfzMYtmfIw.jpg',
        sellPoint: '徕卡专业光学镜头， IMX989一英寸超大底，2K超视感屏',
        descp: '星环闪耀，焕然新生'
    },
    {
        id: '10529',
        name: '荣耀70',
        price: 2699,
        num: 111,
        brand: '荣耀',
        image: 'https://2a.zol-img.com.cn/product/220_220x165/636/ced13P4ithmuU.jpg',
        sellPoint: 'IMX800三主摄，双曲屏设计，高通骁龙778G Plus',
        descp: '开阔视野，流畅非凡'
    },
    {
        id: '10530',
        name: 'OPPO K10',
        price: 2199,
        num: 813,
        brand: 'OPPO',
        image: 'https://2f.zol-img.com.cn/product/220_320x240/65/ceZJfzMYtmfIw.jpg',
        sellPoint: '天玑8000-MAX，金刚石VC液冷散热，120Hz高帧变速屏屏，66W快充，50W无线快充',
        descp: '以经典，致敬经典'
    },
    {
        id: '10531',
        name: 'iQOO 9 Pro',
        price: 5199,
        num: 300,
        brand: 'iQOO',
        image: 'https://2e.zol-img.com.cn/product/220_220x165/436/cejYuiU4yVuE.jpg',
        sellPoint: '高通骁龙8 Gen1处理器，120Hz高刷，120w快充，超声波指纹',
        descp: '解锁超能力'
    },
    {
        id: '10532',
        name: '华为P50 Pocket',
        price: 8988,
        num: 210,
        brand: '华为',
        image: 'https://2f.zol-img.com.cn/product/220_320x240/65/ceZJfzMYtmfIw.jpg',
        sellPoint: '宝盒形态设计，晶钻立体微雕工艺，智慧外屏，120Hz高刷新率内屏',
        descp: '开阔视野，流畅非凡'
    },
    {
        id: '10533',
        name: 'OPPO Find X5 Pro',
        price: 6299,
        num: 240,
        brand: 'OPPO',
        image: 'https://2e.zol-img.com.cn/product/220_220x165/436/cejYuiU4yVuE.jpg',
        sellPoint: '全新骁龙8，自研影像芯片，哈苏影像，5000万双主摄',
        descp: '强的很'
    },
    {
        id: '10534',
        name: 'Redmi K50',
        price: 2399,
        num: 133,
        brand: 'Redmi',
        image: 'https://2f.zol-img.com.cn/product/220_320x240/65/ceZJfzMYtmfIw.jpg',
        sellPoint: '天玑8100处理器，三星2K直屏，4800万像素光学防抖相机',
        descp: '解锁超能力'
    },
    {
        id: '10535',
        name: '华为Mate40 Pro',
        price: 6999,
        num: 893,
        brand: '华为',
        image: 'https://2a.zol-img.com.cn/product/220_220x165/636/ced13P4ithmuU.jpg',
        sellPoint: '麒麟9000，88°超曲环幕屏，66W快充，50W无线快充',
        descp: '强的很'
    },
    {
        id: '10536',
        name: '小米12 Pro',
        price: 4799,
        num: 2723,
        brand: '小米',
        image: 'https://2e.zol-img.com.cn/product/220_220x165/436/cejYuiU4yVuE.jpg',
        sellPoint: '高通骁龙8Gen1处理器，5000万超清三主摄，120W小米澎湃快充',
        descp: '开阔视野，流畅非凡'
    },
    {
        id: '10537',
        name: '魅族18 Pro',
        price: 3999,
        num: 155,
        brand: '魅族',
        image: 'https://2a.zol-img.com.cn/product/220_220x165/636/ced13P4ithmuU.jpg',
        sellPoint: '极边四曲微弧屏，AR全场景大师影像系统，高通骁龙888',
        descp: '以经典，致敬经典'
    },
    {
        id: '10538',
        name: 'vivo S15 Pro',
        price: 3399,
        num: 293,
        brand: 'vivo',
        image: 'https://2e.zol-img.com.cn/product/220_220x165/436/cejYuiU4yVuE.jpg',
        sellPoint: '天玑8100，独立显示芯片Pro，索尼定制大底主摄',
        descp: '强的很'
    },
    {
        id: '10539',
        name: 'vivo Y77',
        price: 1999,
        num: 1910,
        brand: 'vivo',
        image: 'https://2f.zol-img.com.cn/product/220_320x240/65/ceZJfzMYtmfIw.jpg',
        sellPoint: '天玑930，120Hz高刷，5000万像素后置',
        descp: '星环闪耀，焕然新生'
    },
    {
        id: '10540',
        name: ' iQOO 10 Pro',
        price: 4999,
        num: 1121,
        brand: 'iQOO',
        image: 'https://2a.zol-img.com.cn/product/220_220x165/636/ced13P4ithmuU.jpg',
        sellPoint: '200W闪充，V1+芯片，双主摄微云台',
        descp: '以经典，致敬经典'
    },
    {
        id: '10541',
        name: '一加10 Pro',
        price: 4999,
        num: 350,
        brand: '一加',
        image: 'https://2f.zol-img.com.cn/product/220_320x240/65/ceZJfzMYtmfIw.jpg',
        sellPoint: '骁龙8 Gen1处理器，HyperBoost技术，哈苏手机影像系统',
        descp: '解锁超能力'
    },
    {
        id: '10542',
        name: '荣耀Magic3',
        price: 4298,
        num: 450,
        brand: '荣耀',
        image: 'https://2e.zol-img.com.cn/product/220_220x165/436/cejYuiU4yVuE.jpg',
        sellPoint: '高通骁龙888处理器，6.76英寸超曲屏，多主摄计算摄影，66W超级快充',
        descp: '以经典，致敬经典'
    },

]

const api = {

    getGoodsList: (config) => { //getGoodsList是一个get请求，所以发过来的参数在url中
        const { pagenum, keyword } = param2Obj(config.url) //pagenum:页码，kw：搜索关键字
        console.log("pagenum, keyword ", pagenum, keyword);
        const pageSize = 7
        let newList = [] //截取当前页的数据
        let curTotal = 40
        if (keyword == '') {//没有关键字则非搜索场景
            newList = List.slice(pageSize * (pagenum - 1), pageSize * pagenum)
            curTotal = List.length
        } else {
            //aboutList:包含关键字的数据列表
            const aboutList = List.filter(item => {
                return item.name.includes(keyword)
            })
            curTotal = aboutList.length
            newList = aboutList.slice(pageSize * (pagenum - 1), pageSize * pagenum)
        }
        return {
            goodslist: newList,
            count: curTotal
        }
    },

    //删除是post请求单个删除和批量删除统一处理（单个的id也放进数组）
    delGoods: (config) => {
        console.log('config.body', config.body);
        const { idArr } = JSON.parse(config.body)
        List = List.filter((item) => {
            if (idArr.includes(item.id)) {
                return false
            }
            return true
        })
        return {
            code: 200,
            message: '删除成功！'
        }
    },

    addGoods(config) {
        const { name, price, num, brand, image, sellPoint, descp } = JSON.parse(config.body)
        const maxId = Math.max.apply(Math, List.map(item => { return Number(item.id) }))
        const newGoods = {
            id: maxId + 1,
            name, price, num, brand, image, sellPoint, descp
        }
        console.log('addGoods', newGoods)
        List.unshift(newGoods)
        return {
            code: 200,
            message: '添加成功!'
        }
    },
    updateGoods(config) {
        const { id, name, price, num, brand, image, sellPoint, descp } = JSON.parse(config.body)
        // Some:如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
        List.some(item => {
            if (item.id === id) {
                item.name = name
                item.price = price
                item.num = num
                item.brand = brand
                item.image = image
                item.sellPoint = sellPoint
                item.descp = descp
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


