var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connect_url = require('../conf/proj.json').mongodb;
var db = mongoose.createConnection(connect_url);

var UserSchema = new Schema({
    bossId :  {             // 主账号id
        type: String,
        default: ""
    },
    adminId : {             // 管理账号id
        type: String,
        default: ""
    },
    username : String,
    password : String,
    nickName : {  // 昵称
        type: String,
        default: "管理员"
    },
    role: {  // 9999999999 超管 //0 公司/团队 1 管理/审核  2 销售
        type: Number,
        default: 2
    },
    power : {    // 0 无测试权限  1 有
        type: Number,
        default: 0
    },
    remarks : String,    // 备注
    department: {        // 部门
        type: String,
        default: ""
    },
    createAt: {
        type: Number,
        default: Date.now()
    },
    updateAt: {
        type: Number,
        default: Date.now()
    },
    loginAt: Number,
    childAccount : [],
    // wechatList: {
    //     type: Array,
    //     default: []
    // }
});

var UserModel = db.model('User', UserSchema);
module.exports = UserModel;
