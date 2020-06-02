const router = require('koa-router')();
const WechatModel = require('../model/Wechat.js');
const checkHasAccountId = require("../util/checkHasAccountId");
const jwt = require("../util/jsonwebtoken");

router.prefix('/wechat');

router.all("*", async (ctx, next) => {
    await checkHasAccountId(ctx, next);
});

router.get('/', async (ctx, next) => {
    let {page = 1} = ctx.query, result, total;
    let {token} = ctx.request.header;
    await jwt.checkToken(token)
        .then(async ({role, _id}) => {
            if (role === 0) {
                result = await WechatModel.find({parentId: _id}).skip((page - 1) * 10).limit(10);
                total = await WechatModel.estimatedDocumentCount({parentId: _id});
                ctx.body = {code: 1, msg: "查询成功", data: result, total};
            } else if (role === 2) {
                result = await WechatModel.find({userId: _id});
                ctx.body = {code: 1, msg: "查询成功", data: result, total: result.length};
            } else {
                ctx.response.status = 403;
                ctx.body = {code: -1, msg: "该账户无操作权限"}
            }
        })
});

router.post('/', async (ctx, next) => {
    let {wechatId, nickName, remarks} = ctx.request.body;
    let result = await WechatModel.find({wechatId});
    if (result.length > 0) {
        ctx.body = {code: 2, msg: "该微信号已存在，请添加新的微信号", data: result}
    } else {
        let {token} = ctx.request.header;
        await jwt.checkToken(token)
            .then(async ({role, _id}) => {
                if (role === 0) {
                    let data = await WechatModel.create({wechatId, nickName, remarks, parentId: _id});
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
    }
});

router.put('/', async (ctx, next) => {
    let {wechatId, nickName, remarks, _id} = ctx.request.body;
    let {token} = ctx.request.header;
    await jwt.checkToken(token)
        .then(async ({role, _id: account_id}) => {
            if (role === 0) {
                let updateAt = Date.now();
                let data = await WechatModel.findByIdAndUpdate(_id, {
                    wechatId,
                    nickName,
                    remarks,
                    updateAt,
                    parentId: account_id
                }, {new: true});
                if (data) {
                    ctx.body = {code: 1, msg: '修改成功', data}
                } else {
                    ctx.response.status = 400;
                    ctx.body = {code: -1, msg: '修改失败，请检查输入是否有误'}
                }
            } else {
                ctx.response.status = 403;
                ctx.body = {code: -1, msg: "该账户无操作权限"}
            }
        })
});

router.put('/setUser', async (ctx, next) => {
    let {userId, userName, _ids} = ctx.request.body;
    let {token} = ctx.request.header;
    await jwt.checkToken(token)
        .then(async ({role}) => {
            if (role === 0) {
                let updateAt = Date.now();
                let data = await WechatModel.updateMany({_id: {$in: _ids}}, {userId, userName, updateAt}, {new: true});
                if (data) {
                    ctx.body = {code: 1, msg: '修改成功', data}
                } else {
                    ctx.response.status = 400;
                    ctx.body = {code: -1, msg: '修改失败，请检查输入是否有误'}
                }
            } else {
                ctx.response.status = 403;
                ctx.body = {code: -1, msg: "该账户无操作权限"}
            }
        })
});

router.delete('/', async (ctx, next) => {
    let {_id} = ctx.query;
    let {token} = ctx.request.header;
    await jwt.checkToken(token)
        .then(async ({role}) => {
            if (role === 0) {
                let result = await WechatModel.findByIdAndRemove(_id);
                if (result) {
                    ctx.body = {code: 1, msg: '删除成功', data: result}
                } else {
                    ctx.response.status = 400;
                    ctx.body = {code: -1, msg: "删除失败"}
                }
            } else {
                ctx.response.status = 403;
                ctx.body = {code: -1, msg: "该账户无操作权限"}
            }
        })
});

module.exports = router;