const request = require('request')
const crypto = require("crypto");
const xml2js = require("xml2js");
const builder = new xml2js.Builder();
const parser = new xml2js.Parser();
const OrderModel = require('../model/Order');

async function a() {
    let b = await OrderModel.remove()
    console.log(b,'---------------------b')
}
a()
// function md5(str) {
//     let md5 = crypto.createHash('md5');
//     md5.update(str, "utf8");
//     str = md5.digest('base64');
//     return str
// }
//
// var checkword = "QE4CwVWGy1lBBIW5uoYFsZEwfyI7ScuU"
//
// async function test() {
//     let url = "https://bsp-oisp.sf-express.com/bsp-oisp/sfexpressService"
//     let xml = {
//         Request: {
//             $: {service: 'OrderService', lang: 'zh-CN'},
//             Head: 'MXSBJKJ',
//             Body: {
//                 Order: {
//                     $: {
//                         orderid: 'SF-001',
//                         j_tel: '111',
//                         j_address: '南京市',
//                         d_company: 'a',
//                         d_contact: 'b',
//                         d_tel: '111',
//                         d_address: '南京市',
//                         cargo: 'iphone 7 plus'
//                     }
//                 }
//             }
//         }
//     }
//     xml = builder.buildObject(xml)
//     console.log(xml, '-------------------------data')
//     let str = md5(xml + checkword)
//     let data = {
//         form: {
//             xml: xml,
//             verifyCode: str
//         }
//     }
//     request.post(url, data, function (err, res, body) {
//         console.log(body,'--------body')
//     })
// }
// test()