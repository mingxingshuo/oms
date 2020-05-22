var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connect_url = require('../conf/proj.json').mongodb;
var db = mongoose.createConnection(connect_url);

var CustomerSchema = new Schema({
    account_id: String,
    wechatId:String,
    nickName: String,
    name: String,
    j_contact: String,
    remark: String,
    type: String,
    remark: String,
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
