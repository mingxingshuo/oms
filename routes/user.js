const router = require('koa-router')();
const UserModel = require('../model/User.js');
const routers = require('../conf/router');
const checkHasAccountId = require("../util/checkHasAccountId");
const checkUserRole = require("../util/checkUserRole");

const salt = "QE4CwVWGy1lBBIW5uoYFsZEwfyI7ScuU";
const md5 = require('../util/encryptByMD5');

router.prefix('/user');

router.all("*", async (ctx, next) => {
    await checkHasAccountId(ctx, next);
});

router.post('/login', async (ctx, next) => {
    let {username, password} = ctx.request.body;
    let result = await UserModel.findOne({username});
    if (result && result._id && md5(md5(result.password + salt)) === password) {
        result.loginAt = Date.now();
        await result.save();
        result = result.toObject();
        const {role} = result;
        result.role = role === 9999999999 ? "后台管理员账号" : role === 0 ? "主账号" : role === 1 ? "管理账号" : "销售账号";
        delete result.password;
        ctx.body = {code: 1, msg: '登录成功', data: result, routers: routers[role.toString()]}
    } else {
        ctx.body = {code: -1, msg: '用户名或密码不正确'}
    }
});

router.post('/', async (ctx, next) => {
    let {account_id, username, password, role, remarks, nickName, power} = ctx.request.body;
    let result = await UserModel.find({username, parentId: account_id});
    if (result.length > 0) {
        ctx.body = {code: 2, msg: "该账户名已存在，请检查输入是否有误"}
    } else {
        await checkUserRole(account_id)
            .then(async userRole => {
                if(userRole === 9999999999 || userRole < role) {
                    let data = await UserModel.create({username, nickName, password, role, remarks, power, parentId: account_id});
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
            })
            .catch(err => {
                ctx.response.status = err.status;
                ctx.body = err;
            });
    }
});

router.get('/', async (ctx, next) => {
    let {account_id, username, page = 1} = ctx.query, result, total;
    await checkUserRole(account_id)
        .then(async role => {
            if(role === 0 || role === 9999999999) {
                if (username) {
                    result = await UserModel.find({username: {$regex: new RegExp(username)}, parentId: account_id}).skip((page - 1) * 10).limit(10);
                    total = await UserModel.estimatedDocumentCount({username: {$regex: new RegExp(username)}, parentId: account_id});
                    ctx.body = {code: 1, msg: '查询成功', data: result, total}
                } else {
                    result = await UserModel.find({parentId: account_id}).skip((page - 1) * 10).limit(10);
                    total = await UserModel.estimatedDocumentCount({parentId: account_id});
                    ctx.body = {code: 1, msg: "查询成功", data: result, total};
                }
            } else {
                ctx.response.status = 403;
                ctx.body = {code: -1, msg: '该账户无操作权限'}
            }
        })
        .catch(err => {
            ctx.response.status = err.status;
            ctx.body = err;
        });
});

router.put('/', async (ctx, next) => {
    let {id, username, password, remarks, account_id} = ctx.request.body;
    await checkUserRole(account_id)
        .then(async role => {
            if(role !== 1) {
                let updateAt = Date.now();
                let data = await UserModel.findByIdAndUpdate(id, {username, password, remarks, updateAt}, {new: true});
                if (data) {
                    ctx.body = {code: 1, msg: '用户信息修改成功', data}
                } else {
                    ctx.response.status = 400;
                    ctx.body = {code: -1, msg: '用户信息修改失败，请检查输入是否有误'}
                }
            } else {
                ctx.response.status = 403;
                ctx.body = {code: -1, msg: '该账户无操作权限'}
            }
        })
        .catch(err => {
            ctx.response.status = err.status;
            ctx.body = err;
        });
});

router.delete('/', async (ctx, next) => {
    let {_id, account_id} = ctx.query;
    await checkUserRole(account_id)
        .then(async role => {
            if(role === 0 || role === 9999999999) {
                let result = await UserModel.findByIdAndRemove(_id);
                if (result) {
                    ctx.body = {code: 1, msg: '删除成功'}
                } else {
                    ctx.response.status = 400;
                    ctx.body = {code: -1, msg: "删除失败"}
                }
            } else {
                ctx.response.status = 403;
                ctx.body = {code: -1, msg: '该账户无操作权限'}
            }
        })
        .catch(err => {
            ctx.response.status = err.status;
            ctx.body = err;
        });
});

// 测试接口 =========================== 后期删除
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

// 查询所有用户
router.get('/all', async (ctx, next) => {
    let result = await UserModel.find();
    if (result.length) {
        ctx.body = {code: 1, msg: '查询成功', result}
    } else {
        ctx.response.status = 404;
        ctx.body = {code: -1, msg: "查询失败"}
    }
});

// 修改父级
router.get('/updateParent', async (ctx, next) => {
   let {id} = ctx.query;
   let result = await UserModel.findByIdAndUpdate(id, {parentId: "5ec640687b0b607e83979798"}, {new: true});
   if(result) {
       ctx.body = {code: 1, msg: "修改成功", data: result}
   } else {
       ctx.body = {code: -1, msg: "修改失败"}
   }
});

// 按照权限删除数据
router.get('/deleteRole', async (ctx, next) => {
    let {role} = ctx.query;
    let result = await UserModel.remove({role});
    if (result) {
        ctx.body = {code: 1, msg: '删除成功', result}
    } else {
        ctx.response.status = 400;
        ctx.body = {code: -1, msg: "删除失败"}
    }
});

module.exports = router;