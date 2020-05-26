const schedule = require("node-schedule");
const ReviewOrderModel = require('../model/reviewOrder');
const md5 = require('../util/shunfengMD5');
const request = require('request')

async function orders() {
    let orders = await ReviewOrderModel.find({isError:1})
    for (let order of orders) {
        let result = await submit(order)
        if (result.type == 2) {
            await ReviewOrderModel.findByIdAndUpdate(order._id, {isError: 2, errorMsg: result.data})
        } else {
            await ReviewOrderModel.findByIdAndRemove(order._id)
        }
    }
}

async function submit(order) {
    let json = {
        Request: {
            $: {service: 'OrderService', lang: 'zh-CN'},
            Head: 'MXSBJKJ',
            Body: {
                Order: {
                    $: {
                        orderid: order.orderid,
                        j_company: order.j_company,
                        j_contact: order.j_contact,
                        j_tel: order.j_tel,
                        j_mobile: order.j_mobile,
                        j_province: order.j_province,
                        j_city: order.j_city,
                        j_county: order.j_county,
                        j_address: order.j_address,
                        d_company: order.d_company,
                        d_contact: order.d_contact,
                        d_tel: order.d_tel,
                        d_mobile: order.d_mobile,
                        d_province: order.d_province,
                        d_city: order.d_city,
                        d_county: order.d_county,
                        d_address: order.d_address,
                        custid: order.custid,
                        pay_method: order.pay_method,
                        express_type: order.express_type,
                        parcel_quantity: order.parcel_quantity,
                        cargo_length: order.cargo_length,
                        cargo_width: order.cargo_width,
                        cargo_height: order.cargo_height,
                        volume: order.volume,
                        cargo_total_weight: order.cargo_total_weight,
                        sendstarttime: order.sendstarttime,
                        is_docall: order.is_docall,
                        return_tracking: order.return_tracking,
                        temp_range: order.temp_range,
                        template: order.template,
                        remark: order.remark,
                        oneself_pickup_flg: order.oneself_pickup_flg,
                        special_delivery_type_code: order.special_delivery_type_code,
                        special_delivery_value: order.special_delivery_value,
                        realname_num: order.realname_num,
                        routelabelForReturn: order.routelabelForReturn,
                        routelabelService: order.routelabelService,
                        is_unified_waybill_no: order.is_unified_waybill_no
                    }
                }
            }
        }
    }
    let cargos = []
    for (let i of order.Cargo) {
        cargos.push({$: i})
    }
    json['Request']['Body']['Order']['Cargo'] = cargos

    if (order.AddedService.length > 0) {
        let addeds = []
        for (let j of order.AddedService) {
            addeds.push({$: j})
        }
        json['Request']['Body']['Order']['AddedService'] = {}
        json['Request']['Body']['Order']['AddedService'] = addeds
    }
    let xml = builder.buildObject(json)
    let str = md5(xml + checkword)
    let data = {
        form: {
            xml: xml,
            verifyCode: str
        }
    }
    return new Promise((resolve, reject) => {
        let url = "https://bsp-oisp.sf-express.com/bsp-oisp/sfexpressService"
        request.post(url, data, function (err, res, body) {
            parser.parseString(body, function (err1, result) {
                if (result.Response.ERROR) {
                    console.log(result.Response.ERROR[0])
                    resolve({type: 2, data: result.Response.ERROR[0]})
                } else {
                    console.log(result.Response.Body[0].OrderResponse[0], '----------------------Body')
                    resolve({type: 1, data: result.Response.Body[0].OrderResponse[0]})
                }
            })
        })
    })
}

var rule = new schedule.RecurrenceRule();
rule.hour = [11, 17]
var j = schedule.scheduleJob(rule, function () {
    orders()
});