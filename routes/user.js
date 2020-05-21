const router = require('koa-router')();
const UserModel = require('../model/User.js');
const WechatModel = require('../model/Wechat.js');
const DepartmentModel = require('../model/Department.js');
const md5 = require('../util/encryptByMD5');
const salt = "QE4CwVWGy1lBBIW5uoYFsZEwfyI7ScuU";
const routers = require('../conf/router');
router.prefix('/user');

router.post('/login', async (ctx, next) => {
    let {username, password} = ctx.request.body;
    let result = await UserModel.findOne({username});
    if (result && result._id && md5(md5(result.password + salt)) === password) {
        result.loginAt = Date.now();
        await result.save();
        result = result.toObject();
        const {role} = result;
        result.role = role === 9999999999 ? "后台管理员账号" : role === 0 ? "主账号" : role === 1 ? "管理账号" : "销售账号"
        delete result.password;
        ctx.body = {code: 1, msg: '登录成功', data: result, routers: routers[role.toString()]}
    } else {
        ctx.body = {code: -1, msg: '用户名或密码不正确'}
    }
});

router.post('/', async (ctx, next) => {
    let {account_id, username, password, role, remarks, nickName, power} = ctx.request.body;
    let result = await UserModel.find({username});
    if (result.length > 0) {
        ctx.body = {code: 2, msg: "该账户名已存在，请检查输入是否有误"}
    } else {
        if(account_id) {
            let user = await UserModel.findById(account_id);
            if(user.role < role) {
                let data = await UserModel.create({username, nickName, password, role, remarks, power});
                if (data) {
                    ctx.body = {code: 1, msg: '账户创建成功', data}
                } else {
                    ctx.response.status = 400;
                    ctx.body = {code: -1, msg: '账户创建失败，请重试'}
                }
            } else {
                ctx.response.status = 403;
                ctx.body = {code: -1, msg: '没有权限操作，拒绝访问'}
            }
        } else {
            ctx.response.status = 401;
            ctx.body = {code: -1, msg: '登录信息失效，请重新登录'}
        }
    }
});

router.get('/', async (ctx, next) => {
    let {account_id, username, page = 1} = ctx.query, result, total;
    if (username && account_id) {
        result = await UserModel.find({username: {$regex: new RegExp(username)}}).skip((page - 1) * 10).limit(10);
        total = await UserModel.count({username: {$regex: new RegExp(username)}});
        ctx.body = {code: 1, msg: '查询成功', data: result, total}
    } else if (account_id) {
        checkUserRole(account_id)
            .then(async role => {
                if (role === 0) {
                    result = await UserModel.find({bossId: account_id}).skip((page - 1) * 10).limit(10);
                    total = await UserModel.count({bossId: account_id});
                    ctx.body = {code: 1, msg: "查询成功", data: result, total};
                } else if (role === 1) {
                    result = await UserModel.find({adminId: account_id}).skip((page - 1) * 10).limit(10);
                    total = await UserModel.count({adminId: account_id});
                    ctx.body = {code: 1, msg: "查询成功", data: result, total};
                } else {
                    ctx.response.status = 404;
                    ctx.body = {code: -1, msg: "该账户无查询权限"}
                }
            })
            .catch(err => {
                ctx.response.status = err.status;
                ctx.body = err;
            });
    } else {
        ctx.response.status = 401;
        ctx.body = {code: -1, msg: "登录信息失效，账户id缺失"}
    }
});

router.put('/power', async (ctx, next) => {
    let {id, power} = ctx.request.body;
    let updateAt = Date.now();
    let data = await UserModel.findByIdAndUpdate(id, {power, updateAt}, {new: true});
    if (data) {
        ctx.body = {code: 1, msg: '权限修改成功', data}
    } else {
        ctx.response.status = 400;
        ctx.body = {code: -1, msg: '权限修改失败，请重试'}
    }
});

// 修改用户权限为 后台管理员
router.get('/role', async (ctx, next) => {
    let {id} = ctx.query;
    let updateAt = Date.now();
    let data = await UserModel.findByIdAndUpdate(id, {role: 9999999999, updateAt}, {new: true});
    if (data) {
        ctx.body = {code: 1, msg: '用户权限权限修改成功', data}
    } else {
        ctx.response.status = 400;
        ctx.body = {code: -1, msg: '用户权限修改失败，请重试'}
    }
});

router.put('/remarks', async (ctx, next) => {
    let {id, remarks} = ctx.request.body;
    let updateAt = Date.now();
    let data = await UserModel.findByIdAndUpdate(id, {remarks, updateAt}, {new: true});
    if (data) {
        ctx.body = {code: 1, msg: '备注修改成功', data}
    } else {
        ctx.response.status = 400;
        ctx.body = {code: -1, msg: '备注修改失败，请重试'}
    }
});

router.put('/', async (ctx, next) => {
    let {id, username, password} = ctx.request.body;
    let updateAt = Date.now();
    let data = await UserModel.findByIdAndUpdate(id, {username, password, updateAt}, {new: true});
    if (data) {
        ctx.body = {code: 1, msg: '密码修改成功', data}
    } else {
        ctx.response.status = 400;
        ctx.body = {code: -1, msg: '密码修改失败，请重试'}
    }
});

router.delete('/', async (ctx, next) => {
    let {_id} = ctx.query;
    let result = await UserModel.findByIdAndRemove(_id);
    if (result) {
        ctx.body = {code: 1, msg: '删除成功'}
    } else {
        ctx.response.status = 400;
        ctx.body = {code: -1, msg: "删除失败"}
    }
});

// 获取微信号
router.get('/wechat', async (ctx, next) => {
    let {account_id, page = 1} = ctx.query, result, total;
    if (account_id) {
        checkUserRole(account_id)
            .then(async role => {
                if (role === 0) {
                    result = await WechatModel.find({bossId: account_id}).skip((page - 1) * 10).limit(10);
                    total = await WechatModel.count({bossId: account_id});
                    ctx.body = {code: 1, msg: "查询成功", data: result, total};
                } else if (role === 1) {
                    result = await WechatModel.find({adminId: account_id}).skip((page - 1) * 10).limit(10);
                    total = await WechatModel.count({adminId: account_id});
                    ctx.body = {code: 1, msg: "查询成功", data: result, total};
                } else if (role === 2) {
                    result = await WechatModel.find({userId: account_id}).skip((page - 1) * 10).limit(10);
                    total = await WechatModel.count({userId: account_id});
                    ctx.body = {code: 1, msg: "查询成功", data: result, total};
                } else {
                    ctx.response.status = 404;
                    ctx.body = {code: -1, msg: "该账户无查询权限"}
                }
            })
            .catch(err => {
                ctx.response.status = err.status;
                ctx.body = err;
            });
    } else {
        ctx.response.status = 401;
        ctx.body = {code: -1, msg: "登录信息失效，账户id缺失"}
    }
});

// 获取部门
router.get('/department', async (ctx, next) => {
    let {account_id, page = 1} = ctx.query, result, total;
    if (account_id) {
        checkUserRole(account_id)
            .then(async role => {
                if (role === 0) {
                    result = await DepartmentModel.find({bossId: account_id}).skip((page - 1) * 10).limit(10);
                    total = await DepartmentModel.count({bossId: account_id});
                    ctx.body = {code: 1, msg: "查询成功", data: result, total};
                } else if (role === 1) {
                    result = await DepartmentModel.find({adminId: account_id}).skip((page - 1) * 10).limit(10);
                    total = await DepartmentModel.count({adminId: account_id});
                    ctx.body = {code: 1, msg: "查询成功", data: result, total};
                } else {
                    ctx.response.status = 404;
                    ctx.body = {code: -1, msg: "该账户无查询权限"};
                }
            })
            .catch(err => {
                ctx.response.status = err.status;
                ctx.body = err;
            });
    } else {
        ctx.response.status = 401;
        ctx.body = {code: -1, msg: "登录信息失效，账户id缺失"}
    }
});

function checkUserRole(id) {
    return new Promise(async (resolve, reject) => {
        let user = await UserModel.findById(account_id);
        if (user) {
            let {role} = user;
            resolve(role);
        } else {
            reject({code: -1, msg: "没有查询到该账户的有关信息", status: 404})
        }
    })
}

module.exports = router;