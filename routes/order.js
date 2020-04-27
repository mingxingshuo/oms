const router = require('koa-router')();
const request = require('request')
const crypto = require("crypto");
const xml2js = require("xml2js");
const builder = new xml2js.Builder();
const parser = new xml2js.Parser();

router.prefix('/order')

var checkword = "QE4CwVWGy1lBBIW5uoYFsZEwfyI7ScuU"

router.get('/create', async function (ctx, next) {
    let {
        orderid, mailno, j_company, j_contact, j_tel, j_mobile, j_province, j_city, j_county, j_address,
        d_company, d_contact, d_tel, d_mobile, d_province, d_city, d_county, d_address, custid,
        pay_method, express_type, parcel_quantity, cargo_length, cargo_width, cargo_height, volume,
        cargo_total_weight, sendstarttime, is_docall, need_return_tracking_no, return_tracking,
        temp_range, template, remark, oneself_pickup_flg, special_delivery_type_code,
        special_delivery_value, realname_num, routelabelForReturn, routelabelService, is_unified_waybill_no
    } = ctx.request.query || ""
    let url = "https://bsp-oisp.sf-express.com/bsp-oisp/sfexpressService"
    let xml = {
        Request: {
            $: {service: 'OrderService', lang: 'zh-CN'},
            Head: 'MXSBJKJ',
            Body: {
                Order: {
                    $: {
                        orderid: orderid,
                        mailno: mailno,
                        j_company: j_company,
                        j_contact: j_contact,
                        j_tel: j_tel,
                        j_mobile: j_mobile,
                        j_province: j_province,
                        j_city: j_city,
                        j_county: j_county,
                        j_address: j_address,
                        d_company: d_company,
                        d_contact: d_contact,
                        d_tel: d_tel,
                        d_mobile: d_mobile,
                        d_province: d_province,
                        d_city: d_city,
                        d_county: d_county,
                        d_address: d_address,
                        custid: custid,
                        pay_method: pay_method,
                        express_type: express_type,
                        parcel_quantity: parcel_quantity,
                        cargo_length: cargo_length,
                        cargo_width: cargo_width,
                        cargo_height: cargo_height,
                        volume: volume,
                        cargo_total_weight: cargo_total_weight,
                        sendstarttime: sendstarttime,
                        is_docall: is_docall,
                        need_return_tracking_no: need_return_tracking_no,
                        return_tracking: return_tracking,
                        temp_range: temp_range,
                        template: template,
                        remark: remark,
                        oneself_pickup_flg: oneself_pickup_flg,
                        special_delivery_type_code: special_delivery_type_code,
                        special_delivery_value: special_delivery_value,
                        realname_num: realname_num,
                        routelabelForReturn: routelabelForReturn,
                        routelabelService: routelabelService,
                        is_unified_waybill_no: is_unified_waybill_no
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
    ctx.body = result
})

router.get('/findOne', async function (ctx, next) {
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
    ctx.body = result
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
                        mailno:mailno,
                        dealtype:dealtype,
                        customs_batchs:customs_batchs,
                        agent_no:agent_no,
                        consign_emp_code:consign_emp_code,
                        source_zone_code:source_zone_code,
                        in_process_waybill_no:in_process_waybill_no
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
    ctx.body = result
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
                    resolve(result.Response.ERROR[0])
                } else {
                    resolve(result.Response.Body[0].OrderResponse[0])
                }
            })
        })
    })
}

module.exports = router;