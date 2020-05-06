var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connect_url = require('../conf/proj.json').mongodb;
var db = mongoose.createConnection(connect_url);

var OrderSchema = new Schema({
    orderid: String,
    mailno: String,
    j_company: String,
    j_contact: String,
    j_tel: String,
    j_mobile: String,
    j_province: String,
    j_city: String,
    j_county: String,
    j_address: String,
    d_company: String,
    d_contact: String,
    d_tel: String,
    d_mobile: String,
    d_province: String,
    d_city: String,
    d_county: String,
    d_address: String,
    custid: String,
    pay_method: Number,
    express_type: String,
    parcel_quantity: Number,
    cargo_length: Number,
    cargo_width: Number,
    cargo_height: Number,
    volume: Number,
    cargo_total_weight: Number,
    sendstarttime: Date,
    is_docall: Number,
    need_return_tracking_no: String,
    return_tracking: String,
    temp_range: Number,
    template: String,
    remark: String,
    oneself_pickup_flg: Number,
    special_delivery_type_code: String,
    special_delivery_value: String,
    realname_num: String,
    routelabelForReturn: Number,
    routelabelService: Number,
    is_unified_waybill_no: Number,
    dealtype: {type: Number, default: 0}, //0默认，1已确认 ,2已取消
    orderStateCode: String,
    orderStateDesc: String,
    createAt: {
        type: Number,
        default: Date.now()
    },
    updateAt: {
        type: Number,
        default: Date.now()
    }
});

var OrderModel = db.model('Order', OrderSchema);
module.exports = OrderModel;
