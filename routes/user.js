const router = require('koa-router')();
const UserModel = require('../model/User.js');
const WechatModel = require('../model/Wechat.js');
const DepartmentModel = require('../model/Department.js');
const md5 = require('../util/encryptByMD5');
const salt = "QE4CwVWGy1lBBIW5uoYFsZEwfyI7ScuU";
const routers = require('../conf/router');
router.prefix('/user');

router.post('/login', async (ctx, next) => {
    let { username, password } = ctx.request.body;
    let result = await UserModel.findOne({username});
    if(result && result._id && md5(md5(result.password + salt)) === password) {
        result.loginAt = Date.now();
        await result.save();
        result = result.toObject();
        const {role} = result;
        delete result.password;
        delete result.role;
        ctx.body = {code: 1, msg: '登录成功', data: result, routers: routers[role.toString()]}
    } else {
        ctx.body = {code: -1, msg: '用户名或密码不正确'}
    }
});

router.post('/', async (ctx, next) => {
    let { username, password, role, remarks, nickName, power } = ctx.request.body;
    let result = await UserModel.find({username});
    if(result.length > 0) {
        ctx.body = {code: 2, msg: "该账户名已存在，请检查输入是否有误"}
    } else {
        let data = await UserModel.create({ username, nickName, password, role, remarks, power});
        if(data) {
            ctx.body = {code: 1, msg: '账户创建成功', data}
        } else {
            ctx.response.status = 400;
            ctx.body = {code: -1, msg: '账户创建失败，请重试'}
        }
    }
});

router.get('/', async (ctx, next) => {
    let { username, page } = ctx.query, result, total;
    if(username) {
        result = await UserModel.find({username: {$regex: new RegExp(username)}}).skip((page - 1) * 10).limit(10);
        total = await UserModel.count({username: {$regex: new RegExp(username)}});
    } else {
        result = await UserModel.find().skip((page - 1) * 10).limit(10);
        total = await UserModel.count();
    }
    if(result.length > 0) {
        ctx.body = {code: 1, msg: '查询成功', data: result, total}
    } else {
        ctx.response.status = 404;
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

// 获取微信号
router.get('/wechat', async (ctx, next) => {
   let {account_id, page = 1} = ctx.query, result, total;
   if(account_id) {
       let user = await UserModel.findById(account_id);
       if(user) {
           let {role} = user;
           if(role === 0) {
               result = await WechatModel.find({bossId: account_id}).skip((page - 1) * 10).limit(10);
               total = await WechatModel.count({bossId: account_id});
               ctx.body = {code: 1, msg: "查询成功", data: result, total};
           } else if(role === 1) {
               result = await WechatModel.find({adminId: account_id}).skip((page - 1) * 10).limit(10);
               total = await WechatModel.count({adminId: account_id});
               ctx.body = {code: 1, msg: "查询成功", data: result, total};
           } else if(role === 2) {
               result = await WechatModel.find({userId: account_id}).skip((page - 1) * 10).limit(10);
               total = await WechatModel.count({userId: account_id});
               ctx.body = {code: 1, msg: "查询成功", data: result, total};
           } else {
               ctx.response.status = 404;
               ctx.body = {code: -1, msg: "该账户无查询权限"}
           }
       }
   } else {
       ctx.response.status = 400;
       ctx.body = {code: -1, msg: "登录信息失效，账户id缺失"}
   }
});

// 获取部门
router.get('/department', async (ctx, next) => {
    let {account_id, page = 1} = ctx.query, result, total;
    if(account_id) {
        let user = await UserModel.findById(account_id);
        if(user) {
            let {role} = user;
            if(role === 0) {
                result = await DepartmentModel.find({bossId: account_id}).skip((page - 1) * 10).limit(10);
                total = await DepartmentModel.count({bossId: account_id});
                ctx.body = {code: 1, msg: "查询成功", data: result, total};
            } else if(role === 1) {
                result = await DepartmentModel.find({adminId: account_id}).skip((page - 1) * 10).limit(10);
                total = await DepartmentModel.count({adminId: account_id});
                ctx.body = {code: 1, msg: "查询成功", data: result, total};
            } else {
                ctx.response.status = 404;
                ctx.body = {code: -1, msg: "该账户无查询权限"};
            }
        } else {
            ctx.response.status = 400;
            ctx.body = {code: -1, msg: "没有查询到该账户的有关信息"}
        }
    } else {
        ctx.response.status = 400;
        ctx.body = {code: -1, msg: "登录信息失效，账户id缺失"}
    }
});

module.exports = router;