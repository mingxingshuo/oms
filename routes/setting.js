const router = require('koa-router')();
const SettingModel = require('../model/Setting.js');
const checkHasAccountId = require("../util/checkHasAccountId");
const jwt = require("../util/jsonwebtoken");

router.prefix('/setting');

router.all("*", async (ctx, next) => {
    await checkHasAccountId(ctx, next);
});

router.get('/', async (ctx, next) => {
    let {token} = ctx.request.header;
    await jwt.checkToken(token)
        .then(async ({role, parentId, _id}) => {
            if (role === 0 || role === 2) {
                let result = await SettingModel.findOne({parentId: role === 0 ? _id : parentId});
                if(result) {
                    ctx.body = {code: 1, msg: "查询成功", data: result};
                } else {
                    ctx.body = {code: -1, msg: "查询失败"};
                }
            } else {
                ctx.response.status = 403;
                ctx.body = {code: -1, msg: "该账户无操作权限"}
            }
        })
});

router.put('/', async (ctx, next) => {
    const {j_company, j_contact, j_tel, j_address, AddedService, custid} = ctx.request.body;
    let {token} = ctx.request.header;
    await jwt.checkToken(token)
        .then(async ({role, _id}) => {
            if (role === 0) {
                let message = {j_company, j_contact, j_tel, j_address, AddedService, custid};
                if(message.j_contact && message.j_tel && message.j_address) {
                    let result = await SettingModel.findOneAndUpdate({parentId: _id}, message, {upsert: true, new: true});
                    if(result) {
                        ctx.body = {code: 1, msg: "修改成功", data: result};
                    } else {
                        ctx.body = {code: -1, msg: "修改失败"};
                    }
                } else {
                    ctx.response.status = 400;
                    ctx.body = {code: -1, msg: "寄件人信息不能为空"};
                }
            } else {
                ctx.response.status = 403;
                ctx.body = {code: -1, msg: "该账户无操作权限"}
            }
        })
});

module.exports = router;