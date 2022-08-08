// mockjs生成假数据
import Mock from "mockjs"

let List = []
export default {
    getStatisticalData: () => {
        //Mock.Random.integer 产生随机数100到8000之间的整数
        for (let i = 0; i < 7; i++) {
            List.push(
                Mock.mock({
                    苹果: Mock.Random.integer(100, 8000),
                    vivo: Mock.Random.integer(100, 8000),
                    oppo: Mock.Random.integer(100, 8000),
                    魅族: Mock.Random.integer(100, 8000),
                    三星: Mock.Random.integer(100, 8000),
                    小米: Mock.Random.integer(100, 8000),
                })
            )
        }
        return {
            code: 200,
            data: {
                // 饼图
                pieData: [
                    {
                        name: '小米',
                        value: 3403
                    },
                    {
                        name: '苹果',
                        value: 6034
                    },
                    {
                        name: 'vivo',
                        value: 1500
                    },
                    {
                        name: 'oppo',
                        value: 1790
                    },
                    {
                        name: '华为',
                        value: 1890
                    },
                    {
                        name: '三星',
                        value: 492
                    }
                ],
                // 柱状图
                userData: [
                    {
                        date: '周一',
                        new: 5,
                        active: 200
                    },
                    {
                        date: '周二',
                        new: 10,
                        active: 500
                    },
                    {
                        date: '周三',
                        new: 12,
                        active: 550
                    },
                    {
                        date: '周四',
                        new: 60,
                        active: 800
                    },
                    {
                        date: '周五',
                        new: 65,
                        active: 550
                    },
                    {
                        date: '周六',
                        new: 53,
                        active: 770
                    },
                    {
                        date: '周日',
                        new: 33,
                        active: 170
                    }
                ],
                // 折线图
                orderData: {
                    date: ['20211001', '20211002', '20211003', '20211004', '20211005', '20211006', '20211007'],
                    data: List
                },
                tableData: [
                    {
                        name: 'OPPO',
                        todayBuy: 340,
                        monthBuy: 3598,
                        totalBuy: 35762
                    },
                    {
                        name: '苹果',
                        todayBuy: 891,
                        monthBuy: 4346,
                        totalBuy: 73840
                    },
                    {
                        name: 'VIVO',
                        todayBuy: 452,
                        monthBuy: 876,
                        totalBuy: 35212
                    },
                    {
                        name: '小米',
                        todayBuy: 1245,
                        monthBuy: 6324,
                        totalBuy: 64520
                    },
                    {
                        name: 'HUAWEI',
                        todayBuy: 120,
                        monthBuy: 2998,
                        totalBuy: 19832
                    },
                    {
                        name: '三星',
                        todayBuy: 33,
                        monthBuy: 220,
                        totalBuy: 3434
                    },
                    {
                        name: 'HONOR',
                        todayBuy: 452,
                        monthBuy: 2398,
                        totalBuy: 12832
                    },
                    {
                        name: '魅族',
                        todayBuy: 313,
                        monthBuy: 1230,
                        totalBuy: 22430
                    }
                ]
            }
        }
    }
}