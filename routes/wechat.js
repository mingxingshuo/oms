const router = require('koa-router')();
const WechatModel = require('../model/Wechat.js');
const checkUserRole = require("../util/checkUserRole");
router.prefix('/wechat');

router.get('/', async (ctx, next) => {
    let {account_id, page = 1} = ctx.query, result, total;
    if (account_id) {
        checkUserRole(account_id)
            .then(async role => {
                if (role === 0) {
                    result = await WechatModel.find({parentId: account_id}).skip((page - 1) * 10).limit(10);
                    total = await WechatModel.count({parentId: account_id});
                    ctx.body = {code: 1, msg: "查询成功", data: result, total};
                } else if(role === 2) {
                    result = await WechatModel.find({userId: account_id}).skip((page - 1) * 10).limit(10);
                    total = await WechatModel.count({userId: account_id});
                    ctx.body = {code: 1, msg: "查询成功", data: result, total};
                } else {
                    ctx.response.status = 403;
                    ctx.body = {code: -1, msg: "该账户无操作权限"}
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

router.post('/', async (ctx, next) => {
    let {account_id, wechatId, nickName, remarks} = ctx.request.body;
    let result = await WechatModel.find({wechatId, parentId: account_id});
    if (result.length > 0) {
        ctx.body = {code: 2, msg: "该微信号已存在，请添加新的微信号", data: result}
    } else {
        if(account_id) {
            checkUserRole(account_id)
                .then(async role => {
                    if (role === 0) {
                        let data = await WechatModel.create({wechatId, nickName, remarks, parentId: account_id});
                        if (data) {
                            ctx.body = {code: 1, msg: '微信号添加成功', data}
                        } else {
                            ctx.response.status = 400;
                            ctx.body = {code: -1, msg: '微信号添加失败，请检查输入是否有误'}
                        }
                    } else {
                        ctx.response.status = 403;
                        ctx.body = {code: -1, msg: "该账户无操作权限"}
                    }
                })
                .catch(err => {
                    ctx.response.status = err.status;
                    ctx.body = err;
                });
        } else {
            ctx.response.status = 401;
            ctx.body = {code: -1, msg: '登录信息失效，请重新登录'}
        }
    }
});

router.put('/', async (ctx, next) => {
    let {wechatId, nickName, remarks, _id} = ctx.request.body;
    let updateAt = Date.now();
    let data = await WechatModel.findByIdAndUpdate(_id, {wechatId, nickName, remarks, updateAt}, {new: true});
    if (data) {
        ctx.body = {code: 1, msg: '修改成功', data}
    } else {
        ctx.response.status = 400;
        ctx.body = {code: -1, msg: '修改失败，请检查输入是否有误'}
    }
});

router.delete('/', async (ctx, next) => {
    let {_id} = ctx.query;
    let result = await WechatModel.findByIdAndRemove(_id);
    if (result) {
        ctx.body = {code: 1, msg: '删除成功', data: result}
    } else {
        ctx.response.status = 400;
        ctx.body = {code: -1, msg: "删除失败"}
    }
});

module.exports = router;