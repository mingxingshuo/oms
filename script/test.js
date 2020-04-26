const http = require("../util/httpUtils");
const crypto = require("crypto");
const xml2js = require("xml2js");
const builder = new xml2js.Builder();
const parser = new xml2js.Parser();

function md5(str) {
    let md5 = crypto.createHash('md5');
    md5.update(str, "utf8");
    str = md5.digest('base64');
    return str
}

var checkword = "QE4CwVWGy1lBBIW5uoYFsZEwfyI7ScuU"

async function test() {
    let https_options = {
        hostname: 'bsp-oisp.sf-express.com',
        path: '/bsp-oisp/sfexpressService',
        method: 'post'
    };
    let xml = '<?xml version="1.0" encoding="UTF-8"?> ' +
        '<Request service="OrderService" lang="zh-CN"> ' +
        '<Head>MXSBJKJ</Head> ' +
        '<Body>' +
        '<Order' +
        ' j_address=北京市' +
        ' orderid=SF-001' +
        ' d_company=a' +
        ' d_contact=b' +
        ' d_tel=c' +
        ' d_address=北京市' +
        '></Order>' +
        '</Body> ' +
        '</Request>'
    console.log(xml, '-------------------------data')
    let str = md5(xml + checkword)
    console.log(str, '-------------------------str')
    let data = {
        xml: xml,
        verifyCode: str
    }
    let result = await http.doHttp_withdata(https_options, data);
    console.log(result, '-------------------------result')
}
test()