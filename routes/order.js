const router = require('koa-router')();
const http = require("../util/httpUtils");
const crypto = require("crypto");

router.prefix('/order')

var checkword = "QE4CwVWGy1lBBIW5uoYFsZEwfyI7ScuU"

router.get('/create', async function (ctx, next) {
    let {orderid, d_company, d_contact, d_tel, d_address} = ctx.request.query
    let https_options = {
        hostname: 'bsp-oisp.sf-express.com',
        path: '/bsp-oisp/sfexpressService',
        method: 'post'
    };
    let xml = '<?xml version="1.0" encoding="UTF-8"?> ' +
        '<Request service="明星说" lang="zh-CN"> ' +
        '<Head>MXSBJKJ</Head> ' +
        '<Body>' +
        '<Order ' +
        'orderid=' + orderid +
        ' d_company=' + d_company +
        ' d_contact=' + d_contact +
        ' d_tel=' + d_tel +
        ' d_address=' + d_address +
        '></Order>' +
        '</Body> ' +
        '</Request>'
    console.log(xml, '-------------------------data')
    let str = md5(xml + checkword)
    console.log(str, '-------------------------str')
    let base = Buffer.from(str).toString('base64')
    console.log(base, '-------------------------base')
    let data = {
        xml: xml,
        verifyCode: base
    }
    console.log(data, '-------------------------data')
    let result = await http.doHttp_withdata(https_options, data);
    console.log(result, '-------------------------result')
})

function md5(str) {
    let md5 = crypto.createHash('md5');
    md5.update(str, "utf8");
    str = md5.digest('base64');
    console.log(str, '-------------------------str1')
    str = str.substr(8, 16)
    console.log(str, '-------------------------str2')
    return str
}

module.exports = router;