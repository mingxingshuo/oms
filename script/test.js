const request = require('request')
const crypto = require("crypto");
const xml2js = require("xml2js");
const builder = new xml2js.Builder();
const parser = new xml2js.Parser();
const OrderModel = require('../model/Order');

async function a() {
    let b = await OrderModel.find({})
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
async function test() {
    let Cargo = [{name: 1, count: 1}, {name: 2, count: 2}, {name: 3, count: 3}]
    let xml = {
        Request: {
            $: {service: 'OrderService', lang: 'zh-CN'},
            Head: 'MXSBJKJ',
            Body: {
                Order: {
                    $: {
                        orderid: 'SF-001'
                    },
                    AddedService: {
                        $: {
                            name: 1,
                            value: 1,
                            value1: 1
                        }
                    }
                }
            }
        }
    }
    // xml['Request']['Body']['Order']['Cargo'] = {}
    // xml['Request']['Body']['Order']['Cargo']['$'] = {}
    let arr = []
    for(let i of Cargo){
        arr.push({$:i})
    }
    xml['Request']['Body']['Order']['Cargo'] = arr
    console.log(JSON.stringify(xml), '-------------------------json')
    xml = builder.buildObject(xml)
    console.log(xml, '-------------------------data')
}
// test()