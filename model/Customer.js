var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connect_url = require('../conf/proj.json').mongodb;
var db = mongoose.createConnection(connect_url);

var CustomerSchema = new Schema({
    account_id: String,
    wechatId: String,
    wxId: [],
    sex: Number,
    d_contact: String,
    d_tel: String,
    d_mobile: String,
    d_province: String,
    d_city: String,
    d_county: String,
    d_address: String,
    source: String,
    type: Number,
    remark: String,
    orderAt: Number,
    createAt: {
        type: Number,
        default: Date.now()
    },
    updateAt: {
        type: Number,
        default: Date.now()
    }
});

var CustomerModel = db.model('Customer', CustomerSchema);
module.exports = CustomerModel;
