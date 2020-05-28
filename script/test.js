const request = require('request')
const crypto = require("crypto");
const xml2js = require("xml2js");
const builder = new xml2js.Builder();
const parser = new xml2js.Parser();
const OrderModel = require('../model/Order');

async function a() {
    // let b = await OrderModel.findByIdAndUpdate('5ebbed72b168fe5fe47c7545', {parentId: '5ec63dc9e3f98c7b166139e4', departmentId: '5ec75afbbb4be93d24a57897', userId: '5ea9557f1808c716481ee8b3'},{new:true})
    let b = await OrderModel.find()
    console.log(b, '---------------------b')
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
                    }
                }
            }
        }
    }
    // xml['Request']['Body']['Order']['Cargo'] = {}
    // xml['Request']['Body']['Order']['Cargo']['$'] = {}
    let arr = []
    for (let i of Cargo) {
        arr.push({$: i})
    }
    let AddedService = []
    xml['Request']['Body']['Order']['Cargo'] = arr
    let arr1 = []
    for (let j of AddedService) {
        arr1.push({$: j})
    }
    xml['Request']['Body']['Order']['AddedService'] = {}
    xml['Request']['Body']['Order']['AddedService'] = arr1
    console.log(JSON.stringify(xml), '-------------------------json')
    xml = builder.buildObject(xml)
    console.log(xml, '-------------------------data')
}
// test()