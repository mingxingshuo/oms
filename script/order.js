const schedule = require("node-schedule");
const OrderModel = require('../model/Order');

async function orders() {
    let orders = await OrderModel.find(['orderid'])
    for(let order of orders){

    }
}

var rule = new schedule.RecurrenceRule();
var times = [1];
rule.second = times;
var j = schedule.scheduleJob(rule, function () {
    orders()
});