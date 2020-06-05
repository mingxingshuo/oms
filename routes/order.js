const router = require('koa-router')();
const request = require('request')
const crypto = require("crypto");
const xml2js = require("xml2js");
const builder = new xml2js.Builder();
const parser = new xml2js.Parser();
const md5 = require('../util/shunfengMD5');
const OrderModel = require('../model/Order');
const ReviewOrderModel = require('../model/reviewOrder');
const checkHasAccountId = require("../util/checkHasAccountId");
const jwt = require("../util/jsonwebtoken");
const fs = require('fs')

router.prefix('/order')

// router.all("*", async(ctx, next) => {
//     await checkHasAccountId(ctx, next);
// });

var checkword = "QE4CwVWGy1lBBIW5uoYFsZEwfyI7ScuU"

router.post('/create', async function (ctx, next) {
    let {
        customerId, orderid, j_company, j_contact, j_tel, j_mobile, j_province, j_city, j_county, j_address,
        d_company, d_contact, d_tel, d_mobile, d_province, d_city, d_county, d_address, custid,
        pay_method, express_type, parcel_quantity, cargo_length, cargo_width, cargo_height, volume,
        cargo_total_weight, sendstarttime, is_docall = 1, need_return_tracking_no, return_tracking,
        temp_range, template, remark, oneself_pickup_flg, special_delivery_type_code,
        special_delivery_value, realname_num, routelabelForReturn, routelabelService, is_unified_waybill_no
    } = ctx.request.body || ""
    let {Cargo = [], AddedService = []} = ctx.request.body
    let {token} = ctx.request.header;
    await jwt.checkToken(token)
        .then(async({parentId, departmentId, nickName, _id, role}) => {
            if (role === 2) {
                let body = await OrderModel.create({
                    parentId: parentId,
                    departmentId: departmentId,
                    userId: _id,
                    nickName: nickName,
                    customerId,
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
            } else {
                ctx.response.status = 403;
                ctx.body = {code: -1, msg: "该账户无操作权限"}
            }
        })
})

router.post('/update', async function (ctx, next) {
    let {
        id, orderid, j_company, j_contact, j_tel, j_mobile, j_province, j_city, j_county, j_address,
        d_company, d_contact, d_tel, d_mobile, d_province, d_city, d_county, d_address, custid,
        pay_method, express_type, parcel_quantity, cargo_length, cargo_width, cargo_height, volume,
        cargo_total_weight, sendstarttime, is_docall = 1, need_return_tracking_no, return_tracking,
        temp_range, template, remark, oneself_pickup_flg, special_delivery_type_code,
        special_delivery_value, realname_num, routelabelForReturn, routelabelService, is_unified_waybill_no
    } = ctx.request.body || ""
    let {Cargo = [], AddedService = []} = ctx.request.body
    let {token} = ctx.request.header;
    await jwt.checkToken(token)
        .then(async({role}) => {
            if (role === 2) {
                let body = await OrderModel.findByIdAndUpdate(id, {
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
                    updateAt: Date.now()
                })
                if (body) {
                    ctx.body = {code: 1, msg: '订单修改成功'}
                } else {
                    ctx.response.status = 400;
                    ctx.body = {code: -1, msg: '订单修改失败，请重试'}
                }
            } else {
                ctx.response.status = 403;
                ctx.body = {code: -1, msg: "该账户无操作权限"}
            }
        })
})

router.get('/del', async(ctx, next) => {
    let {id} = ctx.query;
    let result = await OrderModel.findByIdAndRemove(id);
    if (result) {
        ctx.body = {code: 1, msg: '删除成功'}
    } else {
        ctx.response.status = 400;
        ctx.body = {code: -1, msg: "删除失败"}
    }
});

router.get('/review', async function (ctx, next) {
    let orderid = ctx.request.query.orderid
    let order = await OrderModel.findOneAndUpdate({orderid: orderid}, {isReview: 1})
    if (order) {
        order = order.toObject()
        delete order._id;
        let result = await ReviewOrderModel.create(order)
        if (result) {
            ctx.body = {code: 1, msg: '提交审核成功'}
        } else {
            ctx.response.status = 400;
            ctx.body = {code: -1, msg: "提交审核失败"}
            await OrderModel.findOneAndUpdate({orderid: orderid}, {isReview: 0})
        }
    } else {
        ctx.response.status = 400;
        ctx.body = {code: -1, msg: "找不到该订单"}
    }
})


router.get('/find', async function (ctx, next) {
    let {csv = '', userId, isReview, isSub, orderid, customerId, page = 1} = ctx.request.query;
    let {token} = ctx.request.header;
    await jwt.checkToken(token)
        .then(async({role, parentId, departmentId, _id}) => {
            if (role || role === 0) {
                let sql = {dealtype: {$ne: 2}}, sort
                if (role === 0) {
                    sql['parentId'] = _id
                    sql['isReview'] = 1
                    sort = {updateAt: -1}
                }
                if (role === 1) {
                    sql['departmentId'] = departmentId
                    sort = {isReview: 1, updateAt: -1}
                }
                if (role === 2) {
                    sql['userId'] = _id
                    sort = {isReview: 1, updateAt: -1}
                }
                if (orderid) {
                    sql['orderid'] = orderid
                }
                if (userId) {
                    sql['userId'] = userId
                }
                if (isReview) {
                    sql['isReview'] = isReview
                }
                if (isSub) {
                    sql['isSub'] = isSub
                }
                if (customerId) {
                    sql['customerId'] = customerId
                    sort = {updateAt: -1}
                }
                if (csv) {
                    let data = await OrderModel.find(sql).sort(sort)
                    let name = Date.now() + '.csv'
                    const ws = fs.createWriteStream(__dirname + '/../public/data_file/' + name, {
                        flags: 'w',
                        highWaterMark: 2
                    });
                    ws.write("客户姓名,顺丰运单号,货品名称,货品数量,订单状态,下单状态,寄件人公司名称,寄件人姓名,寄件人联系电话,寄件人详细地址,收件人公司名称,收件人姓名,收件人联系电话,收件人详细地址,是否代收货款,代收货款金额,代收货款卡号,下单时间,最近一次修改,上门取件时间\r\n", () => {
                    });
                    for (let i of data) {
                        let mailno = i.mailno
                        if (!mailno) {
                            mailno = "下单后即可生成运单号"
                        }
                        let isReview = "未审核"
                        if (i.isReview) {
                            isReview = "已审核"
                        }
                        let isSub = "未下单"
                        if (i.isSub) {
                            isSub = "已下单"
                        }
                        let cod = "否"
                        let cod_count = 0
                        let cod_card = 0
                        if (i.AddedService.length > 0) {
                            cod = "是"
                            cod_count = i.AddedService[0].value
                            cod_card = i.AddedService[0].value1
                        }
                        ws.write(i.nickName + "," + mailno + ","  + i.Cargo[0].name + "," + i.Cargo[0].count + ","+ isReview + "," + isSub + "," + i.j_company + "," + i.j_contact + "," + i.j_tel + "," + i.j_address + "," + i.d_company + "," + i.d_contact + "," + i.d_tel + "," + i.d_address + "," + cod + "," + cod_count + "," + cod_card + "," + getDay(i.createAt) + "," + getDay(i.updateAt) + "," + getDay(i.sendstarttime) + "\r\n", () => {
                        });
                        for (let j = 1; j < i.Cargo.length; j++) {
                            ws.write(",," + i.Cargo[j]['name'] + "," + i.Cargo[j]['count'] + "\r\n", () => {
                            });
                        }
                    }
                    ws.end('')
                    ctx.set('Content-disposition', 'attachment; filename=' + name);
                    ctx.body = ({url: 'http://n.nyzda.top/data_file/' + name});
                } else {
                    console.log(sql, '---------------------sql')
                    let orders = await OrderModel.find(sql).skip((page - 1) * 10).limit(10).sort(sort)
                    let count = await OrderModel.count(sql)
                    if (orders.length > 0) {
                        ctx.body = {code: 1, msg: '查询成功', data: orders, count: count}
                    } else {
                        ctx.response.status = 404;
                        ctx.body = {code: -1, msg: '没有查询到相关数据'}
                    }
                }
            } else {
                ctx.response.status = 403;
                ctx.body = {code: -1, msg: "该账户无操作权限"}
            }
        })
})

router.get('/OrderSearch', async function (ctx, next) {
    let {orderid, search_type} = ctx.request.query || ""
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
    let result = await req(data)
    if (result.type == 2) {
        ctx.body = {code: 1, msg: '查询成功', data: result.data.$}
    } else {
        ctx.body = {code: -1, msg: result.data._}
    }
})

router.get('/confirm', async function (ctx, next) {
    let {orderid, mailno, dealtype, customs_batchs, agent_no, consign_emp_code, source_zone_code, in_process_waybill_no} = ctx.request.query || ""
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
    let result = await req(data);
    console.log(result, "result-----------------------取消订单打印");
    // 添加订单状态的判断
    if (result.type === 1 && result.data.$.code === '8060') { // 订单已签收
        ctx.body = {code: -1, msg: result.data._}
    } else {
        await OrderModel.update({orderid: orderid}, {dealtype: dealtype});
        ctx.body = {code: 1, msg: '确认或取消成功', data: result.data}
    }
})

router.get('/route', async function (ctx, next) {
    let {tracking_type, tracking_number, method_type, reference_number, check_phoneNo} = ctx.request.query || ""
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
    let result = await req(data)
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

function getDay(time) {
    let date = new Date(time)
    let weekArray = new Array("日", "一", "二", "三", "四", "五", "六")
    let week = weekArray[date.getDay()]
    let str = date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日 星期" + week + " " + (date.getHours() > 10 ? date.getHours() : '0' + date.getHours()) + ':' + (date.getMinutes() > 10 ? date.getMinutes() : '0' + date.getMinutes())
    return str;
}

function req(data) {
    return new Promise((resolve, reject) => {
        let url = "https://bsp-oisp.sf-express.com/bsp-oisp/sfexpressService"
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