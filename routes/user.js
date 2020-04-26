const router = require('koa-router')();
const UserModel = require('../model/User.js');

router.prefix('/user');

router.post('/', async (ctx, next) => {
    let { username, password, role, remarks, nick_name } = ctx.request.body;
    let result = await UserModel.find({username});
    if(result.length > 0) {
        ctx.body = {code: 2, msg: "该账户名已存在，请检查输入是否有误"}
    } else {
        let data = await UserModel.create({ username, nick_name, password, role, remarks, loginAt: Date.now() });
        if(data) {
            ctx.body = {code: 1, msg: '账户创建成功', data}
        } else {
            ctx.response.status = 400;
            ctx.body = {code: -1, msg: '账户创建失败，请重试'}
        }
    }
});

router.get('/', async (ctx, next) => {
    let { username } = ctx.query, result;
    if(username) {
        result = await UserModel.find({username: {$regex: new RegExp(username)}})
    } else {
        result = await UserModel.find();
    }
    if(result.length > 0) {
        ctx.body = {code: 1, msg: '查询成功', data: result}
    } else {
        ctx.response.status = 400;
        ctx.body = {code: -1, msg: '没有查询到相关数据'}
    }
});

router.put('/power', async (ctx, next) => {
    let { id, power } = ctx.request.body;
    let updateAt = Date.now();
    let data = await UserModel.findByIdAndUpdate(id, { power, updateAt }, {new: true});
    if(data) {
        ctx.body = {code: 1, msg: '权限修改成功', data}
    } else {
        ctx.response.status = 400;
        ctx.body = {code: -1, msg: '权限修改失败，请重试'}
    }
});

router.put('/remarks', async (ctx, next) => {
    let { id, remarks } = ctx.request.body;
    let updateAt = Date.now();
    let data = await UserModel.findByIdAndUpdate(id, { remarks, updateAt }, {new: true});
    if(data) {
        ctx.body = {code: 1, msg: '备注修改成功', data}
    } else {
        ctx.response.status = 400;
        ctx.body = {code: -1, msg: '备注修改失败，请重试'}
    }
});

router.put('/', async (ctx, next) => {
    let { id, username, password } = ctx.request.body;
    let updateAt = Date.now();
    let data = await UserModel.findByIdAndUpdate(id, { username, password, updateAt }, {new: true});
    if(data) {
        ctx.body = {code: 1, msg: '密码修改成功', data}
    } else {
        ctx.response.status = 400;
        ctx.body = {code: -1, msg: '密码修改失败，请重试'}
    }
});

router.delete('/', async (ctx, next) => {
    let { _id } = ctx.query;
    let result = await UserModel.findByIdAndRemove(_id);
    if(result) {
        ctx.body = {code: 1, msg: '删除成功'}
    } else {
        ctx.response.status = 400;
        ctx.body = {code: -1, msg: "删除失败"}
    }
});

router.post('/login', async (ctx, next) => {
    let { username, password } = ctx.request.body;
    if(username && password) {
        let result = await UserModel.find({username, password});
        if(result.length > 0) {
            result[0].loginAt = Date.now();
            await result[0].save();
            ctx.body = {code: 1, msg: '登录成功', data: result}
        } else {
            ctx.response.status = 400;
            ctx.body = {code: -1, msg: '用户名或密码不正确'}
        }
    } else {
        ctx.response.status = 400;
        ctx.body = {code: -1, msg: '用户名或密码不能为空'}
    }
});

module.exports = router;