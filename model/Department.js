var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connect_url = require('../conf/proj.json').mongodb;
var db = mongoose.createConnection(connect_url);

var DepartmentSchema = new Schema({
    parentId: {
        type: String,
        default: ""
    },
    name: String,       // 部门名称
    remarks: String,    // 备注
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
