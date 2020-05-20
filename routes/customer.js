const router = require('koa-router')();
const CustomerModel = require('../model/Customer.js');
const routers = require('../conf/router');
router.prefix('/customer');

router.post('/', async(ctx, next) => {
    let {account_id, nickName, wxId, wxName} = ctx.request.body;
    let data = await CustomerModel.findOneAndUpdate({wxId: wxId}, {account_id, nickName, wxId, wxName}, {
        upsert: true,
        new: true
    });
    if (data) {
        ctx.body = {code: 1, msg: '用户创建成功', data}
    } else {
        ctx.response.status = 400;
        ctx.body = {code: -1, msg: '用户创建失败，请重试'}
    }
});

router.get('/', async(ctx, next) => {
    let {page} = ctx.query, result, total;
    let result = await CustomerModel.find().skip((page - 1) * 10).limit(10);
    let total = await CustomerModel.count();
    if (result.length > 0) {
        ctx.body = {code: 1, msg: '查询成功', data: result, total}
    } else {
        ctx.response.status = 404;
        ctx.body = {code: -1, msg: '没有查询到相关数据'}
    }
});

router.put('/', async(ctx, next) => {
    let {_id, nickName, wxId, wxName} = ctx.request.body;
    let updateAt = Date.now();
    let data = await CustomerModel.findByIdAndUpdate(_id, {nickName, wxId, wxName}, {new: true});
    if (data) {
        ctx.body = {code: 1, msg: '修改成功', data}
    } else {
        ctx.response.status = 400;
        ctx.body = {code: -1, msg: '修改失败，请重试'}
    }
});

router.delete('/', async(ctx, next) => {
    let {_id} = ctx.query;
    let result = await CustomerModel.findByIdAndRemove(_id);
    if (result) {
        ctx.body = {code: 1, msg: '删除成功'}
    } else {
        ctx.response.status = 400;
        ctx.body = {code: -1, msg: "删除失败"}
    }
});

module.exports = router;