var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connect_url = require('../conf/proj.json').mongodb;
var db = mongoose.createConnection(connect_url);

var WechatSchema = new Schema({
    bossId : String,        // 主账号id
    adminId : {             // 管理账号id
        type: String,
        default: ""
    },
    userId : {               // 销售账号id
        type: String,
        default: ""
    },
    wechatId : String,
    nickName : String,  // 昵称
    remarks : String,    // 备注
    createAt: {
        type: Number,
        default: Date.now()
    },
    updateAt: {
        type: Number,
        default: Date.now()
    }
});

var WechatModel = db.model('Wechat', WechatSchema);
module.exports = WechatModel;
