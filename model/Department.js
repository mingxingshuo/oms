var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connect_url = require('../conf/proj.json').mongodb;
var db = mongoose.createConnection(connect_url);

var DepartmentSchema = new Schema({
    bossId : String,        // 主账号id
    adminId : {             // 管理账号id
        type: String,
        default: ""
    },
    name: String,
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

var DepartmentModel = db.model('Department', DepartmentSchema);
module.exports = DepartmentModel;
