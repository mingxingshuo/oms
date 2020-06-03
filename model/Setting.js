var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connect_url = require('../conf/proj.json').mongodb;
var db = mongoose.createConnection(connect_url);

var SettingSchema = new Schema({
    parentId: {             // 父账号id
        type: String,
        default: ""
    },
    j_company: {               // 寄件人公司
        type: String,
        default: "XXX"
    },
    j_contact: String,          // 寄件人姓名
    j_tel: String,              // 寄件人联系电话
    j_address: String,          // 寄件人详细地址
    AddedService: String,       // 代收货款卡号
    custid: String,             // 顺丰月结卡号
    updateAt: {
        type: Number,
        default: Date.now()
    }
});

var SettingModel = db.model('Setting', SettingSchema);
module.exports = SettingModel;
