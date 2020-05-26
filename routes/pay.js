const router = require('koa-router')();
const PayModel = require('../model/Pay.js');
const multer = require('koa-multer');

router.prefix('/customer');

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

router.post('/upload', upload.single('imageFile'), async (ctx, next) => {
    ctx.body = {image_url: ctx.req.file.filename};
});

router.post('/', async (ctx, next) => {
    let {orderid, type, balance, image_url} = ctx.request.body;
    let data = await PayModel.create({
        orderid,
        type,
        balance,
        image_url
    });
    if (data) {
        ctx.body = {code: 1, msg: '支付创建成功', data}
    } else {
        ctx.response.status = 400;
        ctx.body = {code: -1, msg: '支付创建失败，请重试'}
    }
});

router.get('/', async (ctx, next) => {
    let {page} = ctx.query, result, total;
    result = await PayModel.find().skip((page - 1) * 10).limit(10);
    total = await PayModel.count();
    if (result.length > 0) {
        ctx.body = {code: 1, msg: '查询成功', data: result, total}
    } else {
        ctx.response.status = 404;
        ctx.body = {code: -1, msg: '没有查询到相关数据'}
    }
});

router.put('/', async (ctx, next) => {
    let {orderid, type, balance, image_url} = ctx.request.body;
    let data = await PayModel.findByIdAndUpdate(_id, {
        orderid,
        type,
        balance,
        image_url
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
    let result = await PayModel.findByIdAndRemove(_id);
    if (result) {
        ctx.body = {code: 1, msg: '删除成功'}
    } else {
        ctx.response.status = 400;
        ctx.body = {code: -1, msg: "删除失败"}
    }
});

module.exports = router;