const router = require('koa-router')();
const CustomerModel = require('../model/Customer.js');
router.prefix('/customer');

router.post('/', async (ctx, next) => {
    let {account_id, wechatId, wxId, sex, d_contact, d_tel, d_mobile, d_province, d_city, d_county, d_address, source, type, remark} = ctx.request.body;
    let data = await CustomerModel.create({
        account_id,
        wechatId,
        wxId,
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
});

router.get('/', async (ctx, next) => {
    let {page} = ctx.query, result, total;
    result = await CustomerModel.find().skip((page - 1) * 10).limit(10);
    total = await CustomerModel.count();
    if (result.length > 0) {
        ctx.body = {code: 1, msg: '查询成功', data: result, total}
    } else {
        ctx.response.status = 404;
        ctx.body = {code: -1, msg: '没有查询到相关数据'}
    }
});

router.put('/', async (ctx, next) => {
    let {account_id, wechatId, wxId, sex, d_contact, d_tel, d_mobile, d_province, d_city, d_county, d_address, source, type, remark} = ctx.request.body;
    let data = await CustomerModel.findByIdAndUpdate(_id, {
        account_id,
        wechatId,
        wxId,
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
        updateAt: Date.now()
    }, {new: true});
    if (data) {
        ctx.body = {code: 1, msg: '修改成功', data}
    } else {
        ctx.response.status = 400;
        ctx.body = {code: -1, msg: '修改失败，请重试'}
    }
});

router.delete('/', async (ctx, next) => {
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