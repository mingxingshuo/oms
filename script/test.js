const request = require('request')
const crypto = require("crypto");
const xml2js = require("xml2js");
const builder = new xml2js.Builder();
const parser = new xml2js.Parser();
const OrderModel = require('../model/Order');
const ReviewOrderModel = require('../model/reviewOrder');
const PayModel = require('../model/Pay');
const fs = require('fs')

async function a() {
    // let b = await OrderModel.findByIdAndUpdate('5ebbed72b168fe5fe47c7545', {parentId: '5ec63dc9e3f98c7b166139e4', departmentId: '5ec75afbbb4be93d24a57897', userId: '5ea9557f1808c716481ee8b3'},{new:true})
    // let b = await OrderModel.update({userId:'5ea9557f1808c716481ee8b3'},{nickName:'测试'},{multi:true})
    // let b = await OrderModel.find({orderid:'GQ2020060315911716389840235'})
    // let b = await ReviewOrderModel.find()
    let b = await ReviewOrderModel.find({orderid:'GQ2020060215910815021700929'})
    // let b = await PayModel.findOneAndUpdate({orderid:'GQ2020051315893651260870224'}, {
    //     info:[{type: "代收收款", money: 11, url: ""}],
    //     sum:11
    // }, {upsert: true, new: true});
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
async function b() {
    let data = await OrderModel.find({parentId: '5ec63dc9e3f98c7b166139e4', isReview: 1}).sort({createAt:-1})
    let name = Date.now() + '.csv'
    const ws = fs.createWriteStream(__dirname + '/../public/data_file/' + name, {
        flags: 'w',
        highWaterMark: 2
    });
    ws.write("客户姓名,货品名称,货品数量,收货人姓名\r\n", () => {
    });
    for (let i of data) {
        ws.write(i.nickName + "," + i.Cargo[0].name + "," + i.Cargo[0].count + "," + i.j_contact + "\r\n", () => {
        });
        for (let j = 1; j < i.Cargo.length; j++) {
            ws.write(",," + i.Cargo[j]['name'] + "," + i.Cargo[j]['count'] + "\r\n", () => {
            });
        }
    }
}
// b()