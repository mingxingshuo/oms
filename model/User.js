var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connect_url = require('../conf/proj.json').mongodb;
var db = mongoose.createConnection(connect_url);

var UserSchema = new Schema({
    parentId:  {             // 父账号id
        type: String,
        default: ""
    },
    username: String,
    password: String,
    nickName: {           // 昵称
        type: String,
        default: "昵称"
    },
    role: {              // 9999999999 超管 //0 公司/团队 1 管理/审核  2 销售
        type: Number,
        default: 2
    },
    remarks : String,    // 备注
    departmentId: {        // 部门id
        type: String,
        default: ""
    },
    departmentName: {        // 部门名称
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
    loginAt: Number
});

var UserModel = db.model('User', UserSchema);
module.exports = UserModel;
