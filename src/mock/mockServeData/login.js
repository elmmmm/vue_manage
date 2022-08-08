const jwt = require('jsonwebtoken')  //用于生成token
const secretkey = "fenzhi"
export default {
    permit(config) {
        console.log('登录config:  ', config);
        let { username, password } = JSON.parse(config.body)
        //访问数据库查询账户密码是否正确（下面只是简单判断一下）
        if (username == 'admin' && password == 'admin') {
            //sign参数：1、用户信息对象 2、加密密钥 3、token的配置项（如有效时间）
            let token = jwt.sign({ username: username }, secretkey, { expiresIn: '12h' })
            return {
                code: 200,
                token: token,
                message: '登录成功！'

            }
        } else {
            return {
                code: 404,
                data: {
                    message: '密码错误！'
                }
            }
        }
    }
}