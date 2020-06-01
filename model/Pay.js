var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connect_url = require('../conf/proj.json').mongodb;
var db = mongoose.createConnection(connect_url);

var PaySchema = new Schema({
    orderid: String,
    info: [{type: String, money: Number, url: String}],
    total: Number
});

var PayModel = db.model('Pay', PaySchema);
module.exports = PayModel;
