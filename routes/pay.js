const router = require('koa-router')();
const PayModel = require('../model/Pay.js');
const multer = require('koa-multer');
const checkHasAccountId = require("../util/checkHasAccountId");

router.prefix('/pay');

router.all("*", async (ctx, next) => {
    await checkHasAccountId(ctx, next);
});

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/../public/uploads/')
    },
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");
        cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
})
var upload = multer({storage: storage});

router.post('/upload', upload.single('imageFile'), async(ctx, next) => {
    ctx.body = {image_url: ctx.req.file.filename};
});

router.get('/', async(ctx, next) => {
    let {orderid} = ctx.query;
    let result = await PayModel.findById(orderid);
    if (result) {
        ctx.body = {code: 1, msg: '查询成功', data: result}
    } else {
        ctx.response.status = 404;
        ctx.body = {code: -1, msg: '没有查询到相关数据'}
    }
});

router.put('/', async(ctx, next) => {
    let {orderid, info, sum} = ctx.request.body;
    let data = await PayModel.findOneAndUpdate({orderid}, {
        orderid,
        info,
        sum
    }, {upsert: true, new: true});
    if (data) {
        ctx.body = {code: 1, msg: '修改成功', data}
    } else {
        ctx.response.status = 400;
        ctx.body = {code: -1, msg: '修改失败，请重试'}
    }
});

router.delete('/', async(ctx, next) => {
    let {_id} = ctx.query;
    let result = await PayModel.findByIdAndRemove(_id);
    if (result) {
        ctx.body = {code: 1, msg: '删除成功'}
    } else {
        ctx.response.status = 400;
        ctx.body = {code: -1, msg: "删除失败"}
    }
});

module.exports = router;