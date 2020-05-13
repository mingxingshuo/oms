const router = require('koa-router')();
const request = require('request')
const crypto = require("crypto");
const xml2js = require("xml2js");
const builder = new xml2js.Builder();
const parser = new xml2js.Parser();
const OrderModel = require('../model/Order');

router.prefix('/order')

var checkword = "QE4CwVWGy1lBBIW5uoYFsZEwfyI7ScuU"

router.post('/create', async function (ctx, next) {
    let {
        account_id, orderid, j_company, j_contact, j_tel, j_mobile, j_province, j_city, j_county, j_address,
        d_company, d_contact, d_tel, d_mobile, d_province, d_city, d_county, d_address, custid,
        pay_method, express_type, parcel_quantity, cargo_length, cargo_width, cargo_height, volume,
        cargo_total_weight, sendstarttime, is_docall = 1, need_return_tracking_no, return_tracking,
        temp_range, template, remark, oneself_pickup_flg, special_delivery_type_code,
        special_delivery_value, realname_num, routelabelForReturn, routelabelService, is_unified_waybill_no
    } = ctx.request.body || ""
    let {Cargo = [], AddedService = []} = ctx.request.body
    let body = await OrderModel.create({
        account_id,
        orderid,
        j_company,
        j_contact,
        j_tel,
        j_mobile,
        j_province,
        j_city,
        j_county,
        j_address,
        d_company,
        d_contact,
        d_tel,
        d_mobile,
        d_province,
        d_city,
        d_county,
        d_address,
        custid,
        pay_method,
        express_type,
        parcel_quantity,
        cargo_length,
        cargo_width,
        cargo_height,
        volume,
        cargo_total_weight,
        sendstarttime,
        is_docall,
        need_return_tracking_no,
        return_tracking,
        temp_range,
        template,
        remark,
        oneself_pickup_flg,
        special_delivery_type_code,
        special_delivery_value,
        realname_num,
        routelabelForReturn,
        routelabelService,
        is_unified_waybill_no,
        Cargo,
        AddedService,
        createAt: Date.now(),
        updateAt: Date.now()
    })
    if (body) {
        ctx.body = {code: 1, msg: '订单创建成功'}
    } else {
        ctx.response.status = 400;
        ctx.body = {code: -1, msg: '订单创建失败，请重试'}
    }
})

router.get('/submit', async function (ctx, next) {
    let orderid = ctx.request.query.orderid
    let order = await OrderModel.findOne({orderid: orderid})
    let url = "https://bsp-oisp.sf-express.com/bsp-oisp/sfexpressService"
    let xml = {
        Request: {
            $: {service: 'OrderService', lang: 'zh-CN'},
            Head: 'MXSBJKJ',
            Body: {
                Order: {
                    $: {
                        orderid: orderid,
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
    xml['Request']['Body']['Order']['Cargo'] = cargos

    if (order.AddedService.length > 0) {
        let addeds = []
        for (let j of order.AddedService) {
            addeds.push({$: j})
        }
        xml['Request']['Body']['Order']['AddedService'] = {}
        xml['Request']['Body']['Order']['AddedService'] = addeds
    }
    console.log(JSON.stringify(xml), '-----------------------json')
    xml = builder.buildObject(xml)
    console.log(xml, '-----------------------xml')
    let str = md5(xml + checkword)
    let data = {
        form: {
            xml: xml,
            verifyCode: str
        }
    }
    let result = await req(url, data)
    console.log(JSON.stringify(result), '-------------------------result')
    let mailno = result['data']['$']['mailno']
    await OrderModel.update({orderid: ordeerid}, {mailno: mailno})
    if (result.type == 2) {
        ctx.body = {code: 1, msg: '订单提交成功'}
    } else {
        ctx.body = {code: -1, msg: result.data._}
    }
})

router.get('/find', async function (ctx, next) {
    let {account_id, page = 1} = ctx.request.query;
    let orders = await OrderModel.find({account_id: account_id}).skip((page - 1) * 10).limit(10)
    let count = await OrderModel.count({account_id: account_id})
    if (orders.length > 0) {
        ctx.body = {code: 1, msg: '查询成功', data: orders, count: count}
    } else {
        ctx.response.status = 404;
        ctx.body = {code: -1, msg: '没有查询到相关数据'}
    }
})

router.get('/findOne', async function (ctx, next) {
    let {orderid} = ctx.request.query;
    let order = await OrderModel.find({orderid: orderid})
    if (order.length > 0) {
        ctx.body = {code: 1, msg: '查询成功', data: order}
    } else {
        ctx.response.status = 404;
        ctx.body = {code: -1, msg: '没有查询到相关数据'}
    }
})

router.get('/OrderSearch', async function (ctx, next) {
    let {orderid, search_type} = ctx.request.query || ""
    let url = "https://bsp-oisp.sf-express.com/bsp-oisp/sfexpressService"
    let xml = {
        Request: {
            $: {service: 'OrderSearchService', lang: 'zh-CN'},
            Head: 'MXSBJKJ',
            Body: {
                OrderSearch: {
                    $: {
                        orderid: orderid,
                        search_type: search_type
                    }
                }
            }
        }
    }
    xml = builder.buildObject(xml)
    let str = md5(xml + checkword)
    let data = {
        form: {
            xml: xml,
            verifyCode: str
        }
    }
    let result = await req(url, data)
    if (result.type == 2) {
        ctx.body = {code: 1, msg: '查询成功', data: result.data.$}
    } else {
        ctx.body = {code: -1, msg: result.data._}
    }
})

router.get('/confirm', async function (ctx, next) {
    let {orderid, mailno, dealtype, customs_batchs, agent_no, consign_emp_code, source_zone_code, in_process_waybill_no} = ctx.request.query || ""
    let url = "https://bsp-oisp.sf-express.com/bsp-oisp/sfexpressService"
    let xml = {
        Request: {
            $: {service: 'OrderConfirmService', lang: 'zh-CN'},
            Head: 'MXSBJKJ',
            Body: {
                OrderConfirm: {
                    $: {
                        orderid: orderid,
                        mailno: mailno,
                        dealtype: dealtype,
                        customs_batchs: customs_batchs,
                        agent_no: agent_no,
                        consign_emp_code: consign_emp_code,
                        source_zone_code: source_zone_code,
                        in_process_waybill_no: in_process_waybill_no
                    }
                }
            }
        }
    }
    xml = builder.buildObject(xml)
    let str = md5(xml + checkword)
    let data = {
        form: {
            xml: xml,
            verifyCode: str
        }
    }
    let result = await req(url, data)
    await OrderModel.update({orderid: orderid}, {dealtype: dealtype})
    ctx.body = {code: 1, msg: '确认或取消成功', data: result.data}
})

router.get('/route', async function (ctx, next) {
    let {tracking_type, tracking_number, method_type, reference_number, check_phoneNo} = ctx.request.query || ""
    let url = "https://bsp-oisp.sf-express.com/bsp-oisp/sfexpressService"
    let xml = {
        Request: {
            $: {service: 'RouteService', lang: 'zh-CN'},
            Head: 'MXSBJKJ',
            Body: {
                RouteRequest: {
                    $: {
                        tracking_type: tracking_type,
                        tracking_number: tracking_number,
                        method_type: method_type,
                        reference_number: reference_number,
                        check_phoneNo: check_phoneNo
                    }
                }
            }
        }
    }
    xml = builder.buildObject(xml)
    let str = md5(xml + checkword)
    let data = {
        form: {
            xml: xml,
            verifyCode: str
        }
    }
    let result = await req(url, data)
    if (result.type == 2) {
        ctx.body = {code: 1, msg: '查询成功', data: result.data}
    } else {
        ctx.body = {code: -1, msg: result.data}
    }
})

router.post('/OrderState', async function (ctx, next) {
    // console.log(ctx.request.body, '-------------------body')
    var buf = "";
    ctx.req.setEncoding('utf8');
    ctx.req.on('data', function (chunk) {
        buf += chunk;
    });
    ctx.req.on('end', function () {
        parser.parseString(buf, async function (err, data) {
            if (err) {
                console.log(err, ' 订单状态返回错误');
            } else {
                console.log(data, ' 订单状态返回成功');
                let result = data.Request
                await OrderModel.update({orderid: result.orderNo[0]}, {
                    orderStateCode: result.orderStateCode[0],
                    orderStateDesc: result.orderStateDesc[0]
                })
            }
        });
    });
    ctx.body = '<?xml version="1.0" encoding="UTF-8" ?> <Response> <success>true</success> </Response>'
})

function md5(str) {
    let md5 = crypto.createHash('md5');
    md5.update(str, "utf8");
    str = md5.digest('base64');
    return str
}

function req(url, data) {
    return new Promise((resolve, reject) => {
        request.post(url, data, function (err, res, body) {
            parser.parseString(body, function (err1, result) {
                if (result.Response.ERROR) {
                    resolve({type: 1, data: result.Response.ERROR[0]})
                } else {
                    console.log(JSON.stringify(result.Response.Body), '----------------------Body')
                    if (JSON.stringify(result.Response.Body[0]).indexOf('OrderResponse') != -1) {
                        resolve({type: 2, data: result.Response.Body[0].OrderResponse[0]})
                    } else if (JSON.stringify(result.Response.Body[0]).indexOf('OrderConfirmResponse') != -1) {
                        resolve({type: 2, data: result.Response.Body[0].OrderConfirmResponse[0]})
                    } else if (JSON.stringify(result.Response.Body[0]).indexOf('RouteResponse') != -1) {
                        if (result.Response.Body[0] && result.Response.Body[0].RouteResponse && result.Response.Body[0].RouteResponse[0].Route) {
                            let arr = []
                            for (let i of result.Response.Body[0].RouteResponse[0].Route) {
                                arr.push(i.$)
                            }
                            resolve({type: 2, data: arr})
                        } else {
                            resolve({type: 1, data: "没有查询到该订单的物流信息"})
                        }
                    } else {
                        resolve({type: 1, data: "请求错误"})
                    }
                }
            })
        })
    })
}

module.exports = router;