const {Router} = require('express')
const router = Router()
const user = require('../database/user')
const isEmail = require('validator/lib/isEmail');

router.post('/user', (req, res) => {
    let {username, email, password} = req.body;

    if(isEmail(email)&&password&&password.trim()!=''){
        user.create({username, email, password}).then(data => {
            res.json({
                code: 200,
                msg: 'success'
            })
        }).catch(err => {
            res.json({
                code: 401,
                msg: '该邮箱已注册'
            })
        })
    }
    else {
        res.json({
            code: 401,
            msg: '请输入正确的注册信息'
        })
    }
})

module.exports = router;
