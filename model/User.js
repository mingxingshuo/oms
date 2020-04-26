var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connect_url = require('../conf/proj.json').mongodb;
var db = mongoose.createConnection(connect_url);

var AccountSchema = new Schema({
    username : String,
    password : String,
    nickName : {  // 昵称
        type: String,
        default: "管理员"
    },
    role: {  //0 超级权限  1 1级代理  2  2级代理
        type: Number,
        default: 2
    },
    power : {    // 0 无测试权限  1 有
        type: Number,
        default: 0
    },
    remarks : String,    // 备注
    createAt: {
        type: Number,
        default: Date.now()
    },
    updateAt: {
        type: Number,
        default: Date.now()
    },
    childAccount : []
});

var AccountModel = db.model('Account', AccountSchema);
module.exports = AccountModel;
