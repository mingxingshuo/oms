var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connect_url = require('../conf/proj.json').mongodb;
var db = mongoose.createConnection(connect_url);

var PaySchema = new Schema({
    orderid: String,
    type: [], //1微信扫码收款，2支付宝扫码收款，3代收货款收款,4银行卡收款，5已结存收款，6后置收款
    balance: String,
    image_url: []
});

var PayModel = db.model('Pay', PaySchema);
module.exports = PayModel;
