const request = require('request')

function a() {
    let url = "http://localhost:5300/order/OrderState"
    let xml = '<?xml version="1.0" encoding="UTF-8" ?> <Request service="PushOrderState" lang="zh-CN"> <waybillNo>444123456789</waybillNo> <lastTime>2018-04-16 15:23:24</lastTime> <empCode >845215</empCode> <orderStateCode>40001</orderStateCode> < netCode >755A</ netCode > <bookTime>2018-04-16 15:23:24</bookTime> <orderNo>test01</orderNo> <empPhone>13888888888</empPhone> <orderStateDesc>调度成功,收派员信息</orderStateDesc> <carrierCode >SF</carrierCode > </Request>'
    request({
        url: url,
        method: "POST",
        headers: {
            "content-type": "application/xml",
        },
        body: xml
    }, function(error, response, body) {
            console.log(body,'--------------') // 请求成功的处理逻辑
    });
}
a()