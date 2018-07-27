const {Router} = require("express");
const router = Router();
const user = require('../database/user')

router.post('/login', (req, res) => {
    let {password, email} = req.body;

    user.findOne({email}).then(data => {
        console.log(data)
        if(data) {
            if(password == data.password){
                req.session.user = data;

                let usermsg = {};
                usermsg.username = data.username;
                usermsg.email = data.email;


                res.json({
                    code: 200,
                    data: usermsg,
                    msg: '登录成功'
                })
            }
            else {
                res.json({
                    code: 401,
                    msg: '密码不正确'
                })
            }
        }
        else {
            res.json({
                code: 401,
                msg: '用户名不存在'
            })
        }
    })


})

router.get('/getMsg',(req, res) => {
    if(req.session.user){
        res.json({
            msg: '你是已经登陆的用户，可以获取这些信息'
        })
    }
    else {
        res.json({
            msg: '你是没有登陆的用户,不可以获取用户信息'
        })
    }
})

module.exports = router;