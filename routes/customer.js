const router = require('koa-router')();
const CustomerModel = require('../model/Customer');
const WechatModel = require('../model/Wechat');
const jwt = require("../util/jsonwebtoken");
router.prefix('/customer');

router.post('/', async(ctx, next) => {
    let {userWxId, userWxname, wxId, wxName, sex, d_contact, d_tel, d_mobile, d_province, d_city, d_county, d_address, source, type, remark} = ctx.request.body;
    let {token} = ctx.request.header;
    await jwt.checkToken(token)
        .then(async({parentId, username, _id}) => {
            let data = await CustomerModel.create({
                parentId: parentId,
                userId: _id,
                username: username,
                userWxId: userWxId,
                userWxname: userWxname,
                wxId,
                wxName,
                sex,
                d_contact,
                d_tel,
                d_mobile,
                d_province,
                d_city,
                d_county,
                d_address,
                source,
                type,
                remark,
                createAt: Date.now(),
                updateAt: Date.now()
            });
            if (data) {
                ctx.body = {code: 1, msg: '客户创建成功', data}
            } else {
                ctx.response.status = 400;
                ctx.body = {code: -1, msg: '客户创建失败，请重试'}
            }
        })
});

router.get('/', async(ctx, next) => {
    let {name, page} = ctx.query;
    let {token} = ctx.request.header;
    await jwt.checkToken(token)
        .then(async({parentId, role, _id}) => {
            let sql = {}
            if (role == 2) {
                sql['userId'] = _id
            }
            if (role == 0) {
                sql['parentId'] = parentId
            }
            if (name) {
                $or: [{wxName: {$regex: new RegExp(name)}}, {d_contact: {$regex: new RegExp(name)}}]
            }
            let result = await CustomerModel.find(sql).skip((page - 1) * 10).limit(10);
            let count = await CustomerModel.estimatedDocumentCount(sql);
            if (result.length > 0) {
                ctx.body = {code: 1, msg: '查询成功', data: result, count}
            } else {
                ctx.response.status = 404;
                ctx.body = {code: -1, msg: '没有查询到相关数据'}
            }
        })
});

router.put('/', async(ctx, next) => {
    let {userWxId, userWxname, id, wxId, wxName, sex, d_contact, d_tel, d_mobile, d_province, d_city, d_county, d_address, source, type, remark} = ctx.request.body;
    let {token} = ctx.request.header;
    await jwt.checkToken(token)
        .then(async({parentId, username, _id}) => {
            let data = await CustomerModel.findByIdAndUpdate(id, {
                parentId: parentId,
                userId: _id,
                username: username,
                userWxId: userWxId,
                userWxname: userWxname,
                wxId,
                wxName,
                sex,
                d_contact,
                d_tel,
                d_mobile,
                d_province,
                d_city,
                d_county,
                d_address,
                source,
                type,
                remark,
                createAt: Date.now(),
                updateAt: Date.now()
            }, {new: true});
            if (data) {
                ctx.body = {code: 1, msg: '修改成功', data}
            } else {
                ctx.response.status = 400;
                ctx.body = {code: -1, msg: '修改失败，请重试'}
            }
        })
});

router.delete('/', async(ctx, next) => {
    let {id} = ctx.query;
    let result = await CustomerModel.findByIdAndRemove(id);
    if (result) {
        ctx.body = {code: 1, msg: '删除成功'}
    } else {
        ctx.response.status = 400;
        ctx.body = {code: -1, msg: "删除失败"}
    }
});

module.exports = router;