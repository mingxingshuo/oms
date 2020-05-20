var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connect_url = require('../conf/proj.json').mongodb;
var db = mongoose.createConnection(connect_url);

var CustomerSchema = new Schema({
    account_id: String,
    nickName: String,
    wxId: String,
    wxName: String,
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
